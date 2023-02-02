import './App.css';
import { useGetAllNotesQuery, useRemoveNoteMutation } from './store/api/notes';
function App() {
  const {data, isLoading, isError, error} = useGetAllNotesQuery();
  const [removeNoteMutation] = useRemoveNoteMutation();
  return(
    <div className='app'>
      <h2>Note takink app</h2>
      {isLoading && <p>Loading.....</p>}
      {isError && <p>{error?.message}</p>}
      <ul>
        {data?.map(item=>(
          <li key={item.id}>
            <p>{item.title}</p>
            <button onClick={()=>removeNoteMutation(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
