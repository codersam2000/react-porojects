import { useState, useEffect} from 'react';
import './App.css';

function App() {
  const [todoTitle, setTitle] = useState('');
  const [todos, setTodo] = useState([]);
  const [editableMode, setEditableMod] = useState(false);
  const [editablTodo, setEditablTodo] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [errorMessage, setErrormessage] = useState('');

  const getAllTodos = async ()=>{
    try{
    const response = await fetch(`http://localhost:8080/todos`);
    const data = await response.json();
    setTodo(data);
    setIsloading(false);
    }
    catch(e){
      setIsloading(false);
      setErrormessage(e.message);
    }
  }
  useEffect(()=>{
    getAllTodos();
  },[]);
  const createHandler = (e)=>{
    e.preventDefault();
    if(!todoTitle){
      return alert("Input field is empty!");
    }
    const newTodo = {
      id : Date.now()+"",
      title : todoTitle
    }
    fetch(`http://localhost:8080/todos`,{
      method:'POST',
      body:JSON.stringify(newTodo),
      headers:{
        'Content-type':'application/json'
      }
    })
    .then(()=>{
      setTitle('');
      getAllTodos();
    });
  }

  const removeHandler = (id)=>{
    fetch(`http://localhost:8080/todos/${id}`,{
      method:"DELETE"
    })
    .then(()=>getAllTodos());
  }
  const editHandler = (id)=>{
    const tobeEdited = todos.find((note)=>note.id === id);
    setEditablTodo(tobeEdited);
    setEditableMod(true);
    setTitle(tobeEdited.title);
    
  }
  const updateHandler = (e)=>{
    e.preventDefault();
    if(!todoTitle){
      return alert("Input field is empty!");
    }
    fetch(`http://localhost:8080/todos/${editablTodo.id}`,{
      method : "PATCH",
      body : JSON.stringify({
        title : todoTitle
      }),
      headers : {
        "Content-type":"application/json"
      }
    })
    .then(()=>{
      getAllTodos()
      setEditablTodo(null);
      setEditableMod(false);
      setTitle('');
    });
  }
  return (
    <div>
      <div>
        <form onSubmit={editableMode ? updateHandler : createHandler}>
          <input type="text" value={todoTitle} onChange={(e)=>setTitle(e.target.value)}/>
          <button type="submit">{editableMode ? "Update" : "Add"}</button>
        </form>
      </div>
      <ul>
      {todos.map(item=>(
        <li key={item.id}>
          <span>{item.title}</span>
          <button onClick={()=>{editHandler(item.id)}}>Edit</button>
          <button onClick={()=>{removeHandler(item.id)}}>Delete</button>
        </li>
      ))}
      </ul>
      {isLoading && (
        <div>Loading...</div>
      )}
      {errorMessage && (
        <div>{errorMessage}</div>
      )}
    </div>
  );
}

export default App;
