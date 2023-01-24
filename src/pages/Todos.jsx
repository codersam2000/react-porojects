import { useState, useEffect } from "react";
import MainNav from "../componants/MainNav";
const Todos = ()=>{
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then(response=>{
            if(!response.ok){
                throw new Error("Something went wrong!");
            }
            return response.json();
        })
        .then(data=>{
            setTodos(data);
            setIsLoading(false);
            setError('');
        })
        .catch(e=>{
            setTodos([]);
            setIsLoading(false);
            setError(e.message);
        });
    }, []);
    return(
        <div>
            <h1>Todos</h1>
            <MainNav />
            {isLoading && <div>Loding..........</div>}
            {error && <div>{error}</div>}
            <ul>
                {todos.map(todo=>(
                    <li key={todo?.id}>{todo?.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default Todos;