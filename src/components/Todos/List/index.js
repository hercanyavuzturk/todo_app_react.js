import React, { useState } from "react";

export default function List(props) {
  function toggleTodoCompletion(index) {
    const updatedTodos = [...props.todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    props.setTodos(updatedTodos);
  }
  function deleteTodo(index) {
    const updatedTodos = props.todos.filter((_, i) => i !== index);
    props.setTodos(updatedTodos);
  }
  const [filter, setFilter] = useState("all");

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }

  const filteredTodos = props.todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    } else if (filter === "completed") {
      return todo.completed;
    }
    return true;
  });
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {/* <li className="completed">
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Learn JavaScript</label>
                <button className="destroy"></button>
            </div>
        </li> */}
        {filteredTodos.map((todo, i) => (
          <li key={i} className={todo.completed ? "completed" : ""}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onClick={() => toggleTodoCompletion(i)}
              />
              <label>{todo.text}</label>
              <button
                className="destroy"
                onClick={() => deleteTodo(i)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
      <footer className="footer">
        <span className="todo-count">
          <strong>2</strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <a
              href="#/"
              className={filter === "all" ? "selected" : ""}
              onClick={() => handleFilterChange("all")}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/"
              className={filter === "active" ? "selected" : ""}
              onClick={() => handleFilterChange("active")}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/"
              className={filter === "completed" ? "selected" : ""}
              onClick={() => handleFilterChange("completed")}
            >
              Completed
            </a>
          </li>
        </ul>

        <button className="clear-completed">Clear completed</button>
      </footer>
    </section>
  );
}
