import Input from "../input/Input";
import Lists from "../lists/Lists";
import "./Form.css";

const Form = ({ todoLists, setTodoLists, setEditModal }) => {

    return (
        <>
            <h1 className="header">To Do List</h1>
            <form className="form">
                <Input todoLists={todoLists} setTodoLists={setTodoLists} />
            </form>
            <Lists todoLists={todoLists} setTodoLists={setTodoLists} setEditModal={setEditModal} />
        </>
    )
}

export default Form;