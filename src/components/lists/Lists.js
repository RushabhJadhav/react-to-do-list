import Todos from './todos/Todos' ;
import "./Lists.css";

const Lists = ({ todoLists, setTodoLists , openEditModal }) => {
    
    return (
        <ul className="list-cont">
            <Todos 
                todoLists={todoLists} 
                setTodoLists={setTodoLists} 
                openEditModal={openEditModal} 
            />
        </ul>
    )
}

export default Lists;