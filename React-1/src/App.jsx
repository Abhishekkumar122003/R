import React, { useState } from 'react'

const App = () => {
  let {count ,setCount} = useState(0);
  function increaseCount(){
    setCount(count++)
  }
  return (
    <div>
       <button onClick={increaseCount}> Count: {count} </button>
      
    </div>
  )
}

export default App
