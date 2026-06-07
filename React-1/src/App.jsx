import { useState, useEffect } from "react"

function App(){

  // ----------Conditional Rendering ----------------
  const [CountVisible , setCountVisible] = useState(true);
  useEffect(()=>{
  setInterval(()=>{
    setCountVisible(c=>!c)
  },5000)
  },[])
 // ------------------------------------------------

  return <div>
    <b>
    hi there 
    </b>
    {CountVisible ? <Counter></Counter>  :null }
    {/* <Counter></Counter> */}
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

  // setInterval(function (){
  //   setCount(count +1)   // what happenes here after each time "count" state is called the "Counter function" has been called result more "setInterval" called 
  // }, 1000)              // SO to stop this we have to "useEffect hooks"
     console.log("Counter")

  useEffect(function(){  // hooking into the lifecycle event of react 
    setInterval(function(){
      setCount(count => count + 1)
    }, 1000);
    console.log("Mounted")
  } , []);  //this "ARRAY" is called dependency ARRAY

  return <div>
    <h1>{count}</h1>
    {/* <button onClick={IncreaseCount} >Increase count</button>
    <button onClick={DecreaseCount}>Decrease count</button>
    <button onClick={resetCount}>Reset count</button> */}
  </div>
}

export default App