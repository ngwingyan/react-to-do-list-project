import React from "react";
import "./App.css";
import DateDisplay from "./components/Date";
import TodoList from "./components/TodoList";
import InspirationalQuote from "./components/InspirationalQuote";

function App() {
  return (
    <div className="todo-app">
      <InspirationalQuote className="quote" />
      <h1>Plans for Today <DateDisplay /> </h1>
      <TodoList />
    </div>
  );
}

export default App;
