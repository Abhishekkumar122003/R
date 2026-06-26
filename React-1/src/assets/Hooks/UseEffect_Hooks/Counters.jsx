import React, { useEffect , useState } from 'react'
// sommw of the lifeCycle => mounting , re-randering , unmounting
const Counters = () => {
   const [count , setCount] = useState(0);
  
      // In React, it has lifeCycle Event which triger while state changes
 
      // I have to gaurd this "setInterval" from re-randers by using useEffect hook
      useEffect( function (){
      let clock = setInterval( function (){
        setCount(count => count + 1)
      },1000)
       
      return function(){  
        clearInterval(clock) // this is run to cleanup the setInterval
      }
    },
        [])
      // function increaseCounter(){
      //   setCount(count  + 1);
      // }
    
  
    return (
      <div>
        <h1>hii</h1>
        <h1> { count} </h1>
        {/* <button onClick={increaseCounter} > Increase Count </button> */}
      </div>
    )
}

export default Counters
