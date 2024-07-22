import { useState } from 'react'
import './App.css'

function App() {

  let [counter , setCounter] = useState(10)

  // let counter = 10;
  const addvalue=()=>{
    if(counter<20){
      counter ++;
    }
    setCounter(counter)
    console.log("value added");
  }

  const subvalue = ()=>{
    if(counter>0){
      counter = counter - 1;
    }
    setCounter(counter)
  }

  return (
    <>
      <h1>Chai aur react {counter}</h1>
      <h2>Counter: {counter}</h2>
    
      <button onClick={addvalue}> + {counter}</button>
      <br />
      <button
      onClick={subvalue}
      > - {counter}</button>
    </>
  )
}

export default App