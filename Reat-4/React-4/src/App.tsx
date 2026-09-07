
import { useTodos } from "./hooks/useTodos";
import type { Dispatch, SetStateAction } from "react";


function App() {
  const {todos, setTodos} = useTodos();
  
 return <div>
  {todos.map(t => <Todo title={t.title} id={(t).id} setTodos={setTodos} />)}
 </div>
}

type TodoType = {
  title:string,
  id:string,
  setTodos: Dispatch<SetStateAction<TodoItem[]>>
}

type TodoItem = {
  title: string,
  id: string
}

function Todo({title, id , setTodos}:TodoType){
  console.log(id)
  return <div style={{padding:20, margin:20 , border:"2px solid yellowGreen", cursor:"pointer"}}>
    <div>
      {title }
    <br />
    {id}
    </div>
      <DeleteButton setTodos={setTodos} id={id}/>
  </div>
}

function DeleteButton({setTodos , id}:TodoType){
return <div>
          <div style={{background:"orange", cursor:"pointer", border:"2px solid red", }} onClick={()=>{
            setTodos(todos=>todos.filter(t=>t.id != id))
          }} >
                Delete
          </div>
        </div>

}
export default App