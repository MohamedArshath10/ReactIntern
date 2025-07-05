import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <div className='side-nav'>
        <Link to="/dashboard" className="links">Dashboard</Link>
        <Link to="" className="links">New Ticket</Link>
        <Link to="" className="links">My Ticket</Link>
    </div>
  )
}

export default SideNav