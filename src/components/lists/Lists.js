import Todos from './todos/Todos' ;
import "./Lists.css";

const Lists = ({ todoLists }) => {
    return (
        <ul className="list-cont">
            <Todos todoLists={todoLists} />
        </ul>
    )
}

export default Lists;