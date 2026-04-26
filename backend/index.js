const express = require("express");
const { createTodo } = require("./handler");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "API working" });
});

app.post("/api/todos", createTodo);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});