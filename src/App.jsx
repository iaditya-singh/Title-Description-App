import React, { useState } from "react";
import Navbar from "./components/navbar";
import Form from "./components/Form";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import { TodoProvider } from "./components/TodoContext";

const App = () => {

  


  return (
    <TodoProvider>
      <div className="relative min-h-screen">
      <Navbar />

      <div className="container mx-auto p-10">
        <Form />
        <CardContainer  />
      </div>
      <Footer />
    </div>
    </TodoProvider>
  );
};

export default App;
