import fs from 'fs';

const content = fs.readFileSync('Marco.md', 'utf-8');
const lines = content.split('\n');

const controls = [];
let currentControl = null;
let inConsiderations = false;

// Helper to clean text
const clean = (text) => text.replace(/^\*\*/, '').replace(/\*\*$/, '').trim();

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith('- Identificador:')) {
        if (currentControl) {
            controls.push(currentControl);
        }
        currentControl = {
            id: clean(line.replace('- Identificador:', '')),
            layer: '',
            zone: '', // We might need to infer zone or leave it empty if not explicitly in the item
            principle: '',
            objective: '',
            considerations: [],
            nistReference: '', // Not always present in text, might need mapping or extraction if available
            maturity: 3 // Default or extract if available
        };
        inConsiderations = false;
    } else if (currentControl) {
        if (line.startsWith('- Capa de Seguridad:')) {
            currentControl.layer = clean(line.replace('- Capa de Seguridad:', ''));
            // Infer zone based on layer or section headers if possible, but for now let's just get the layer.
            // The zone is actually a higher level grouping in the MD file (e.g. "## Unmanaged Clients" is a layer, but "External Security" is a zone).
            // The MD structure is:
            // # Marco de arquitectura de seguridad
            // ## Zone (e.g. Unmanaged Clients - wait, Unmanaged Clients is a layer in the intro, but here it seems to be a section)
            // Actually, looking at lines 60-68:
            // Zones: External Security, Infrastructure Security, Management of security, AI Security Considerations.
            // Layers are listed under zones.

            // Let's try to map layers to zones based on the intro text or hardcode the mapping if it's static.
            // Mapping based on lines 60-85:
            // External Security: Unmanaged Clients, Managed Clients (partially?), API Providers, Applications API Consumption, Physical Devices/Controllers (IoT)
            // Infrastructure Security: Boundary Security, Network Security, Server Security, Containers Security, Application Security, Data & Cryptography Security, Post-Quantum Cryptography Security
            // Management of security: Identity and Access Management, Monitoring Management
            // AI Security Considerations: AI Security Considerations

        } else if (line.startsWith('- Principio:')) {
            currentControl.principle = clean(line.replace('- Principio:', ''));
        } else if (line.startsWith('- Objetivo:')) {
            currentControl.objective = clean(line.replace('- Objetivo:', ''));
        } else if (line.startsWith('- Consideraciones al control:')) {
            inConsiderations = true;
        } else if (inConsiderations) {
            if (line.startsWith('- Identificador:')) {
                // Should have been caught by the first if, but just in case
                inConsiderations = false;
                i--; // Reprocess line
            } else if (line.startsWith('-') || line.startsWith('+') || line.startsWith('*')) {
                // It's a bullet point
                currentControl.considerations.push(clean(line.replace(/^[-+*]\s+/, '')));
            } else if (line === '' || line.match(/^\d+\./)) {
                // Empty line or numbered list start (sometimes headers are numbered like "1. Secure connection configuration")
                // If it's a numbered header, it might be the start of a new section, but we only care about "- Identificador:" to start a new control.
                // We stay in considerations until we hit a new key or end of block.
                // But usually considerations are a list. If we hit something that doesn't look like a list item and is not empty, maybe we should stop?
                // In the file, considerations are indented lists.
            }
        }
    }
}
if (currentControl) {
    controls.push(currentControl);
}

// Post-processing to add Zones and NIST/Maturity if possible
// The text doesn't explicitly have NIST or Maturity in the "- Key: Value" format for most controls.
// The INITIAL_DATA had them. The user wants "all information available in Marco.md".
// If Marco.md doesn't have NIST/Maturity for every control, I might have to leave them blank or keep defaults.
// However, looking at the text, I don't see explicit "NIST Reference" or "Maturity" lines in the control blocks.
// I will try to preserve existing data from INITIAL_DATA if the ID matches.

const zoneMapping = {
    "Unsecured ENDPOINT": "External Security",
    "API Providers": "External Security",
    "Applications API Consumption": "External Security",
    "Managed Clients": "External Security", // Wait, in the text it says "Managed Clients (Company Devices & BYOD)"
    "Physical Devices/Controllers (IoT)": "External Security",
    "Boundary Security": "Infrastructure Security",
    "Network Security": "Infrastructure Security",
    "Server Security": "Infrastructure Security",
    "Container Security": "Infrastructure Security",
    "Application Security": "Infrastructure Security",
    "Data & Cryptography Security": "Infrastructure Security",
    "Post-Quantum Cryptography Security": "Infrastructure Security",
    "Identity and Access Management": "Management of security",
    "Monitoring Management": "Management of security",
    "MLOps AI Security": "AI Security Considerations"
};

// Fix some layer names to match mapping keys if necessary
controls.forEach(c => {
    // Clean up layer name
    c.layer = c.layer.replace(/\+\+$/, '').trim(); // Remove ++ if present

    // Assign zone
    if (zoneMapping[c.layer]) {
        c.zone = zoneMapping[c.layer];
    } else {
        // Fallback or try to find partial match
        const key = Object.keys(zoneMapping).find(k => c.layer.includes(k));
        if (key) c.zone = zoneMapping[key];
        else c.zone = "Unknown Zone";
    }

    // Assign random or default maturity if not found (since it's not in MD)
    // Actually, I should check if I can map it from the existing INITIAL_DATA
    c.maturity = 3; // Default
    c.nistReference = "";
});

console.log(JSON.stringify(controls, null, 2));
