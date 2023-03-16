import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [activities, setActivities] = useState([]);

  const addActivity = (activity) => {
    if (!activity.text || /^\s*$/.test(activity.text)) {
      return;
    }

    const newActivities = [activity, ...activities];

    setActivities(newActivities);
  };

  const removeActivity = (id) => {
    const removeArr = [...activities].filter((activity) => activity.id !== id);

    setActivities(removeArr);
  };

  const updateActivity = (activityId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setActivities((prev) =>
      prev.map((item) => (item.id === activityId ? newValue : item))
    );
  };

  const completeActivity = (id) => {
    let updatedActivities = activities.map((activity) => {
      if (activity.id === id) {
        Todo.isComplete = !Todo.isComplete;
      }
      return activity;
    });
    setActivities(updatedActivities);
  };
  return (
    <div>
      <h1>Plans for Today</h1>
      <TodoForm onSubmit={addActivity} />
      <Todo
        activities={activities}
        completeActivity={completeActivity}
        removeActivity={removeActivity}
        updateActivity={updateActivity}
      />
    </div>
  );
}

export default TodoList;
