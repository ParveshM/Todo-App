const TodoList = ({ item, handleCheckbox, deleteTask, handleEditTodo }) => {
  return (
    <li className="todo-item">
      <div className="todo-content">
        <input
          type="checkbox"
          className="checkbox"
          onClick={(e) => handleCheckbox(e, item.id)}
          defaultChecked={item.status ? true : false}
        />
        {console.log(item.status)}
        <span className={`task-text ${item.status ? "completed" : ""}`}>
          {item.task}
        </span>
      </div>
      <div className="todo-actions">
        <i
          className="fa-solid fa-edit"
          onClick={() => {
            console.log("clicked");
            handleEditTodo(item.id);
          }}
        ></i>
        <i
          className="fa-solid fa-x"
          onClick={() => {
            deleteTask(item.id);
          }}
        ></i>
      </div>
    </li>
  );
};

export default TodoList;
