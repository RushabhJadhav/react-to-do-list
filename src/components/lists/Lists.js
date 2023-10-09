import Todos from './todos/Todos' ;
import "./Lists.css";

const Lists = ({ todoLists, setTodoLists , setEditModal }) => {
    
    return (
        <ul className="list-cont">
            <Todos todoLists={todoLists} setTodoLists={setTodoLists} setEditModal={setEditModal} />
        </ul>
    )
}

export default Lists;