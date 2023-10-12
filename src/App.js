import { useState } from 'react';
import './App.css'
import Form from "./components/form/Form";
import EditModal from './components/edit/Edit';
// import DeleteModal from './components/delete/Delete';

// localStorage.setItem('todolist', JSON.stringify([]))
let localTodos = JSON.parse(localStorage.getItem('todolist'))

function App() {
  const [todoLists, setTodoLists] = useState(localTodos);
  const [editModal, openEditModal] = useState(false);
  const [editVal, setEditVal] = useState('');

  return (
    <div>
      <Form 
        todoLists={todoLists}
        setTodoLists={setTodoLists}
        openEditModal={openEditModal}
        setEditVal={setEditVal}
      />
      <EditModal 
        editModal={editModal}
        openEditModal={openEditModal}
        todoLists={todoLists}
        setTodoLists={setTodoLists}
        editVal={editVal}
        setEditVal={setEditVal}
      />
      {/* <DeleteModal
        deleteModal={deleteModal}
        openDeleteModal={openDeleteModal}
      /> */}
    </div>
  );
}

export default App;
