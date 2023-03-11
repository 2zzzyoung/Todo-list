import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";

export default function TodoList() {
  const [todos, SetTodos] = useState([
    {
      id: "123",
      text: "shopping",
      status: "active",
    },
    {
      id: "124",
      text: "study",
      status: "active",
    },
  ]);

  const handleAdd = (todo) => {
    SetTodos([...todos, todo]);
  };
  const handleUpdate = (updated) => {
    SetTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  };
  const handleDelete = (deleted) =>
    SetTodos(todos.filter((t) => t.id !== deleted.id));

  return (
    <>
      <section>
        <ul>
          {todos.map((item) => (
            <Todo
              key={item.id}
              todo={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      </section>
      <AddTodo onAdd={handleAdd} />
    </>
  );
}
