import React from "react";
import "./App.css";

import TodoList from "./components/TodoList";
import InspirationalQuote from "./components/InspirationalQuote";


function App() {
  return (
    <div className="todo-app">
      <TodoList />
      <InspirationalQuote className="test"/>
    </div>
  );
}

export default App;
