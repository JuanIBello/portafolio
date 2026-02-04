const express = require("express");
const app = express();

app.use(express.json());

let users = [];

// GET
app.get("/users", (req, res) => {
  res.json(users);
});

// POST
app.post("/users", (req, res) => {
  const user = { id: Date.now(), name: req.body.name };
  users.push(user);
  res.status(201).json(user);
});

// PUT
app.put("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).send("No encontrado");

  user.name = req.body.name;
  res.json(user);
});

// DELETE
app.delete("/users/:id", (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.sendStatus(204);
});

app.listen(3000, () => console.log("Servidor en puerto 3000"));
