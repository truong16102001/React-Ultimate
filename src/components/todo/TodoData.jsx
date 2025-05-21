const TodoData = (props) =>{
    const {name, dob, profile} = props; // use object destructuring
    return (
        <div className="todo-data">
            <h3>Name: {name}</h3>
            <p>Date of birth: {dob.toDateString()}</p>
            <h4>Profile: </h4>
            <ul>
                {profile.map((item, index) => (
                    <li key={"Profile_"+index}>
                        Education: {item.education} | Major: {item.major} | GPA: {item.gpa}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoData;