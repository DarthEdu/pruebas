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

const update = (id, data) => {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) return null;
  todos[index] = { ...todos[index], ...data };
  return todos[index];
};

const remove = (id) => {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) return false;
  todos.splice(index, 1);
  return true;
};

module.exports = { add, getById, getAll, update, remove };