const express = require("express");
const fs = require("fs");
const app = express();
const port = 8080;

app.use(express.json());

const kodersDbFile = "koders.json";

if (!fs.existsSync(kodersDbFile)) {
  fs.writeFileSync(kodersDbFile, JSON.stringify({ koders: [] }));
}

function readKoders() {
  const data = fs.readFileSync(kodersDbFile, "utf8");
  return JSON.parse(data).koders;
}

function writeKoders(koders) {
  fs.writeFileSync(kodersDbFile, JSON.stringify({ koders: koders }));
}

app.post("/koders", (req, res) => {
  const newKoder = req.body;
  if (!newKoder.name) {
    res.status(400);
    res.json({ error: "Koder name is required" });
    return;
  }
  if (!newKoder.generation) {
    res.status(400);
    res.json({ error: "Koder generation is required" });
    return;
  }
  if (!newKoder.gender) {
    res.status(400);
    res.json({ error: "Koder gender is required" });
    return;
  }
  if (newKoder.age === undefined) {
    res.status(400);
    res.json({ error: "Koder age is required" });
    return;
  }
  if (newKoder.isActive === undefined) {
    res.status(400);
    res.json({ error: "Koder isActive is required" });
    resturn;
  }

  const koders = readKoders();
  koders.push(newKoder);
  writeKoders(koders);
  res.status(201).json({ message: "Koder added", koder: newKoder, koders });
});

app.get("/koders", (req, res) => {
  const koders = readKoders();
  res.json(koders);
});

app.delete("/koders/:name", (req, res) => {
  const name = req.params.name;
  let koders = readKoders();
  const initialLength = koders.length;
  koders = koders.filter((koder) => koder.name !== name);

  if (koders.length === initialLength) {
    return res.status(404).json({ error: "Koder not found" });
  }

  writeKoders(koders);
  res.json({ message: "Koder removed", name, koders });
});

app.delete("/koders", (req, res) => {
  writeKoders([]);
  res.json({ message: "All koders removed" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
