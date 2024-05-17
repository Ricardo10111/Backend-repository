// todo add 'limpiar mi cuarto'
// todo done 10
// todo ls
// todo reset

// necestimos
// - un archivo para guardar los todos (json)
// - una funcion para cada comando
// -usar process.argv para leer los comandos
// -usar fs para leer y escribir archivos

const fs = require("fs");
const dbFile = "db.json";

function init() {
  const fileExists = fs.existsSync(dbFile);
  if (!fileExists) {
    fs.writeFileSync(dbFile, JSON.stringify({ todos: [] }));
  }
}

function getTodos() {
  const content = fs.readFileSync(dbFile, "utf-8");
  return JSON.parse(content).todos;
}

function updateTodos(todos) {
  const newTodos = { todos: todos };
  const newTodosAsString = JSON.stringify(newTodos);
  fs.writeFileSync(dbFile, newTodosAsString);
}

function add(task) {
  const todos = getTodos();
  todos.push({ task: task, done: false });
  updateTodos(todos);
}

function done(taskIndex) {
  const todos = getTodos();
  todos.splice(taskIndex, 1);
  updateTodos(todos);
}

function ls() {
  const todos = getTodos();

  if (!todos.length) {
    console.log("EMPTY TODO LIST");
    process.exit();
  }
  todos.forEach((todo, index) => {
    console.log(index, ' _ ', todo)
  });
}

function reset() {
  // actualizar el archivo
  updateTodos([]);
}

function main() {
  const command = process.argv[2];
  const argument = process.argv[3];

  init();
  if (command === "add") {
    if (!argument) {
      console.error("missing argument");
      process.exit(1);
    }
    add(argument);
    ls();
    console.log("todo added");
  } else if (command === "done") {
    if (!argument) {
      console.error("missing argument");
      process.exit(1);
    }
    const idx = parseInt(argument);
    if (isNaN(idx)) {
      console.error("invalid index");
      process.exit(1);
    }

    const todos = getTodos();
    if (idx < 0 || idx >= todos().length) {
      console.error("invalid index");
      process.exit(1);
    }
    done(idx);
    ls();
    console.log("todo done");
  } else if (command === "ls") {
    const todos = getTodos();

    if (!todos.length) {
      console.log("no todos");
      process.exit(0);
    }

    ls();
  } else if (command === "reset") {
    reset();
    console.log("todos reset");
  } else {
    console.error(`comando no encontrado ${command}`);
    process.exit(1);
  }
}
main();
