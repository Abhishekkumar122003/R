type PostProps = {
  name:string,
  content:string
}

function App() {


  return (
    <>
      <div>
       <h1> Linked!!!</h1>
        <Post name= "hrkirt" content= "today I launch new Course" />
        <Post name="Abhishek" content= "today I learned new thing " />
        <Post name="shumesh" content= "hi" />
      </div>
    </>
  )
}
function Post(props:PostProps) {
  return   (<>
        <div style={{marginTop:2, borderRadius:20, padding:20, width:"500px",border:"2px solid black" , borderColor:"black" }}>
      <div> {props.name} </div>
      <div> {props.content}</div>
      </div>
    </>)
}

export default App
