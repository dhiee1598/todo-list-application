import React from "react";
import TodoItem from "./TodoItem";
const TodoList = ({ todo, toggleButton, deleteItem }) => {
  return (
    <ul>
      {todo.map((todos) => {
        return (
          <TodoItem
            id={todos.id}
            isCompleted={todos.isCompleted}
            title={todos.title}
            key={todos.id}
            toggleButton={toggleButton}
            deleteItem={deleteItem}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
