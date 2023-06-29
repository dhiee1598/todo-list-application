import React from "react";

const App = () => {
  return (
    <div className="app">
      <h1>Todo List</h1>
      <form>
        <input type="text" /><br/>
        <button>ADD</button>
      </form>
      <div className="todo-list">
        <ul>
          <li>
            <div className="todo">
              <input type="checkbox" />
              <p>Sample Todo</p>
            </div>
            <button>Delete</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
