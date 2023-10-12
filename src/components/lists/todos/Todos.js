import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faStar } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import './Todos.css';
import DeleteModal from '../../delete/Delete'


const TodoItem = ({ item, itemId, openEditModal, setEditVal, openDeleteModal, setDeleteItem }) => {
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

const Todos = ({ todoLists, setTodoLists, openEditModal, setEditVal }) => {
    const [deleteModal, openDeleteModal] = useState(false);
    const [deleteItem, setDeleteItem] = useState('')

    return (
        <>
            {todoLists && todoLists.map(item => {
                // let itemId = todoLists.indexOf(item)
                return <TodoItem key={item.id}
                            item={item.task} 
                            itemId={item.id}
                            openEditModal={openEditModal}
                            setEditVal={setEditVal}
                            openDeleteModal={openDeleteModal}
                            setDeleteItem={setDeleteItem}
                        />
            })}
            <DeleteModal 
                deleteModal={deleteModal}
                openDeleteModal={openDeleteModal}
                deleteItem={deleteItem}
                setDeleteItem={setDeleteItem}
                todoLists={todoLists}
                setTodoLists={setTodoLists}
            />
        </>
    )
}

export default Todos