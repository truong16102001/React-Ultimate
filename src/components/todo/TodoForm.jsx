const TodoForm = ({addNew}) => {
    addNew("Hello world")
    return (
        <div className="todo-form">
            <input type="text" />
            <button>Add</button>
        </div>
    )
}

export default TodoForm;