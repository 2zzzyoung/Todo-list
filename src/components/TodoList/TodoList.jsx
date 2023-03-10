import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "123", text: "shopping", status: "active" },
    { id: "124", text: "study", status: "active" },
  ]);
  const handleAdd = (todo) => {
    console.log(todo);
    setTodos([...todos, todo]);
  };
  return (
    <>
      <section>
        <ul>
          {todos.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </section>
      <AddTodo onAdd={handleAdd} />
    </>
  );
}
