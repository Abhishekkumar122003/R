import React, { useState } from 'react'
import Counter from './assets/Hooks/Usestate_Hooks/Counter'

const App = () => {

  return (
    <>
   <Counter/>


    </>
  )
}
function Button(props){
  return <button onClick={props.increaseCount}> Counter {count}</button>
}

export default App
