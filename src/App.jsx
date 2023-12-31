import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Header, Tasks, Time } from "./components";
import "./App.css";

// Define the key for local storage
const LOCAL_STORAGE_KEY = "todo:tasks";

function App() {
  // Define state for tasks
  const [tasks, setTasks] = useState([]);

  // Load saved tasks from local storage
  const loadSavedTasks = () => {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  };

  // Save tasks to local storage
  const saveTasks = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  };

  // Load saved tasks on component mount
  useEffect(() => {
    loadSavedTasks();
  }, []);

  // Add a new task
  const addTask = (taskTitle, textTitle) => {
    const newTask = {
      id: crypto.randomUUID(),
      title: taskTitle,
      text: textTitle,
      isCompleted: false,
    };
    const updatedTasks = [...tasks, newTask];
    saveTasks(updatedTasks);
  };

  // Toggle completion status of a task
  const toggleCompletedTodoById = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    saveTasks(updatedTasks);
  };

  // Delete a task
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    saveTasks(updatedTasks);
    toast.success(`The todo was deleted successfully`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  // Render the App component
  return (
    <>
      <ToastContainer />
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onComplete={toggleCompletedTodoById}
        onDelete={deleteTask}
      />
      <Time />
    </>
  );
}

export default App;
