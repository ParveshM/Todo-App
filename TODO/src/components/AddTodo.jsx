const AddTodo = ({ toDo, setToDo, addItem }) => {
  return (
    <>
      <input
        className="todo-input"
        type="text"
        placeholder="Do something😃"
        value={toDo}
        onChange={(e) => {
          setToDo(e.target.value);
        }}
      />
      <button className="todo-button" onClick={addItem}>
        Add
      </button>
    </>
  );
};

export default AddTodo;
