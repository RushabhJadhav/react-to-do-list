import Input from "./input/Input";
import "./Form.css"

const Form = () => {
    return (
        <>
            <h1 className="header">To Do List</h1>
            <form className="form">
                <Input />
            </form>
        </>
    )
}

export default Form;