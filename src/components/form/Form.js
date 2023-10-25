import Input from "../input/Input";
import Lists from "../lists/Lists";
import CompletedTodos from "../completed/CompletedTodos";
import "./Form.css";

const Form = ({ todoLists, setTodoLists, openEditModal, setEditVal, completed, setCompleted }) => {

    return (
        <>
            <h1 className="header">To Do List</h1>
            <form className="form">
                <Input 
                    todoLists={todoLists} 
                    setTodoLists={setTodoLists} 
                    completed={completed}
                    setCompleted={setCompleted}
                />
            </form>
            <Lists 
                todoLists={todoLists} 
                setTodoLists={setTodoLists} 
                openEditModal={openEditModal} 
                setEditVal={setEditVal}
                completed={completed}
                setCompleted={setCompleted} 
            />
            <CompletedTodos />
        </>
    )
}

export default Form;