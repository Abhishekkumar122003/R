import React from 'react'
// React give you the ability to structure my code in better way
    //Defining the state of my application
const App = () => {
  return (
    <div>
      hii  theree
      <PostComponent style={{height:"100vh"}} />
    </div>
    
  )
}

function PostComponent(){
  return <div style={{display: "flex" ,width:"100vh", height:"100vh",  borderWidth:1, backgroundColor: "#636e72" , }}>
    <img src="https://harkirat.classx.co.in/new-courses"  style={{height: 20 , width:20,}}/>
  </div>
}
    

export default App
