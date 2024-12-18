import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Error from './Components/Error/Error';


function App() {
  var token=localStorage.getItem('token')

  const fetchuserdata = async ()=>{
   const response= await fetch('http://localhost:7409/user/getusers',{
      headers:{
        Authorization:`Bearer ${token}`
      }
     })
    const data = await response.json();
    return data
  }



  const router=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/home',
      element:<Home />,
      loader:fetchuserdata,
      errorElement:<Error/>
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
     
  )
}

export default App
