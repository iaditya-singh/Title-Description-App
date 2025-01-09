import React, { useContext, useEffect, useState } from "react";
import TodoContext from "./TodoContext";
import { GrUpdate } from "react-icons/gr";

const Form = () => {
  const { addTodo, edit, updateTodo } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    // addTodo(title, description);

    if (edit.isEdit === false) {
      addTodo(title, description);
    } else {
      console.log(edit)
      updateTodo(edit.todo.id, title, description);

    }
    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    setTitle(edit?.todo.title);
    setDescription(edit?.todo.description);
  }, [edit]);

  return (
    <form onSubmit={handlesubmit}>
      <input
        type="text"
        className="border border-grey-900 p-2 w-full rounded-md focus:outline-indigo-600 placeholder:text-sm my-2"
        placeholder="Title here"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <textarea
        placeholder="Enter Description"
        className="border border-grey-900 p-2 w-full rounded-md focus:outline-indigo-600 placeholder:text-sm my-2"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button className="bg-green-600 font-bold hover:bg-green-700 duration-50 py-2 px-5 rounded-md text-white w-full">
        Submit
      </button>
    </form>
  );
};

export default Form;
