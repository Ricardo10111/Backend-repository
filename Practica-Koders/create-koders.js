// Crear un script que permita:
// - - - -
// Registrar un nuevo koder [ add ] Listar todos los koders [ ls ] Eliminar koders por nombre [ rm ] Eliminar todos los koders [ reset ]
// script debe:
// usar un archivo .json como base de datos
// Recibir los datos por el argv de node

const fs = require("fs");
const dbFile = "db.json";

function init() {
  const fileExists = fs.existsSync(dbFile);
  if (!fileExists) {
    fs.writeFileSync(dbFile, JSON.stringify({ koders: [] }));
  }
}

function getKoders() {
  const content = fs.readFileSync(dbFile, "utf-8");
  return JSON.parse(content).koders;
}

function updateKoders(koders) {
  const newKoders = { koders: koders };
  const newKodersAsString = JSON.stringify(newKoders);
  fs.writeFileSync(dbFile, newKodersAsString);
}

function add(name) {
  const koders = getKoders();
  koders.push({ name: name });
  updateKoders(koders);
}

function rm(name) {
  const koders = getKoders();
  const newKoders = koders.filter(koder => koder.name !== name);
  updateKoders(newKoders);
}

function ls() {
  const koders = getKoders();

  if (!koders.length) {
    console.log("EMPTY KODER LIST");
    process.exit();
  }
  koders.forEach((koder, index) => {
    console.log(index, ' _ ', koder)
  });
}

function reset() {
  updateKoders([]);
}

function main() {
  const [command, ...args] = process.argv.slice(2);

  init();

  switch (command) {
    case 'add':
      add(args[0]);
      break;
    case 'rm':
      rm(args[0]);
      break;
    case 'ls':
      ls();
      break;
    case 'reset':
      reset();
      break;
    default:
      console.log('Invalid command');
  }
}

main();