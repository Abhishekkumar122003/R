import { useState } from "react";

let intervalId:any;
function App() {
  const [secondPassed, setSecondPassed] = useState(0);

  function startClock(){
    intervalId = setInterval(()=>{
      setSecondPassed(function (currentValue){
        return currentValue +1;
      })
    }, 1000)
  
  }

  function stopClock(){
    clearInterval(intervalId)
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
  
      <div
        style={{ fontSize: "100px", display: "flex", flexDirection: "column" }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={startClock} >Start CLock</button>
          <button onClick={stopClock}>Stop CLock</button>
        </div>

        <div>
          {secondPassed}s
          </div>
      </div>
    </div>
  );
}

export default App;
