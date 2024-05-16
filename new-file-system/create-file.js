const fs = require('node:fs');

const script = `
const fs = require('node:fs');
fs.writeFileSync('hola2.txt', 'Hola Koders 2')`

fs.writeFileSync('creator.js', script)
fs.writeFileSync('hola2.txt', 'Hola Koders 2')