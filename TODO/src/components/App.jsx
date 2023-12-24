import React, { useEffect, useState } from "react";
const App = () => {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");

  // adding todo task
  const addItem = () => {
    if (toDo.trim().length > 0) {
      setToDos([...toDos, { id: Date.now(), task: toDo, status: false }]);
      setToDo("");
    }
  };

  useEffect(() => {
    const getTodoes = JSON.parse(localStorage.getItem("toDos"));
    setToDos(getTodoes);
  }, []);

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  // delete a task
  const deleteTask = (id) => {
    setToDos(
      toDos.filter((obj) => {
        if (id !== obj.id) return obj;
      })
    );
  };

  const handleCheckbox = (e, id) => {
    setToDos(
      toDos.filter((obj) => {
        if (obj.id === id) obj.status = e.target.checked;
        return obj;
      })
    );
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo App</h1>
      <div className="input-section">
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
      </div>
      <ul className="todo-list">
        {toDos
          .map((item) => {
            return (
              <li className="todo-item" key={item.id}>
                <div className="todo-content">
                  <input
                    type="checkbox"
                    className="checkbox"
                    onClick={(e) => handleCheckbox(e, item.id)}
                    checked={item.status ? true : false}
                  />
                  {console.log(item.status)}
                  <span
                    className={`task-text ${item.status ? "completed" : ""}`}
                  >
                    {item.task}
                  </span>
                </div>
                <i
                  className="fa-solid fa-x"
                  onClick={() => {
                    deleteTask(item.id);
                  }}
                ></i>
              </li>
            );
          })
          .sort((a, b) => a.status - b.status)}
      </ul>
    </div>
  );
};

export default App;
