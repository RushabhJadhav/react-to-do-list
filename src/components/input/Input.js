import { useState } from "react";
import AddTodo from "./add-button/AddTodo";
import "./Input.css";

const Input = ({ todoLists }) => {
    const [todo, setTodo] = useState("")
    const handleInput = (e) => {
        setTodo(e.target.value)
    }
    return (
        <div className="input-cont">
            <input type="text" placeholder="Add your todo" value={todo} onChange={handleInput} />
            <AddTodo todo={todo} todoLists={todoLists} />
        </div>
    )
}

export default Input;