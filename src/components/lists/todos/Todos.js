import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faStar } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import './Todos.css';

const TodoItem = ({ item, setEditModal }) => {
    const [checked, setChecked] = useState(false);

    
    const handleCheckbox = e => {
        setChecked(!checked)
    }
    
    const handleEdit = () => {
        setEditModal(prevState => !prevState)
    }

    return (
        <li>
            <input type='checkbox' onClick={handleCheckbox} />
            <p style={{textDecoration : checked ? 'line-through' : null}}>{item}</p>
            <FontAwesomeIcon className='icons star-icon' icon={faStar} />
            <FontAwesomeIcon className='icons edit-icon' icon={faPenToSquare} onClick={handleEdit} />
            <FontAwesomeIcon className='icons delete-icon' icon={faTrash} />
        </li>
    )
}

const Todos = ({ todoLists, setEditModal }) => {
    
    return (
        <>
            {todoLists.map(item => {
                return <TodoItem item={item} setEditModal={setEditModal} />
            })}
        </>
    )
}

export default Todos