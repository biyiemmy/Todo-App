import PropTypes from "prop-types";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { TiTrash } from "react-icons/ti";

export const Task = ({ task, onComplete, onDelete }) => {
  return (
    <>
      <div className="w-full bg-gray-900 border border-gray-700 p-4 rounded-lg flex flex-row md:flex-row items-center md:gap-12">
        {/* Button for completing the task */}
        <button
          className="w-4 h-4 bg-transparent border-none  md:mb-0 mr-4 md:mr-2"
          onClick={() => onComplete(task.id)}
        >
          {task.isCompleted ? (
            <BsFillCheckCircleFill className="w-full h-full text-[#4ea8de]" />
          ) : (
            <div className="w-full h-full border-2 rounded-full border-[#5e60ce]" />
          )}
        </button>

        <div>
          {/* Display the title of the task */}
          <p className={task.isCompleted ? "text-gray-500 line-through" : ""}>
            Title: {task.title}
          </p>
          {/* Display the text value of the task */}
          <p className={task.isCompleted ? "text-gray-500 line-through" : ""}>
            Description: {task.text}
          </p>
        </div>

        {/* Button for deleting the task */}
        <button
          className="text-gray-500 ml-auto md:mt-0 bg-none"
          onClick={() => onDelete(task.id)}
        >
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
