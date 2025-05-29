import TodoData from "./components/todo/TodoData.jsx";
import TodoForm from "./components/todo/TodoForm.jsx";
import "./components/todo/todo.css";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
function App() {
  const name = "Jason";
  const dob = new Date("2001/10/16");
  const [todoList, setTodoList] = useState([]);

  const addNew = (inputValue) => {
    const newInput = {
      id: randomIntFromInterval(1, 1000000),
      input: inputValue,
    };
    setTodoList([...todoList, newInput]); // use spread to add newInput to array
  };

  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoForm addNew={addNew} />
        <TodoData name={name} dob={dob} todoList={todoList} />
        {todoList.length === 0 && (
          <div className="todo-image">
            <img src={reactLogo} className="logo" />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
