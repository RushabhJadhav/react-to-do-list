import AddTodo from "./add-button/AddTodo";
import "./Input.css";

const Input = () => {
    const handleInput = (e) => {
        console.log(e.target.value)
    }
    return (
        <div className="input-cont">
            <input type="text" placeholder="Add your todo" onChange={handleInput} />
            <AddTodo />
        </div>
    )
}

export default Input;