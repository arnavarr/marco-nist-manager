const fs = require('fs');

const marcoContent = fs.readFileSync('Marco.md', 'utf8');
const initialDataContent = fs.readFileSync('src/data/initialData.js', 'utf8');

// Extract IDs from Marco.md
const marcoIds = [];
const lines = marcoContent.split('\n');
lines.forEach((line, index) => {
    if (line.includes('Identificador:')) {
        // loose match to see what we might be missing
        const match = line.match(/Identificador:\s*(.*)/);
        if (match) {
            let id = match[1].trim();
            // Clean up bold markers if present
            id = id.replace(/^\*\*/, '').replace(/\*\*$/, '').trim();
            marcoIds.push({ id, line: index + 1, raw: line });
        }
    }
});

console.log(`Found ${marcoIds.length} potential IDs in Marco.md`);

// Extract IDs from initialData.js
const initialDataIds = new Set();
const idRegex = /id:\s*"([^"]+)"/g;
let match;
while ((match = idRegex.exec(initialDataContent)) !== null) {
    initialDataIds.add(match[1]);
}

console.log(`Found ${initialDataIds.size} IDs in initialData.js`);

// Find missing
const missing = marcoIds.filter(item => !initialDataIds.has(item.id));

if (missing.length > 0) {
    console.log("Missing IDs:", missing);
} else {
    console.log("No missing IDs found with this loose matching.");
    // Check for duplicates in Marco.md
    const seen = new Set();
    const duplicates = [];
    marcoIds.forEach(item => {
        if (seen.has(item.id)) duplicates.push(item);
        seen.add(item.id);
    });
    if (duplicates.length > 0) {
        console.log("Duplicates in Marco.md:", duplicates);
    }
}
