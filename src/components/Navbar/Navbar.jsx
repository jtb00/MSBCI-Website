import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/placeholder.svg'

const Navbar = () => {
  return (
    <div>
      <nav className='container'>
        <Link to='/'><img src={logo} alt="" className='logo'/></Link>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
      </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Navbar
