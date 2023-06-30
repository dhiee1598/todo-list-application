import React, { useState, useEffect } from "react";
import TodoForm from "../projects/TodoForm";
import TodoList from "../projects/TodoList";

const App = () => {
  const [todo, setTodo] = useState(() => {
    const value = localStorage.getItem("ITEMS");
    if (value == null) {
      return [];
    } else {
      return JSON.parse(value);
    }
  });
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

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todo));
  }, [todo]);

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
