import { useState } from 'react';
import './App.css'
import Form from "./components/form/Form";
import EditModal from './components/edit/Edit';

function App() {
  const [todoLists, setTodoLists] = useState([]);
  const [editModal, setEditModal] = useState(false)

  return (
    <div>
      <Form todoLists={todoLists} setTodoLists={setTodoLists} setEditModal={setEditModal} />
      <EditModal editModal={editModal} setEditModal={setEditModal} />
    </div>
  );
}

export default App;
