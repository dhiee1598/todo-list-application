import React, { useState } from "react";
import TodoForm from "../projects/TodoForm";
import TodoList from "../projects/TodoList";

const App = () => {
  const [todo, setTodo] = useState([]);
  const toggleButton = (id, isCompleted) => {
    setTodo((currentTodo) => {
      return currentTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted };
        }
        return todo;
      });
    });
  };

  const deleteItem = (id) => {
    setTodo((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id);
    });
  };

  const addTodo = (list) => {
    setTodo((currentTodo) => {
      return [
        ...currentTodo,
        {
          id: crypto.randomUUID(),
          title: list,
          isCompleted: false,
        },
      ];
    });
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todo={todo}
        toggleButton={toggleButton}
        deleteItem={deleteItem}
      />
    </div>
  );
};

export default App;
