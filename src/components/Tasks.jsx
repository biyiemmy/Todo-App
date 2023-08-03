import { Task } from "./Task";
import { PropTypes } from "prop-types";

// Define the Tasks component
export const Tasks = ({ tasks, onComplete, onDelete }) => {
  // Calculate the total number of tasks, completed tasks, and uncompleted tasks
  const todoTotal = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  const unCompletedTasks = tasks.filter((task) => !task.isCompleted).length;

  return (
    <>
      <section className="tasks w-full max-w-[736px] mx-auto px-4 min-h-screen mt-16 pt-2">
        <header className="header flex flex-col md:flex-row items-center justify-between mb-4 px-6 md:px-12">
          <div className="flex flex-row md:flex-row items-center gap-2">
            <p className="text-blue-500 font-bold">Created tasks</p>
            <span className="bg-gray-800 px-3 py-1 rounded-full text-xs font-bold text-gray-600 md:ml-2">
              {todoTotal}
            </span>
          </div>

          <div className="flex flex-row md:flex-row items-center gap-2 mt-4 md:mt-0">
            <p className="font-bold text-purple-600">Completed tasks</p>
            <span className="bg-gray-800 px-3 py-1 rounded-full text-xs font-bold text-gray-600 md:ml-2">
              {completedTasks}
            </span>
          </div>

          <div className="flex flex-row md:flex-row items-center gap-2 mt-4 md:mt-0">
            <p className="font-bold text-purple-600">Uncompleted tasks</p>
            <span className="bg-gray-800 px-3 py-1 rounded-full text-xs font-bold text-gray-600 md:ml-2">
              {unCompletedTasks}
            </span>
          </div>
        </header>

        <div className="grid gap-3 mx-auto px-6 md:px-12 max-w-screen-lg">
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
