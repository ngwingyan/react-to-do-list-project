import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";

function Todo({
  activities,
  completeActivity,
  removeActivity,
  updateActivity,
}) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateActivity(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return activities.map((activity, index) => (
    <div
      className={activity.isComplete ? "activity-row complete" : "activity-row"} // if true, then 'activity-row complete' else just 'activity-row'
      key={index}
    >
      <div key={activity.id} onClick={() => completeActivity(activity.id)}>
        {activity.text}
      </div>
      <div className="icons">
        {/* <RiCloseCircleLine */}
        <AiFillCloseCircle
          onClick={() => removeActivity(activity.id)}
          className="delete-icon"
        />
        <AiOutlineEdit
          onClick={() => setEdit({ id: activity.id, value: activity.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
