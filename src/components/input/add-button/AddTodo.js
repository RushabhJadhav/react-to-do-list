import "./AddTodo.css";

const AddTodo = ({ todo, todoLists, setTodoLists }) => {
    const handleClick = (e) => {
        e.preventDefault()
        if(todo.length !== 0) {
            const updateTodoLists = [...todoLists, todo]

            setTodoLists(updateTodoLists)
        } else {
            alert('Please enter something')
        }
        // console.log(todoLists)
    }
    return (
        <>
            <button className="add-button" onClick={handleClick}>+</button>
        </>
    )
}

export default AddTodo;