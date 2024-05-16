const fs = require("node:fs");


const createFileFn = (nameDir) => {
const createDir = fs.mkdirSync(nameDir);

if (createDir) {
  console.error("Error creating directory");
  process.exit(1);
} else {
  console.log("Directory created");
}
}
createFileFn('new-dir3')