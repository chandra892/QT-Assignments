import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Signup from './components/signup'
import Login from './components/Login'


const App = () => {
  return (
    <div className='bg-dark p-4' >
      <div style={{ width: "80%",  marginLeft:"10rem"}} className='mt-5  h-4 mt-3 text-center  ' >
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button style={{ width: "50%", backgroundColor: "gray", height: "50px" }} >Signup</button>
        </Link>

        <Link to="/login" style={{ textDecoration: 'none' }}>
          <button style={{ width: "50%", backgroundColor: "Lightgreen", height: "50px" }} >Login</button>
        </Link>
      </div>

      <Routes >
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </div>
  )
}

export default App