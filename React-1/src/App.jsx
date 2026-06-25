import React, { useState } from 'react'

const App = () => {
  let [count ,setCount] = useState(0);
  function increaseCount(){
    setCount(count+1)
  }
  return (
    <div>
       <button onClick={increaseCount}> Count: {count} </button>
      
    </div>
  )
}
function Button(props){
  return <button onClick={props.increaseCount}> Counter {count}</button>
}

export default App
