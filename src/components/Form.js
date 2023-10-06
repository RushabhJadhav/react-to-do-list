import Input from "./input/Input";
import Lists from "./lists/Lists";
import "./Form.css";
import { useState } from "react";


const Form = () => {
    const [todoLists, setTodoLists] = useState([]);
    // console.log(todoLists)
    return (
        <>
            <h1 className="header">To Do List</h1>
            <form className="form">
                <Input todoLists={todoLists} setTodoLists={setTodoLists} />
            </form>
            <Lists todoLists={todoLists} />
        </>
    )
}

export default Form;