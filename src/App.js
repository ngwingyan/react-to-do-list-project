import React from "react";
import "./App.css";

import TodoList from "./components/TodoList";
import InspirationalQuote from "./components/InspirationalQuote";


function App() {
  return (
    <div className="activity-app">
      <TodoList />
      <InspirationalQuote className="test"/>
    </div>
  );
}

export default App;
