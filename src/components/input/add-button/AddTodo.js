import "./AddTodo.css";

const AddTodo = () => {
    const handleClick = (e) => {
        e.preventDefault()
        console.log('add button clicked')
    }
    return (
        <>
            <button className="add-button" onClick={handleClick}>Add</button>
        </>
    )
}

export default AddTodo;