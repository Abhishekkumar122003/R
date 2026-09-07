import axios from "axios";
import { useEffect, useState } from "react";

 
 export function useTodos(){

  const [todos , setTodos] = useState<{title:string}[] >([]);

  useEffect(() => {
    let interval = setInterval (() =>{axios.get("https://jsonplaceholder.typicode.com/todos/")
    .then(response => {
          setTodos(response.data);
    })}, 10*1000)
    return () => {
      clearInterval(interval)
    }
  },[] )
  return {todos, setTodos}
 }