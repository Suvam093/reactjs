import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "Suvam",
    age: 21
  }

  let newArr = [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind Test</h1>

      <Card name = "Delba"  btntext = "Visit me" someObj = {myObj} arr = {newArr} />
      <Card name = "Suvam" btntext = "Click me" />
      <Card name = "Satish" btntext= "Click here" />
      <Card />

    </>
  )
}

export default App
