import React, { useState } from "react";

const App = () => {
  const [item, setNewItem] = useState("");
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

  const onSubmitButton = (e) => {
    e.preventDefault();

    setTodo((currentTodo) => {
      return [
        ...currentTodo,
        {
          id: crypto.randomUUID(),
          title: item,
          isCompleted: false,
        },
      ];
    });
    setNewItem("");
  };

  return (
    <>
      <div className="app">
        <h1>Todo List</h1>
        <form onSubmit={onSubmitButton}>
          <input
            value={item}
            onChange={(event) => setNewItem(event.target.value)}
            type="text"
          />
          <br />
          <button>ADD</button>
        </form>
        <ul>
          {todo.map((todos) => {
            return (
              <li key={todos.id}>
                <div className="todo">
                  <input
                    checked={todos.isCompleted}
                    onChange={(e) => toggleButton(todos.id, e.target.checked)}
                    type="checkbox"
                  />
                  <p>{todos.title}</p>
                </div>
                <button onClick={() => deleteItem(todos.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
