import React, { useEffect, useState } from 'react'
import Counter from './assets/Hooks/Usestate_Hooks/Counter'
import Counters from './assets/Hooks/UseEffect_Hooks/Counters'

const App = () => {
  let [CounterVisible, setCounterVisible] = useState(true);

    useEffect( function(){
             setInterval(function () {
          setCounterVisible(c =>!c)},
      5000);
      
      } 
      ,[])
   //applying Coonditional rendering

  return (
    <>
   {/* <Counter/> */}
    {/* {CounterVisible ? <Counters/>  : null} */}
    
    {/*how to make my counter not lossing the value , everyTime it rerander it loss its previous value and start from zero */}
    <div  style={{visibility: CounterVisible? "visible" : "hidden" }}><Counters/></div>

    </>
  )
}
function Button(props){
  return <button onClick={props.increaseCount}> Counter {count}</button>
}

export default App
