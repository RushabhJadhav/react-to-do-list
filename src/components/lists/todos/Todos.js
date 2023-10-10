import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faStar } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import './Todos.css';

const TodoItem = ({ item, openEditModal, todoLists, setTodoLists }) => {
    const [checked, setChecked] = useState(false);

    
    const handleCheckbox = e => {
        setChecked(!checked)
    }
    
    const handleEdit = () => {
        openEditModal(prevState => !prevState)
    }

    const handleDelete = () => {
        let arr = todoLists.filter(todo => todo !== item);
        setTodoLists(arr);
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

const Todos = ({ todoLists, setTodoLists, openEditModal }) => {
    
    return (
        <>
            {todoLists.map(item => {
                let itemId = todoLists.indexOf(item)
                return <TodoItem key={itemId} item={item} openEditModal={openEditModal} todoLists={todoLists} setTodoLists={setTodoLists} />
            })}
        </>
    )
}

export default Todos