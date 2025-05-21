import TodoData from './components/todo/TodoData.jsx'
import TodoForm from './components/todo/TodoForm.jsx'
import './components/todo/todo.css'
import reactLogo from './assets/react.svg'
function App() {
const name="Jason"
const dob = new Date("2001/10/16")
const profile = [{education:"FPT", major:"IT", gpa:3.5},{education:"UET", major:"IT", gpa:3.6}]
  return (
    <>
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoForm/>
      <TodoData
        name={name}
        dob={dob}
        profile={profile}
      />
      <div className="todo-image">
        <img src={reactLogo} className='logo'/>
      </div>
    </div>
    </>
  )
}

export default App
