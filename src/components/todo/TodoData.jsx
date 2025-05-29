const TodoData = (props) =>{
    const {name,dob,todoList} = props; // use object destructuring
    return (
        <div className="todo-data">
            <h3>Name: {name}</h3>
            <h3>Date of birth: {dob.toDateString()}</h3>
            <h3>Your Input List: </h3>
                {todoList.map((item, index) => {return (
                    <div className="todo-item" key={item.id}>
                        ID: {item.id} - Value: {item.input} 
                        <button onClick={() => onUpdate(item.id)}>Update</button>
                        <button onClick={() => onDelete(item.id)}>Delete</button>
                    </div>
                )})}
        </div>
    )
}

export default TodoData;