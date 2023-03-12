import React from "react";
import { BsTrash } from "react-icons/bs";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "complete" : "active";
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li>
      <input
        type="checkbox"
        id="checkbox"
        checked={status === "complete"}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{text}</label>
      <span>
        <button onClick={handleDelete}>
          <BsTrash />
        </button>
      </span>
    </li>
  );
}
