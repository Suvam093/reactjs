import { useState } from 'react'
import Chai from './chai.jsx'
function App() {


  const Username = "Suvam Shaw";

  return (
    // fragments as we can only pass one html elements thats why we are using a div tag or an empty tag known as fragments to put all
    //other elements of the html in a single element
    <>                                             
      <h1>Chai aur code | {Username} </h1>    
      {/*  so whenever we want to use a variable we will use it in the above format  */}
      {/* here the above {username} is called evaluated expression which means i can write the final outcome not the evaluating things
      and all the evaluating operations can be done outside the return statement */}
      <Chai/>
      <div>hello</div>
    </>
  )
}

export default App
