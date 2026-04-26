const { add } = require("./models/todoModel");

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

module.exports = { createTodo };
