import { useEffect } from "react";
import "./AddTodo.css";
import uniqid from 'uniqid';

const AddTodo = ({ todo, setTodo, todoLists, setTodoLists, completed }) => {
    const handleClick = (e) => {
        e.preventDefault()
        if(todo.length !== 0) {
            const updateTodoLists = [...todoLists, {id: uniqid().slice(4, 8) ,task: todo, completed: completed, starred: false}]

            setTodoLists(updateTodoLists)
        } else {
            alert('Please enter something')
        }
        setTodo('')
    }

    useEffect(() => {
        localStorage.setItem('todolist', JSON.stringify(todoLists))
    }, [todoLists])

    return (
        <>
            <button className="add-button" onClick={handleClick}>+</button>
        </>
    )
}

export default AddTodo;