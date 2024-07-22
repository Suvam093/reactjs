import { useState } from "react"


function App() {
  const [color, setcolor] = useState("olive")       //hook to set a variable and update it in the ui

  return (
    <div className="w-100% h-screen"              //h-screen is for height 100%
    style = {{backgroundColor : color}}
    >

      <div className="fixed flex flex-wrap
      justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white 
        px-3 py-2 rounded-3xl">

       {/* onclick humara jo ha woh ak function expect krta ha thats why humlog usme callback function pass kr rhe ha
       but usme dikkat kya ha ki onClick = {setcolor("red")}  agr ase use kre toh woh function ka return value de rhe ha 
       humlog onClick ko aur onClick = {setcolor} kre toh function hi de rhe ha lekin hume parameters bhi toh pass krne ha 
       uske liye hume pichla wala method use krna pdega lekin phir woh bhi galat ha toh we are using callback funtion 
       aur arrow funtion to pass the parameter*/}


          <button onClick={() => setcolor("red")} className="outline-none px-4 py-1 shadow-large rounded-3xl"
          style={{backgroundColor:"red"}} >Red</button>
          <button onClick={() => setcolor("green")} className="outline-none px-4 py-1 shadow-large rounded-3xl"
          style={{backgroundColor:"green"}} >Green</button>
          <button onClick={() => setcolor("olive")} className="outline-none px-4 py-1 shadow-large rounded-3xl"
          style={{backgroundColor:"olive"}} >Olive</button>
          <button onClick={() => setcolor("blue")} className="outline-none px-4 py-1 shadow-large rounded-3xl"
          style={{backgroundColor:"blue"}} >Blue</button>
          <button onClick={() => setcolor("gray")} className="outline-none px-4 py-1 shadow-large rounded-3xl"
          style={{backgroundColor:"gray"}} >Gray</button>
          <button onClick={() => setcolor("purple")} className="outline-none px-4 py-1 shadow-large rounded-3xl"
          style={{backgroundColor:"purple"}} >Purple</button>
          <button onClick={() => setcolor("beige")} className="outline-none px-4 py-1 shadow-large rounded-3xl"
          style={{backgroundColor:"beige"}} >Beige</button>
        </div>
      </div>


    </div>
  )
}

export default App
