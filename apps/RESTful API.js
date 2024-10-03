const express = require("express");
const app = express();

let items = [];

app.get("/items", (req, res) => {
  res.json(items);
});

app.post("/items", (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.json(newItem);
});

app.listen(3000, () => {
  console.log("REST API running on http://localhost:3000");
});
