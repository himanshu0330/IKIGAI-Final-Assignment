import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github from './components/Github/Github.jsx'
import User from './components/User/User.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,// should be defined to tell which one to render at start 
    children: [// for adding more pages that is our main motive as well
    // here adding multiple objects so as to add multiple pages 
    // according to our convinience 
      {
        path: '',// here empty string represents the home page as this is gonna be the first page
        element: <Home/>,
      },
      {
        path: 'about',
        element: <About/>,
      },
      {
        path: 'contact',
        element: <Contact/>,
      },
      {
        path: '',
        element: <Github/>,
      },
      {
        path: 'user/:userid',
        element: <User/>,
      },
      
    ]
  
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

// *********************************************
// ASYNC JS 
// common example of async JS is of making a person wait till i get the glass of water 
// for them and they can't do anything else till then 
// but asycn allows them to do other things till then and when the glass of water is ready
// this was bascially done by using functions like setTimeOut() and setInterval()

// SETTIMEOUT()
// IT MAKES THE CODE WAIT FOR THE GIVEN TIME AND THEN EXECUTES THE CODE
// SETINTERVAL()
// IT MAKES THE CODE WAIT FOR THE GIVEN TIME AND THEN EXECUTES THE CODE 
// AND THEN AGAIN WAITS FOR THE GIVEN TIME AND THEN EXECUTES THE CODE AND SO ON



// *********************************************
// PROMISES 
// PROMISES ARE USED TO HANDLE ASYNC CODE
// IT IS DONE BY USING .THEN() AND .CATCH() METHODS

// *********************************************
// LEXICAL SCOPING
// IT IS THE ABILITY OF A FUNCTION TO ACCESS ITS OUTER FUNCTION
// IT IS DONE BY USING CLOSURES
// CLOSURES ARE THE FUNCTIONS THAT ARE RETURNED BY ANOTHER FUNCTION
// IT IS DONE BY USING THE RETURN KEYWORD
// IT IS DONE BY USING THE ARROW FUNCTIONS
// IT IS DONE BY USING THE BIND() METHOD


// CODE EXAMPLE OF CLOSURES
// function outer(){
//     let outerVar = 'I am the outer variable'
//     function inner(){
//         let innerVar = 'I am the inner variable'
//         console.log(innerVar)
//         console.log(outerVar)
//     }
//     return inner
// }
// let innerFn = outer()
// innerFn()
// *********************************************
