import "./Edit.css";

const EditModal = ({ editModal, setEditModal }) => {
    const handleClose = () => {
        setEditModal(prevState => !prevState)
    }

    return (
        <div className="edit-modal" style={{top: editModal ? '50%' : '-50%'}}>
            <div className="modal-header">
                <p>Edit your to do</p>
                <span onClick={handleClose}>&times;</span>
            </div>
            <div className="modal-body">
                <input></input>
            </div>
            <div className="modal-footer">
                <button onClick={handleClose}>No</button>
                <button>Yes</button>
            </div>
        </div>
    )
}

export default EditModal;