const todos = [];

const add = (todo) => {
  const newTodo = {
    id: todos.length + 1,
    ...todo,
  };
  todos.push(newTodo);
  return newTodo;
};

const getById = (id) => {
  return todos.find((todo) => todo.id === id) || null;
};

const getAll = () => {
  return todos;
};

module.exports = { add, getById, getAll };