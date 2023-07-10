// Import required modules and components
import { Task } from "./Task";
import { PropTypes } from "prop-types";

// Define the Tasks component
export const Tasks = ({ tasks, onComplete, onDelete }) => {
  // Calculate the total number of tasks, completed tasks, and uncompleted tasks
  const todoTotal = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  const unCompletedTasks = tasks.filter((task) => !task.isCompleted).length;

  // Render the Tasks component
  return (
    <>
      <section className="tasks">
        <header className="header">
          <div>
            <p>Created tasks</p>
            <span>{todoTotal}</span>
          </div>

          <div>
            <p className="textPurple">Completed tasks</p>
            <span>{completedTasks}</span>
          </div>

          <div>
            <p className="textPurple">Uncompleted tasks</p>{" "}
            <span>{unCompletedTasks}</span>
          </div>
        </header>

        <div className="list">
          {/* Render Task component for each task */}
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onComplete={onComplete}
              onDelete={onDelete}
            />
          ))}
        </div>
      </section>
    </>
  );
};

// Add prop validation for Tasks component
Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
