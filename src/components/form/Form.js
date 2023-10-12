import Input from "../input/Input";
import Lists from "../lists/Lists";
import CompletedTodos from "../completed/CompletedTodos";
import "./Form.css";

const Form = ({ todoLists, setTodoLists, openEditModal, setEditVal }) => {

    return (
        <>
            <h1 className="header">To Do List</h1>
            <form className="form">
                <Input todoLists={todoLists} setTodoLists={setTodoLists} />
            </form>
            <Lists todoLists={todoLists} setTodoLists={setTodoLists} openEditModal={openEditModal} setEditVal={setEditVal} />
            <CompletedTodos />
        </>
    )
}

export default Form;