import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// function MyApp(){
//   return(
//     <div>
//       <h1>milte rahenge!</h1>
//     </div>
//   )
// }


//The below is how the react render its element even though we pass the elements as we write it in html react converts it like below

// const reactElement = {
//   type : 'a',
//   props : {
//       href : 'https://google.com',
//       target : '_blank',
//   },
//   children : 'Click me to open Google'
// };

// but we cannot directly pass it like above bcoz the variables we are using are not going to be the same as what inside react library



const anotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)


const rElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'click me to visit google yaade yaade yaada'
)


//This expects a function that returns an object or some html
ReactDOM.createRoot(document.getElementById('root')).render(
  // rElement
  <App />
)
