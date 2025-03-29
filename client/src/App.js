
import React from 'react'
import {Routes,Route,Link} from 'react-router-dom' 
import Home from "./pages/home"
import Login from './pages/login'
import Register from './pages/register'
import './index.css';

const App = () => {
  return (
    <div>
 <Routes>
 <Route path='/' element={<Home/>}/> 
 <Route path='/login' element={<Login/>}/> 
 <Route path='/register' element={<Register/>}/> 

 </Routes>
    </div>
  )
}

export default App
