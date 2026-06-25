import React, { useState } from 'react'

const Counter = () => {
  const [count , setCount] = useState(0);

    
    setInterval( function (){
      setCount(count + 1)
    },100000)

    // function increaseCounter(){
    //   setCount(count  + 1);
    // }
  

  return (
    <div>
      <h1> { count} </h1>
      {/* <button onClick={increaseCounter} > Increase Count </button> */}
    </div>
  )
}

export default Counter
