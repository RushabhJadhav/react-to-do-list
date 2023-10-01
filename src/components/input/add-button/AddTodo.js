import "./AddTodo.css";

const AddTodo = ({ todo, todoLists }) => {
    const handleClick = (e) => {
        e.preventDefault()
        if(todo.length != 0) {
            todoLists.push(todo)
        } else {
            alert('Please enter something')
        }
        console.log(todoLists)
    }
    return (
        <>
            <button className="add-button" onClick={handleClick}>Add</button>
        </>
    )
}

export default AddTodo;