import { useState } from 'react';
import './Todos.css';
import TodoItem from './TodoItem';
import DeleteModal from '../../delete/Delete';

const Todos = ({ todoLists, setTodoLists, openEditModal, setEditVal, completed, setCompleted }) => {
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
                            todoLists={todoLists}
                            setTodoLists={setTodoLists}
                            completed={item.completed}
                            setCompleted={setCompleted}
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