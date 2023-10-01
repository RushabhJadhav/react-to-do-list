import './Todos.css'

const Todos = ({ todoLists }) => {
    
    return (
        <>
            {todoLists.map(item => {
                return <li key={item}>{item}</li>
            })}
        </>
    )
}

export default Todos