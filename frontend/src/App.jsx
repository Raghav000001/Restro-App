import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'

const App = () => {
  const routes=createBrowserRouter(
        createRoutesFromElements(
          <Route>
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp/>} />
          </Route>
        )
  )


  return (
     <div>
        <RouterProvider router={routes} />
     </div>
  )
}

export default App
