import React from "react";

import "./App.css";

// we can import Todo as ToDoList below because the defual export form the Todo component can be renamed in the import and it will still work since it is a default export
import TodoList from "./components/Todo";

// rendering todolist below in a clean and simple way by importing the todo component.
function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
