import axios from 'axios'
import { useState } from 'react';


const [Data , setData] = useState(0)

axios.get("https://jsonplaceholder.typicode.com/todos/")
    .then(response=> {
       setData = response.data
    })

   
function App(){
    return(
      <div>

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