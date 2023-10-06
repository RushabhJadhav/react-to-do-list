import './Todos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

const Todos = ({ todoLists }) => {
    
    return (
        <>
            {todoLists.map(item => {
                return <li key={item}>
                    {item}
                    <FontAwesomeIcon className='icons edit-icon' icon={faPenToSquare} />
                    <FontAwesomeIcon className='icons delete-icon' icon={faTrash} />
                </li>
            })}
        </>
    )
}

export default Todos