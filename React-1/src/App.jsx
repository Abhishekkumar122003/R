import { useState } from "react"

function App(){
  return <div>
    <b>
    hi there 
    </b>
    <Counter></Counter>
  </div>
}


function Counter(){

  const [count , setCount] = useState(0);

  // function IncreaseCount(){
  //   setCount(count +1);
  // }
  // function resetCount(){
  //   setCount(0);
  // }

  // function DecreaseCount(){
  //   if(count >0){
  //     setCount(count - 1)
  //   }
  // }
  

  //------------------------make a clock -----------------------//

  setInterval(function (){
    setCount(count +1)
  }, 1000)


  return <div>
    <h1>{count}</h1>
    {/* <button onClick={IncreaseCount} >Increase count</button>
    <button onClick={DecreaseCount}>Decrease count</button>
    <button onClick={resetCount}>Reset count</button> */}
  </div>
}

export default App