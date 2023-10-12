import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faStar } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import './Todos.css';

const TodoItem = ({ item, itemId, openEditModal, setEditVal, openDeleteModal, setDeleteItem, todoLists, setTodoLists}) => {
    const [checked, setChecked] = useState(false);

    
    const handleCheckbox = () => {
        setChecked(!checked)
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
            <input type='checkbox' onClick={handleCheckbox} />
            <p style={{textDecoration : checked ? 'line-through' : null}}>{item}</p>
            <FontAwesomeIcon className='icons star-icon' icon={faStar} />
            <FontAwesomeIcon className='icons edit-icon' icon={faPenToSquare} onClick={handleEdit} />
            <FontAwesomeIcon className='icons delete-icon' icon={faTrash} onClick={handleDelete} />
        </li>
    )
}

export default TodoItem;