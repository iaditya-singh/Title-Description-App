import React, { useContext } from "react";
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import TodoContext from "./TodoContext";

const Card = ({ todo }) => {
  const { deleteTodo, editTodo } = useContext(TodoContext);

  return (
    <div className="p-5 relative border rounded-md shadow-sm ">
      <h1 className="font-bold  text-2xl">{todo.title}</h1>
      <p className="text-gray-500 text-sm font-semibold ">{todo.description}</p>

      <div className="flex  p-1 rounded-md space-x-2 absolute top-3 right-3">
        <button className="text-yellow-500" onClick={() => editTodo(todo)}>
          <FaRegEdit />
        </button>
        <button className="text-red-500" onClick={() => deleteTodo(todo.id)}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default Card;
