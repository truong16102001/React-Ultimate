import { useState } from "react";
import TodoForm from "./TodoForm.jsx";
import TodoData from "./TodoData.jsx";
import reactLogo from "../../assets/react.svg";

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const handleAdd = (inputValue) => {
    const newInput = {
      id: randomIntFromInterval(1, 1000000),
      input: inputValue,
    };
    setTodoList([...todoList, newInput]); // use spread to add newInput to array
  };

  const handleDelete = (removeItemId) => {
    const isConfirmed = window.confirm(
      `Do you want to remove item with id = ` + removeItemId
    );
    if (isConfirmed) {
      setTodoList(todoList.filter((item) => item.id !== removeItemId));
    }
  };

  const handleUpdate = (itemId) => {
    const itemToEdit = todoList.find((item) => item.id === itemId);
    if (itemToEdit) {
      setCurrentItem(itemToEdit);
      setIsUpdateModalOpen(true);
    }
  };

  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo App</div>
        <TodoForm handleAdd={handleAdd} />
        <TodoData
          todoList={todoList}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
        {todoList.length === 0 && (
          <div className="todo-image">
            <img src={reactLogo} className="logo" />
          </div>
        )}
      </div>
      {isUpdateModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <input
              type="text"
              value={currentItem?.input || ""}
              onChange={
                (e) => setCurrentItem({ ...currentItem, input: e.target.value }) //hold other fields of currentItem and only update input field
              }
            />
            <button
              onClick={() => {
                setTodoList(
                  todoList.map((item) =>
                    item.id === currentItem.id
                      ? { ...item, input: currentItem.input }
                      : item
                  )
                );
                setIsUpdateModalOpen(false);
              }}
            >
              Save
            </button>
            <button onClick={() => setIsUpdateModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoApp;
