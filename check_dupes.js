
const fs = require('fs');

const content = fs.readFileSync('Marco.md', 'utf8');
const lines = content.split('\n');
const ids = [];
lines.forEach(line => {
    if (line.trim().startsWith('- Identificador:')) {
        ids.push(line.trim().replace('- Identificador:', '').trim().replace(/\*\*/g, ''));
    }
});

console.log(`Total IDs found in Marco.md: ${ids.length}`);
const uniqueIds = new Set(ids);
console.log(`Unique IDs: ${uniqueIds.size}`);

if (ids.length !== uniqueIds.size) {
    console.log("Duplicates found:");
    const seen = new Set();
    const duplicates = new Set();
    ids.forEach(id => {
        if (seen.has(id)) duplicates.add(id);
        seen.add(id);
    });
    console.log([...duplicates]);
}

const initialDataRaw = fs.readFileSync('./src/data/initialData.js', 'utf8');
const match = initialDataRaw.match(/export const INITIAL_DATA = (\[[\s\S]*?\]);/);
const initialData = JSON.parse(match[1]);
console.log(`Total controls in initialData.js: ${initialData.length}`);
const initialIds = new Set(initialData.map(c => c.id));
console.log(`Unique IDs in initialData.js: ${initialIds.size}`);
