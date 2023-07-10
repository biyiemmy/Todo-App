// Import required modules and components
import { useState } from "react";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";

// Define the Header component
export const Header = ({ onAddTask }) => {
  // Define state variables for title and text
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the title field
    if (title.trim() === "" || text.trim() === "") {
      alert("Please enter a todo title and description");
    } else {
      // Display success message and call onAddTask function
      alert(`The "${title}" todo was created successfully`);
      // Pass both title and text to onAddTask function
      onAddTask(title, text);
      // Clear the title field
      setTitle("");
      // Clear the text field
      setText("");
    }
  };

  // Handle changes in the title field
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  // Handle changes in the text field
  const onChangeText = (e) => {
    setText(e.target.value);
  };

  // Render the Header component
  return (
    <>
      <header className="top">
        <h3>todo_App</h3>

        <form className="newTaskForm" onSubmit={handleSubmit}>
          <input
            placeholder="Todo title"
            type="text"
            onChange={onChangeTitle}
            value={title}
          />
          <textarea
            placeholder="Todo description"
            onChange={onChangeText}
            value={text}
          ></textarea>
          <button>
            Create <FaPlus size={20} />
          </button>
        </form>
      </header>
    </>
  );
};

// Add prop validation for onAddTask
Header.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};
