import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [activities, setActivities] = useState([]);

  // 1. add activity to list
  const addActivity = (activity) => {
    if (activity.text && activity.text.trim()) {
    }

    // OLD CODE

    // const addActivity = (activity) => {
    //   if (!activity.text || /^\s*$/.test(activity.text)) {
    //     return;
    //   }

    const newActivities = [activity, ...activities];

    setActivities(newActivities);
  };

  // OLD CODE

  // const removeActivity = (id) => {
  //   const removeArr = [...activities].filter((activity) => activity.id !== id);

  //   setActivities(removeArr);
  // };

  // 2. This code first finds the index of the activity to remove using the findIndex() method.
  // If the index is not -1, meaning the activity was found, it creates a copy of the activities array using the spread operator and removes the activity at the found index using the splice() method.
  // Finally, it sets the state of activities to the updated array.

  const removeActivity = (id) => {
    const index = activities.findIndex((activity) => activity.id === id);
    if (index !== -1) {
      const updatedActivities = [...activities];
      updatedActivities.splice(index, 1);
      setActivities(updatedActivities);
    }
  };

  // OLD CODE
  // const updateActivity = (activityId, newValue) => {
  //   if (!newValue.text || /^\s*$/.test(newValue.text)) {
  //     return;
  //   }

  // 3. UPDATES ACTIVITY

  const updateActivity = (activityId, newValue) => {
    if (newValue.text && newValue.text.trim()) {
    }

    // OLD CODE
    // setActivities((prev) =>
    //   prev.map((item) => (item.id === activityId ? newValue : item))
    // );

    // This code uses the reduce() method to iterate over the previous array of activities and create a new array with the updated activity.
    // If the item's ID matches the activity ID, it pushes the new value into the accumulator array, otherwise it pushes the current item.
    // The initial value of the accumulator is an empty array [].
    // Finally, it sets the state of activities to the updated array.

    setActivities((prev) => {
      return prev.reduce((acc, item) => {
        if (item.id === activityId) {
          acc.push(newValue);
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
    });
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
