
const fs = require('fs');
const path = require('path');

try {
    // Read controls.json
    // It might be UTF-16LE, so we need to handle that. 
    // But fs.readFileSync with 'utf8' might fail if it's strictly UTF-16LE with BOM.
    // Let's try to read as buffer and detect or just try utf16le.

    let controlsRaw = fs.readFileSync('controls.json');
    let controlsJson;

    // Simple heuristic for encoding detection or just try parse
    try {
        let str = controlsRaw.toString('utf8');
        if (str.charCodeAt(0) === 0xFEFF) {
            str = str.slice(1);
        }
        controlsJson = JSON.parse(str);
    } catch (e) {
        try {
            let str = controlsRaw.toString('utf16le');
            if (str.charCodeAt(0) === 0xFEFF) {
                str = str.slice(1);
            }
            controlsJson = JSON.parse(str);
        } catch (e2) {
            console.error("Failed to parse controls.json:", e2.message);
            process.exit(1);
        }
    }

    console.log(`controls.json has ${controlsJson.length} items.`);
    const controlsIds = new Set(controlsJson.map(c => c.id));

    // Read initialData.js
    const initialDataRaw = fs.readFileSync('src/data/initialData.js', 'utf8');
    // Extract the array. It starts after "export const INITIAL_DATA = " and ends with ";"
    const match = initialDataRaw.match(/export const INITIAL_DATA = (\[[\s\S]*?\]);/);

    if (!match) {
        console.error("Could not find INITIAL_DATA array in src/data/initialData.js");
        process.exit(1);
    }

    const initialDataJson = JSON.parse(match[1]);
    console.log(`initialData.js has ${initialDataJson.length} items.`);
    const initialDataIds = new Set(initialDataJson.map(c => c.id));

    // Compare
    const missingInInitial = [...controlsIds].filter(id => !initialDataIds.has(id));
    const missingInControls = [...initialDataIds].filter(id => !controlsIds.has(id));

    if (missingInInitial.length > 0) {
        console.log("IDs in controls.json but MISSING in initialData.js:", missingInInitial);
    } else {
        console.log("All IDs from controls.json are present in initialData.js");
    }

    if (missingInControls.length > 0) {
        console.log("IDs in initialData.js but MISSING in controls.json:", missingInControls);
    }

} catch (err) {
    console.error("Error:", err);
}
