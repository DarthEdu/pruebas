const { add, getById, getAll, update, remove } = require("./models/todoModel");

const createTodo = (req, res) => {
  const { title, description, completed = false } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({ error: "Title is required" });
  }

  const todo = add({
    title: title.trim(),
    description: description || "",
    completed,
  });

  res.status(201).json(todo);
};

const getAllTodos = (req, res) => {
  res.json(getAll());
};

const getTodoById = (req, res) => {
  const id = parseInt(req.params.id);
  const todo = getById(id);
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }
  res.json(todo);
};

const updateTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, description, completed } = req.body;
  const updated = update(id, { title, description, completed });
  if (!updated) {
    return res.status(404).json({ error: "Todo not found" });
  }
  res.json(updated);
};

const deleteTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = remove(id);
  if (!deleted) {
    return res.status(404).json({ error: "Todo not found" });
  }
  res.status(204).send();
};

module.exports = { createTodo, getAllTodos, getTodoById, updateTodo, deleteTodo };
