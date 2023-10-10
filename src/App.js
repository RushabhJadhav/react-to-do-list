import { useState } from 'react';
import './App.css'
import Form from "./components/form/Form";
import EditModal from './components/edit/Edit';
// import DeleteModal from './components/delete/Delete';

function App() {
  const [todoLists, setTodoLists] = useState([]);
  const [editModal, openEditModal] = useState(false);

  return (
    <div>
      <Form 
        todoLists={todoLists} 
        setTodoLists={setTodoLists} 
        openEditModal={openEditModal} 
      />
      <EditModal 
        editModal={editModal} 
        openEditModal={openEditModal} 
        todoLists={todoLists} 
        setTodoLists={setTodoLists} 
      />
      {/* <DeleteModal /> */}
    </div>
  );
}

export default App;
