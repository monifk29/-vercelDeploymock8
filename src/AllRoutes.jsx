import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './pages/Admin'

import Hotel from './pages/Hotel'
import Login from './pages/Login'
import Signup from './pages/Signup'
import User from './pages/User'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Hotel/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/user' element={<User/>}></Route>
  
        <Route path='/admin' element={<Admin/>}></Route>
    </Routes>
  )
}

export default AllRoutes