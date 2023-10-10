import { useState } from "react";
import "./Edit.css";

const EditModal = ({ editModal, openEditModal, todoLists, setTodoLists }) => {
    const [editTodo, openEditTodo] = useState('')

    // console.log(todoLists)
    // console.log(setTodoLists)

    const handleClose = () => {
        openEditModal(prevState => !prevState)
    }

    const handleSave = () => {
        setTimeout(() => {
            openEditModal(prevState => !prevState)
        }, 500)
    }

    const handleEdit = (e) => {
        openEditTodo(e.target.value)
    }

    return (
        <div className="edit-modal" style={{top: editModal ? '50%' : '-50%'}}>
            <div className="modal-header">
                <p>Edit your to do</p>
                <span onClick={handleClose}>&times;</span>
            </div>
            <div className="modal-body">
                <input type="text" onChange={handleEdit} />
            </div>
            <div className="modal-footer">
                <button onClick={handleClose}>Cancel</button>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

export default EditModal;