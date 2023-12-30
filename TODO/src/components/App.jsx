import React, { useEffect, useState } from "react";
import TodoList from "./todoList";
import AddTodo from "./AddTodo";
import EditTodoForm from "./EditTodoForm";
const App = () => {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");

  // adding todo task
  const addItem = () => {
    if (toDo.trim().length > 0) {
      setToDos([
        ...toDos,
        { id: Date.now(), task: toDo, status: false, isEditing: false },
      ]);
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

  const handleEditTodo = (id) => {
    setToDos(
      toDos.filter((todo) => {
        if (todo.id === id) todo.isEditing = !todo.isEditing;
        return todo;
      })
    );
  };

  const editTask = (id, task) => {
    if (task.trim().length > 0) {
      setToDos(
        toDos.map((item) => {
          if (item.id === id) {
            item.task = task;
            item.isEditing = !item.isEditing;
          }
          return item;
        })
      );
    }
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo App</h1>
      <div className="input-section">
        <AddTodo toDo={toDo} setToDo={setToDo} addItem={addItem} />
      </div>
      <ul className="todo-list">
        {toDos
          .map((item) => {
            /* checking if the item is on edit or not */
            return item.isEditing ? (
              <EditTodoForm key={item.id} task={item} editTodo={editTask} />
            ) : (
              <TodoList
                key={item.id}
                item={item}
                handleCheckbox={handleCheckbox}
                deleteTask={deleteTask}
                handleEditTodo={handleEditTodo}
              />
            );
          })
          .sort((a, b) => a.status - b.status)}
      </ul>
    </div>
  );
};

export default App;
