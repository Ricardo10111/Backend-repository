const fs = require('node:fs');

const content = fs.readFileSync('hola.txt', 'utf8')
console.log(`content: ${content}`);