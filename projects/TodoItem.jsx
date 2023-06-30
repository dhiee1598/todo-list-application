import React from "react";

const TodoItem = ({ id, title, isCompleted, toggleButton, deleteItem }) => {
  return (
    <li key={id}>
      <div className="todo">
        <input
          checked={isCompleted}
          onChange={(event) => toggleButton(id, event.target.checked)}
          type="checkbox"
        />
        <p>{title}</p>
      </div>
      <button onClick={() => deleteItem(id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
