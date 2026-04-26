const express = require("express");
const { createTodo, getAllTodos, getTodoById, updateTodo, deleteTodo } = require("./handler");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "API working" });
});

app.get("/api/todos", getAllTodos);
app.get("/api/todos/:id", getTodoById);
app.post("/api/todos", createTodo);
app.put("/api/todos/:id", updateTodo);
app.delete("/api/todos/:id", deleteTodo);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});