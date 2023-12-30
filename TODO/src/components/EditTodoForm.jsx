import { useState } from "react";

const EditTodoForm = ({ task, editTodo }) => {
  const [editInput, setEditInput] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(task.id, editInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-section">
        <input
          className="todo-input"
          type="text"
          placeholder="Update Task"
          value={editInput}
          onChange={(e) => setEditInput(e.target.value)}
          onBlur={handleSubmit}
        />
        <button className="todo-button" type="submit">
          Update
        </button>
      </div>
    </form>
  );
};

export default EditTodoForm;
