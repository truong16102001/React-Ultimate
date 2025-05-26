const TodoForm = ({addNew}) => {
    //addNew("Hello world")
    const handleClick = () => {
        console.log("handleClick")
    }
    const handleChange = (message) => {
        console.log("handleChange: " + message)
    }

    return (
        <div className="todo-form">
            <input type="text" 
                onChange={(event) => {handleChange(event.target.value)}}/>
            <button
                style={{cursor:"pointer"}}
                onClick={handleClick}
            >Add</button>
        </div>
    )
}

export default TodoForm;