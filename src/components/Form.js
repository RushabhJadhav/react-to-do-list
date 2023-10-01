import Input from "./input/Input";
import Lists from "./lists/Lists";
import "./Form.css";

const todoLists = [];

const Form = () => {
    return (
        <>
            <h1 className="header">To Do List</h1>
            <form className="form">
                <Input todoLists={todoLists} />
            </form>
            <Lists todoLists={todoLists} />
        </>
    )
}

export default Form;