import { useState } from "react";
import styles from './Edit.module.css'

const EditModal = ({ editModal, openEditModal, todoLists, setTodoLists, editVal, setEditVal }) => {
    const [text, newText] = useState('')

    const handleClose = () => {
        openEditModal(prevState => !prevState)
    }

    const handleSave = () => {
        if(text.length !== 0) {
            let arr = [...todoLists];
            arr.filter(item => {
                if(item.id == editVal) {
                    item.task = text
                }
            })

            setTimeout(() => {
                openEditModal(prevState => !prevState)
                setTodoLists(arr)
            }, 500)
        } else {
            alert("you can't leave the field empty")
        }
    }
    
    const handleEdit = (e) => {
        newText(e.target.value)
    }

    return (
        <div className={styles.editModal} style={{top: editModal ? '50%' : '-50%'}}>
            <div className={styles.modalHeader}>
                <p>Edit your to do</p>
                <span onClick={handleClose}>&times;</span>
            </div>
            <div className={styles.modalBody}>
                <input type="text" placeholder="update your todo" onChange={handleEdit} />
            </div>
            <div className={styles.modalFooter}>
                <button onClick={handleClose}>Cancel</button>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

export default EditModal;