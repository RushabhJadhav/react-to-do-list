import Todos from './todos/Todos' ;
import "./Lists.css";

const Lists = ({ todoLists, setTodoLists , openEditModal, editVal, setEditVal }) => {
    
    return (
        <ul className="list-cont">
            <Todos 
                todoLists={todoLists} 
                setTodoLists={setTodoLists} 
                openEditModal={openEditModal}
                editVal={editVal}
                setEditVal={setEditVal}
            />
        </ul>
    )
}

export default Lists;