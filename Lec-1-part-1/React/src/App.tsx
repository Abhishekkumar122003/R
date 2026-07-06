type PostProps = {
  name:string,
  content:string
}

function App() {
const post = [{
      name:"hrkirt",
      content:"today I Launch new Course"
   },
  {
    name:"Abhishek",
    content:"Hellooooo gysssss!! Today I got my First Dream Job, with a wopping packeage of $40000 inHand a year 😁😎"
  },
  {
    name:"Simiran",
    content:"Hi Abhishek let's Connect"
  }]

  return (
    <>
      <div>
       <h1> Linked!!!</h1>
        {/* <Post name= "hrkirt" content= "today I launch new Course" />
        <Post name="Abhishek" content= "today I learned new thing " />
        <Post name="shumesh" content= "hi" /> */}
        <Post name={post[0].name} content={post[0].content} />
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
