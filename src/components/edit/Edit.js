import { useState } from "react";
import "./Edit.css";

const EditModal = ({ editModal, openEditModal, todoLists, setTodoLists, editVal, setEditVal }) => {
    const [text, newText] = useState('')

    const handleClose = () => {
        openEditModal(prevState => !prevState)
    }

    const handleSave = () => {
        let arr = [...todoLists];
        arr[editVal] = text;
        setTimeout(() => {
            openEditModal(prevState => !prevState)
            setTodoLists(arr)
        }, 500)
    }

    const handleEdit = (e) => {
        newText(e.target.value)
    }

    return (
        <div className="edit-modal" style={{top: editModal ? '50%' : '-50%'}}>
            <div className="modal-header">
                <p>Edit your to do</p>
                <span onClick={handleClose}>&times;</span>
            </div>
            <div className="modal-body">
                <input type="text" placeholder="update your todo" onChange={handleEdit} />
            </div>
            <div className="modal-footer">
                <button onClick={handleClose}>Cancel</button>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

export default EditModal;