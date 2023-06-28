import React, { useState } from "react";

const App = () => {
  const [add, setAdd] = useState("");

  return (
    <div className="todos">
      <h1>Todo List</h1>
      <div className="add-todo">
        <form>
          <input
            value={add}
            type="text"
            onChange={(e) => setAdd(e.target.value)}
          />
          <button className="btn" type="submit">
            Add
          </button>
        </form>
      </div>
      <div className="todo-list">
        <ul>
          <li>
            <div className="check">
              <input type="checkbox" />
              <p>Watch Tv</p>
            </div>
            <button>Delete</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
