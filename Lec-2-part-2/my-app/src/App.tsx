import axios from 'axios'
import { useEffect, useState } from 'react';
   
function App(){
  let [Data , setData] = useState(0)
  useEffect(()=>{
     
axios.get("https://jsonplaceholder.typicode.com/todos/")
    .then(response=> {
       setData (c=> response.data)
    })
    
  }, [setData])
    return(
      <div>
        {JSON.stringify(Data)}
       </div>
    )
  }

function Todo(props:any) {
  return   (<>
        <div style={{marginTop:2, borderRadius:20, padding:20, width:"500px",border:"2px solid black" , borderColor:"rgb(150, 191, 228)" }}>


      </div>
    </>)
}



  export default App;