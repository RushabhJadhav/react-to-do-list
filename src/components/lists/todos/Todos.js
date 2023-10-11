import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faStar } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import './Todos.css';

const TodoItem = ({ item, itemId, openEditModal, todoLists, setTodoLists, setEditVal }) => {
    const [checked, setChecked] = useState(false);

    
    const handleCheckbox = () => {
        setChecked(!checked)
    }
    
    const handleEdit = () => {
        setEditVal(itemId)
        openEditModal(prevState => !prevState)
    }

    const handleDelete = () => {
        let arr = todoLists.filter(todo => todo.task !== item);
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

const Todos = ({ todoLists, setTodoLists, openEditModal, setEditVal }) => {
    
    console.log(todoLists)

    return (
        <>
            {todoLists.map(item => {
                // let itemId = todoLists.indexOf(item)
                return <TodoItem key={item.id}
                            item={item.task} 
                            itemId={item.id}
                            openEditModal={openEditModal} 
                            todoLists={todoLists} 
                            setTodoLists={setTodoLists}
                            setEditVal={setEditVal}
                        />
            })}
        </>
    )
}

export default Todos