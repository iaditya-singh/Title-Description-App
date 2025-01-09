import { createContext } from "react";
import { useState } from "react";

const TodoContext = createContext();

//Provider
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, title: "some Title", description: "some description" },
    { id: 2, title: "some Title", description: "some description" },
  ]);

  const [edit, setEdit] = useState({ isEdit: false, todo: {} });

  const addTodo = (title, description) => {
    setTodos([
      { id: crypto.randomUUID(), title: title, description: description },
      ...todos,
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (todo) => {
    setEdit({ isEdit: true, todo: todo });
  };

  const updateTodo = (oldId, newTitle, newDescription) => {
    console.log(oldId, newTitle, newDescription);
    setTodos(
      todos.map((todo) =>
        todo.id === oldId
          ? { id: oldId, title: newTitle, description: newDescription }
          : todo
      )
    );
    setEdit({ isEdit: false, todo: {} });
  };

  return (
    <TodoContext.Provider
      value={{ editTodo, updateTodo, edit, todos, deleteTodo, addTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
