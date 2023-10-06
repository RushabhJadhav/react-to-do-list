import { useState } from 'react';
import './App.css'
import Form from "./components/form/Form";

function App() {
  const [todoLists, setTodoLists] = useState([]);

  return (
    <div>
      <Form todoLists={todoLists} setTodoLists={setTodoLists} />
    </div>
  );
}

export default App;
