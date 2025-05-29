import { useState } from "react"

const TodoForm = (props) => {
    const {addNew} = props;
    const [inputValue, setInputValue] = useState("") // init = empty, similar getter and setter value

    const handleClick = () => {
        addNew(inputValue)
        setInputValue("")
    }

    const handleChange = (input) => {
        setInputValue(input) // set entered input to inputValue 
    }

    return (
        <>
        <div className="todo-form">
            <input type="text" 
                onChange={(event) => {handleChange(event.target.value)}}
                value={inputValue}/>
            <button
                style={{cursor:"pointer"}}
                onClick={handleClick}
            >Add</button>
        </div>
        <div>Your current input is {inputValue}</div>
        </>
    )
}

export default TodoForm;