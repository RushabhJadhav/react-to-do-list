import Todos from './todos/Todos' ;
import "./Lists.css";

const Lists = ({ todoLists, setEditModal }) => {
    
    return (
        <ul className="list-cont">
            <Todos todoLists={todoLists} setEditModal={setEditModal} />
        </ul>
    )
}

export default Lists;