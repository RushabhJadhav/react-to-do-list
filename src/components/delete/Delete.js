import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Delete.module.css'

const DeleteModal = ({ deleteModal, openDeleteModal, deleteItem, todoLists, setTodoLists}) => {
    const handleClose = () => {
        openDeleteModal(prevState => !prevState)
    }

    const handleDelete = () => {
        let arr = todoLists.filter(todo => todo.task !== deleteItem);
        setTimeout(() => {
            setTodoLists(arr);
        }, 500)
        openDeleteModal(prevState => !prevState)
    }

    return (
        <div className={styles.deleteModal} style={{top: deleteModal ? '50%' : '-50%'}}>
            <div className={styles.modalHeader}>
                <FontAwesomeIcon className={styles.deleteIcon} icon={faWarning} />
                <h3>Are you sure ?</h3>
                <p>Do you really want to delete this record? This process cannot be undone.</p>
                <div className={styles.buttonCont}>
                    <button onClick={handleClose} >Cancel</button>
                    <button onClick={handleDelete} >Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal;