import React from "react";

export default function FilterTodo() {
  const handleAdd = () => {};
  const handleActive = () => {};
  const handleCompleted = () => {};
  return (
    <>
      <button onClick={handleAdd}>add</button>
      <button onClick={handleActive}>active</button>
      <button onClick={handleCompleted}>completed</button>
    </>
  );
}
