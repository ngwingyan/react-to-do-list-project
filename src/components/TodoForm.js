import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const change = (e) => {
    setInput(e.target.value); // we set it to what we type in
  };

  const submit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000), //so that we do not get the same id
      text: input,
    });

    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={submit}>
      <input
        type="text"
        placeholder="Add an activity"
        value={input}
        name="text"
        className="activity-input"
        onChange={change}
      />
      <button className="activity-btn">Add activity</button>
    </form>
  );
}

export default TodoForm;
