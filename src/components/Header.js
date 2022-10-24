import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>Budget Snob Application</h1> 
      <NavLink 
      activeclassname="active" 
      className='nav-link' 
      to="/" 
      end
      >Home</NavLink>
      <NavLink 
      activeclassname="active" 
      className='nav-link' 
      to="/add"
      >Add</NavLink>
      <NavLink 
      activeclassname="active" 
      className='nav-link' 
      to="/edit"
      >Edit</NavLink>
    </header>
  )
}

export default Header