const express = require("express");
const server = express();
const port = 8080;

server.use(express.json());

const todos = [];

server.get("/todos", (req, resp) => {
  resp.json({
    message: "All todos",
    todos: todos,
  });
});

server.post("/todos", (req, resp) => {
  console.log(`body ${resp.body}`);
  const newTodo = req.body.todo;
  if (!newTodo) {
    resp.status(400);
    resp.json({
      message: "todo is require",
    });
    return;
  }
  todos.push(newTodo);
  resp.json({
    message: "new added todo",
    todos: todos,
  });
});

server.delete("/todos/:idx", (req, resp) => {
  const indexToDelete = req.params.idx;
  const indexAsInteger = parseInt(indexToDelete);
  if (isNaN(indexAsInteger)) {
    resp.status(400);
    resp.json({
      message: "invalid index, must be a number",
    });

    return;
  }

  if (indexAsInteger < 0 || indexAsInteger >= todos.length) {
    resp.status(400);
    resp.json({
      message: "invalid index, out of bound",
    });
    return;
  }

  todos.splice(indexAsInteger, 1);
  resp.json({
    message: "todo delete succesfully",
    todos: todos,
  });
});

server.listen(port, () => {
  console.log(`Server running in the port ${port}`);
});
