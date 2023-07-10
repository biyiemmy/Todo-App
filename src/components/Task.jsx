// Import required modules and components
import { TiTrash } from "react-icons/ti";
import PropTypes from "prop-types";
import { BsFillCheckCircleFill } from "react-icons/bs";

// Define the Task component
export const Task = ({ task, onComplete, onDelete }) => {
  // Render the Task component
  return (
    <>
      <div className="task">
        {/* Button for completing the task */}
        <button className="checkContainer" onClick={() => onComplete(task.id)}>
          {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
        </button>

        <div>
          {/* Display the title of the task */}
          <p className={task.isCompleted ? "textCompleted" : ""}>
            Title: {task.title}
          </p>
          {/* Display the text value of the task */}
          <p className={task.isCompleted ? "textCompleted" : ""}>
            Description: {task.text}
          </p>
        </div>

        {/* Button for deleting the task */}
        <button className="deleteButton" onClick={() => onDelete(task.id)}>
          <TiTrash size={30} />
        </button>
      </div>
    </>
  );
};

// Add prop validation for Task component
Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    // Add prop validation for title
    title: PropTypes.string.isRequired,
    // Add prop validation for text
    text: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
