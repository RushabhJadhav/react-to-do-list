import "./AddTodo.css";

const AddTodo = ({ todo }) => {
    const handleClick = (e) => {
        e.preventDefault()
        console.log(todo)
    }
    return (
        <>
            <button className="add-button" type="submit" onClick={handleClick}>Add</button>
        </>
    )
}

export default AddTodo;