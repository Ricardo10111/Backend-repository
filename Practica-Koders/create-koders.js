// Crear un script que permita:
// - - - -
// Registrar un nuevo koder [ add ] Listar todos los koders [ ls ] Eliminar koders por nombre [ rm ] Eliminar todos los koders [ reset ]
// script debe:
// usar un archivo .json como base de datos
// Recibir los datos por el argv de node

const fs = require("fs");
const dbFile = "db.json";
const prompt = require("prompt-sync")();

function init() {
  const fileExists = fs.existsSync(dbFile);
  if (!fileExists) {
    fs.writeFileSync(dbFile, JSON.stringify({ koders: [] }));
  } else {
    console.log("File already exists");
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
  if (koders.find((koder) => koder.name === name)) {
    const option = prompt(
      "Koder already exists, do you want to add it again?  "
    );
    if (option.toLocaleLowerCase() === "no") {
      console.log("Koder not added");
      ls();
      process.exit();
    } else {
      koders.push({ name: name });
      console.log("Koder added");
    }

    updateKoders(koders);
  }
  koders.push({ name: name });
  updateKoders(koders);
}

function rm(name) {
  const koders = getKoders();
  const newKoders = koders.filter((koder) => koder.name !== name);
  updateKoders(newKoders);
}

function ls() {
  const koders = getKoders();

  if (!koders.length) {
    console.log("EMPTY KODER LIST");
    process.exit();
  }
  koders.forEach((koder, index) => {
    console.log(index, " _ ", koder);
  });
}

function reset() {
  updateKoders([]);
}

function main() {
  const [command, ...args] = process.argv.slice(2);

  init();

  switch (command) {
    case "add":
      add(args[0]);
      ls();
      console.log("Koder added");
      break;
    case "rm":
      if (!args[0]) {
        console.error("missing argument");
        process.exit(1);
      }
      if (!getKoders().find((koder) => koder.name === args[0])) {
        console.error("Koder not found");
        process.exit(1);
      } else {
        const option = prompt("Are you sure you want to delete this koder? ");
        if (option.toLocaleLowerCase() === "no") {
          console.log("Koder not removed");
          ls();
          process.exit();
        } else {
          rm(args[0]);
          console.log("Koder removed");
          ls();
        }
      }
      break;
    case "ls":
      ls();
      break;
    case "reset":
      reset();
      console.log("Koders list reset");
      break;
    default:
      console.log("Invalid command");
  }
}

main();
