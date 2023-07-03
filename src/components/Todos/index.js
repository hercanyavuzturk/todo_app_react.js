import React, { useState, useEffect } from "react";
import "./style.css";
import Input from "./Input";
import List from "./List";


export default function Todos() {
  const [todos, setTodos] = useState([{ text: "sport", completed: false }]);
  
  useEffect(() => {
    console.log(todos);
  }, [todos])
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <Input addTodo={setTodos} todos={todos} />
        <List todos={todos} setTodos={setTodos}/>
        
      </header>
    </section>
  );
}
