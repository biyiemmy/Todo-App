import { useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";

export const Header = ({ onAddTask }) => {
  // Define state variables for title and text
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the title field
    if (title.trim() === "") {
      // alert("Please enter a todo title and description");
      toast.error("Please enter a title.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
      });
      return;
    } else if (text.trim() === "") {
      toast.error("Please enter a description", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
      });
      return;
    } else {
      // Display success message and call onAddTask function
      // alert(`The "${title}" todo was created successfully`);
      toast.success(`The ${title} todo was created successfully`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
      });
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

  return (
    <>
      <header className="flex items-center justify-center relative h-48 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 md:p-6 text-white">
        <h3 className="text-4xl font-bold mb-4">Todo App</h3>

        <form
          className="absolute md:flex h-14 bottom-[-27px] w-full max-w-[736px] flex px-1 py-0 gap-8"
          onSubmit={handleSubmit}
        >
          <input
            placeholder="Title..."
            type="text"
            onChange={onChangeTitle}
            value={title}
            className="w-full px-4 h-full bg-gray-800 border-none mb-2 border rounded-md focus:outline-none focus:border-blue-300"
          />

          <input
            placeholder="Description..."
            type="text"
            onChange={onChangeText}
            value={text}
            className="w-full px-4 bg-gray-800 p-2 border-none mb-2 h-full border rounded-md resize-none focus:outline-none focus:border-blue-300"
          ></input>

          <button className="h-full px-4 bg-blue-600 text-white border-none gap-6 font-bold text-sm hover:bg-blue-600 py-2 rounded-md flex items-center">
            Create <FaPlus className="ml-1" size={20} />
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
