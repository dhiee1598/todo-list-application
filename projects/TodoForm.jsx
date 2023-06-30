import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [list, setNewList] = useState("");

  const onSubmitButton = (e) => {
    e.preventDefault();

    addTodo(list);
    setNewList("");
  };
  return (
    <>
      <form onSubmit={onSubmitButton}>
        <input
          value={list}
          onChange={(event) => setNewList(event.target.value)}
          type="text"
        />
        <br />
        <button>ADD</button>
      </form>
    </>
  );
};

export default TodoForm;
