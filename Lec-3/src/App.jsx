import React from 'react'
// React give you the ability to structure my code in better way
    //Defining the state of my application
const App = () => {
  return (
    <div style={{backgroundColor:"#dfe8e9" ,height:"100vh"}}>
      hii  theree
      <PostComponent  />
    </div>
    
  )
}

function PostComponent(){
  return <div style={{width:200,backgroundColor:"white", borderRadius:10, borderColor:"grey", borderWidth:1, height:"10vh" }}>
    <div style={{ display: 'flex'}}>
      <img src="https://appx-content-v2.classx.co.in/paid_course3/2026-05-28-0_13465652079995793.jpeg" style={{
        width:30,
        height:30,
         borderRadius:20,
      }} />
      <div style={{
        fontSize:10,
        marginLeft:9
      }}>
        <b>100xdevs</b>
        <div>28, 000 followers <br /> 12m</div>
      </div>
          
      <div>
          want to know how to win big? Check out how these folks won $6000 in bounties.
      </div>
    </div>
  </div>
}
    

export default App
