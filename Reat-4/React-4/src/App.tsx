import { useState } from "react";

function App() {
  const [secondPassed, setSecondPassed] = useState(0);
let start;
let i=0;
  function startClock(){
    start = setInterval(()=>{
      setSecondPassed(s => s +1)
    }, 1000)
    console.log(start ,"hi there",  i)
  }

  function StopClock(){
    // clearInterval(start)
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
          {/* <button onClick={StopClock}>Stop CLock</button> */}
        </div>

        <div>
          {secondPassed}s
          </div>
      </div>
    </div>
  );
}

export default App;
