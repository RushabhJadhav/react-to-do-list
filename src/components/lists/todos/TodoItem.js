import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faStar } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import './Todos.css';

const TodoItem = ({ item, itemId, openEditModal, setEditVal, openDeleteModal, setDeleteItem, todoLists, setTodoLists, completed, setCompleted}) => {
    
    const handleCheckbox = () => {
        // setChecked(!checked)
        setCompleted(prevState => !prevState)
    }
    
    const handleEdit = () => {  
        setEditVal(itemId)
        openEditModal(prevState => !prevState)
    }

    const handleDelete = () => {
        openDeleteModal(prevState => !prevState)
        setDeleteItem(item)
    }

    return (
        <li>
            <input type='checkbox' checked={completed} onChange={handleCheckbox} />
            <p style={{textDecoration : completed ? 'line-through' : null}}>{item}</p>
            <FontAwesomeIcon className='icons star-icon' icon={faStar} />
            <FontAwesomeIcon className='icons edit-icon' icon={faPenToSquare} onClick={handleEdit} />
            <FontAwesomeIcon className='icons delete-icon' icon={faTrash} onClick={handleDelete} />
        </li>
    )
}

export default TodoItem;