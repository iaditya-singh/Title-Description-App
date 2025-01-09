import React, { useContext } from "react";
import Card from "./Card";
import TodoContext from "./TodoContext";

const CardContainer = () => {

 const {todos} = useContext(TodoContext)


  return (
    <div className=" grid grid-cols-1 md:grid-cols-4 gap-4 my-5">
      {todos.map((todo) => (
        <Card key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default CardContainer;
