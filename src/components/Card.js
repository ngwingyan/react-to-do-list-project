import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes.js'
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";

// code from React DND sample //

const style = {
    width: "80%", 
    height: "70%",
    margin: '8px',
    background: 'white',
    boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
    borderRadius: '4px',
    display: 'flex-center',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px',
  };
  

export const Card = ({ id, text, index, moveCard, activity, completeActivity, removeActivity, setEdit }) => {
    const ref = useRef(null);

    const handleEdit = () => {
        setEdit({ id, text });
    };

    const handleRemove = () => {
        removeActivity(id);
      };
      


    const [{ handlerId }, drop] = useDrop({
        accept: ItemTypes.CARD,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            // Get vertical middle
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            // Determine mouse position
            const clientOffset = monitor.getClientOffset()
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            // Time to actually perform the action
            moveCard(dragIndex, hoverIndex)
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex
        },
    })
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.CARD,
        item: () => {
            return { id, index }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })
    const opacity = isDragging ? 0.5 : 1
    drag(drop(ref))

    // end of code from React DND sample //

    return (
        <div ref={ref} style={{ ...style, opacity }} data-handler-id={handlerId}>
            
            <div className="activity-row" key={index}>
            
                <div key={activity.id} onClick={() => completeActivity(activity.id)}>
                    {activity.text}
                </div>

                <div className="icons">
                    <AiFillCloseCircle
                        onClick={() => handleRemove(activity.id)}
                        className="delete-icon"
                    />
                    <AiOutlineEdit
                        onClick={() => handleEdit({ id: activity.id, value: activity.text })}
                        className="edit-icon"
                    />
                </div>
                
            </div>
        </div>
    )
}

export default Card;