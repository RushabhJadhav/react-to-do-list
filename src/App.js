import { useState } from 'react';
import './App.css'
import Form from "./components/form/Form";
import EditModal from './components/edit/Edit';

// localStorage.setItem('todolist', JSON.stringify([]))
let localTodos = JSON.parse(localStorage.getItem('todolist'))

function App() {
  const [todoLists, setTodoLists] = useState(localTodos);
  const [editModal, openEditModal] = useState(false);
  const [editVal, setEditVal] = useState('');
  const [completed, setCompleted] = useState(false);

  return (
    <div>
      <Form 
        todoLists={todoLists}
        setTodoLists={setTodoLists}
        openEditModal={openEditModal}
        setEditVal={setEditVal}
        completed={completed}
        setCompleted={setCompleted}
      />
      <EditModal 
        editModal={editModal}
        openEditModal={openEditModal}
        todoLists={todoLists}
        setTodoLists={setTodoLists}
        editVal={editVal}
        setEditVal={setEditVal}
      />
    </div>
  );
}

export default App;
