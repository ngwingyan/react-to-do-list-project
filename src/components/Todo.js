import React, { useState, useCallback } from "react";
import TodoForm from "./TodoForm";
import Card from "./Card";
import update from "immutability-helper";

function Todo({
    activities,
    completeActivity,
    removeActivity,
    updateActivity,
    setActivities,
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

    // function from React-DND
    const moveCard = useCallback((dragIndex, hoverIndex) => {
        setActivities((prevCards) =>
            update(prevCards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevCards[dragIndex]],
                ],
            }),
        )
    }, [setActivities])

    // function from React-DND
    const renderCard = useCallback((card, index) => {
        return (

            <Card
                activity={card}
                key={card.id}
                index={index}
                id={card.id}
                text={card.text}
                moveCard={moveCard}
                completeActivity
                setEdit={setEdit} // need to add dependency to be called in other functions
                removeActivity={removeActivity} // need to add dependency to be called in other functions
            />

        )
    }, [moveCard, removeActivity]) // dependencies from Todolist/Card.js

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }
    return activities.map((activity, index) => renderCard(activity, index));
}

export default Todo;
