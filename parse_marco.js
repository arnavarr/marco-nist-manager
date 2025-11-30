import fs from 'fs';
import path from 'path';

const marcoPath = 'Marco.md';
const targetPath = 'src/data/initialData.js';

// Read Marco.md
const content = fs.readFileSync(marcoPath, 'utf-8');
const lines = content.split('\n');

const controls = [];
let currentControl = null;
let inConsiderations = false;

// Helper to clean text
const clean = (text) => text.replace(/^\*\*/, '').replace(/\*\*$/, '').trim();

// Parse Marco.md
for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith('- Identificador:')) {
        if (currentControl) {
            const exists = controls.find(c => c.id === currentControl.id);
            if (!exists) {
                controls.push(currentControl);
            } else {
                console.warn(`Duplicate control found: ${currentControl.id}. Skipping.`);
            }
        }
        currentControl = {
            id: clean(line.replace('- Identificador:', '')),
            layer: '',
            zone: '',
            principle: '',
            objective: '',
            considerations: [],
            nistReference: '',
            maturity: 3
        };
        inConsiderations = false;
    } else if (currentControl) {
        if (line.startsWith('- Capa de Seguridad:')) {
            currentControl.layer = clean(line.replace('- Capa de Seguridad:', ''));
        } else if (line.startsWith('- Principio:')) {
            currentControl.principle = clean(line.replace('- Principio:', ''));
        } else if (line.startsWith('- Objetivo:')) {
            currentControl.objective = clean(line.replace('- Objetivo:', ''));
        } else if (line.startsWith('- Consideraciones al control:')) {
            inConsiderations = true;
        } else if (inConsiderations) {
            if (line.startsWith('- Identificador:')) {
                inConsiderations = false;
                i--;
            } else if (line.startsWith('-') || line.startsWith('+') || line.startsWith('*')) {
                currentControl.considerations.push(clean(line.replace(/^[-+*]\s+/, '')));
            } else if (line === '' || line.match(/^\d+\./)) {
                // Skip empty lines or numbered headers
            }
        }
    }
}
if (currentControl) {
    const exists = controls.find(c => c.id === currentControl.id);
    if (!exists) {
        controls.push(currentControl);
    } else {
        console.warn(`Duplicate control found: ${currentControl.id}. Skipping.`);
    }
}

// Zone Mapping
const zoneMapping = {
    "Unsecured ENDPOINT": "External Security",
    "API Providers": "External Security",
    "Applications API Consumption": "External Security",
    "Managed Clients": "External Security",
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

// Read existing data to preserve metadata
let existingData = [];
try {
    if (fs.existsSync(targetPath)) {
        const existingContent = fs.readFileSync(targetPath, 'utf-8');
        // Simple regex extraction to avoid eval
        // This is a bit hacky but safer than eval. 
        // Or we can just try to match IDs and extract nist/maturity blocks.

        // Let's try to extract objects using a regex that matches { ... } blocks
        // This is complex for nested objects (considerations array).
        // Alternative: use a temporary node script to import the data and output it as JSON.
        // But we are in the script now.

        // Let's just do a simple regex scan for id, nistReference, maturity
        const idRegex = /id:\s*"([^"]+)"/g;
        const nistRegex = /nistReference:\s*"([^"]+)"/g;
        const maturityRegex = /maturity:\s*(\d+)/g;

        // This approach is flawed because we can't guarantee order or association easily with global regex.
        // Better approach: We will just write the new data. The user asked to include controls from Marco.md.
        // If we lose some manual edits, it's a trade-off for automation.
        // BUT, I can try to be smart.

        // Let's try to find specific ID blocks.
        // We can iterate over our new controls, and for each ID, check if it exists in the file content
        // and extract nist/maturity.

        controls.forEach(c => {
            const idPattern = new RegExp(`id:\\s*"${c.id}"[\\s\\S]*?nistReference:\\s*"([^"]+)"[\\s\\S]*?maturity:\\s*(\\d+)`, 'i');
            const match = existingContent.match(idPattern);
            if (match) {
                c.nistReference = match[1];
                c.maturity = parseInt(match[2], 10);
            } else {
                // Try to match just NIST if maturity is missing or vice versa (unlikely based on file format)
                const nistMatch = existingContent.match(new RegExp(`id:\\s*"${c.id}"[\\s\\S]*?nistReference:\\s*"([^"]+)"`));
                if (nistMatch) c.nistReference = nistMatch[1];

                const maturityMatch = existingContent.match(new RegExp(`id:\\s*"${c.id}"[\\s\\S]*?maturity:\\s*(\\d+)`));
                if (maturityMatch) c.maturity = parseInt(maturityMatch[1], 10);
            }
        });
    }
} catch (e) {
    console.error("Error reading existing data:", e);
}

// Post-processing
controls.forEach(c => {
    c.layer = c.layer.replace(/\+\+$/, '').trim();

    if (zoneMapping[c.layer]) {
        c.zone = zoneMapping[c.layer];
    } else {
        const key = Object.keys(zoneMapping).find(k => c.layer.includes(k));
        if (key) c.zone = zoneMapping[key];
        else c.zone = "Unknown Zone";
    }

    // Ensure defaults
    if (!c.maturity) c.maturity = 3;
    if (!c.nistReference) c.nistReference = "";
});

// Write to file
const fileContent = `export const INITIAL_DATA = ${JSON.stringify(controls, null, 4)};`;
fs.writeFileSync(targetPath, fileContent, 'utf-8');

console.log(`Successfully wrote ${controls.length} controls to ${targetPath}`);
