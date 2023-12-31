import { useState } from "react";
import AddTodo from "./add-button/AddTodo";
import "./Input.css";

const Input = ({ todoLists, setTodoLists, completed, setCompleted }) => {
    const [todo, setTodo] = useState("")
    const handleInput = (e) => {
        setTodo(e.target.value)
    }
    return (
        <div className="input-cont">
            <input type="text" placeholder="Add your todos..." value={todo} onChange={handleInput} />
            <AddTodo 
                todo={todo} 
                setTodo={setTodo} 
                todoLists={todoLists} 
                setTodoLists={setTodoLists}
                completed={completed}
                setCompleted={setCompleted} 
            />
            {/* <div>
                <button>Clear completed</button>
                <button>Clear All</button>
            </div> */}
        </div>
    )
}

export default Input;