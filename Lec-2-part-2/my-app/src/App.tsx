import axios from 'axios'
import { useEffect, useState } from 'react';
   
function App(){
  let [Data , setData] = useState<any[]>([]) // initialise the state veriable with an empty ARRAY
  useEffect(()=>{
     
axios.get("https://jsonplaceholder.typicode.com/todos/")
    .then(response=> {
       setData (response.data)
    })

    return function (){
      
    }
    
  }, [])
    return(
      <div>
        {Data.map(todo=><Todo userId={todo.userId} id={todo.id} title={todo.title} completed={todo.completed} /> )}
       </div>
    )
  }

function Todo(props:any) {
  return   (<>
        <div style={{marginTop:2, borderRadius:20, padding:20, width:"500px",border:"2px solid black" , fontSize:7 ,borderColor:"rgb(150, 191, 228)" }}>
          <h1>{props.userId} </h1>
          <div>
            <h3>{props.id} </h3>
            <p>{props.title} </p>
            <h2>{props.completed? "completed" : "Not Completed"} </h2>
          </div>

      </div>
    </>)
}



  export default App;