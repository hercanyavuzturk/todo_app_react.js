import React, { useState } from "react";
import "../style.css";

export default function Input(props) {
  const [input, setInput] = useState({text: "", completed: false});

  function onChangeInput(e) {
    setInput({...input, [e.target.name] : e.target.value});
  }

  function onSubmit(e) {
    e.preventDefault();
    props.addTodo([...props.todos, input]);

    setInput({text: ""});
  }

  console.log(props.todos)

  return (
    <form onSubmit={onSubmit}>
      <input
        name = "text"
        onChange={onChangeInput}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={input.text}
      />
    </form>
  );
}
