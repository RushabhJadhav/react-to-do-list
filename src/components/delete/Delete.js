import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Delete.css'

const DeleteModal = () => {
    return (
        <div>
            <div className="modal-header">
                <FontAwesomeIcon icon={faWarning} />
            </div>
        </div>
    )
}

export default DeleteModal;