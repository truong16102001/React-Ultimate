const TodoData = (props) => {
  const { todoList, handleDelete, handleUpdate } = props; // use object destructuring
  return (
    <>
      {todoList.length !== 0 && (
        <div className="todo-data">
          <h3>Your Input List: </h3>
          {todoList.map((item, index) => {
            return (
              <div className="todo-item" key={item.id}>
                ID: {item.id} - Value: {item.input}
                <button onClick={() => handleUpdate(item.id)}>Update</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default TodoData;
