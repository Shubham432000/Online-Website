import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"
const Navbar = () => {
  return (
    <>
      <div className='navbar1'>
        <div className='navbar2'>
            <Link to="/" className='navbar3'>Register</Link>
            <Link to="/login" className='navbar3'>Login</Link>
            <Link to="/productdetails" className='navbar3'>Product</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
