import React from 'react'
import '../App.css'
import { FaBell, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import SideNav from './SideNav';
import MainDashboard from './MainDashboard';

const Dashboard = () => {
  return (
    <div className='navbar'>
        <nav>
            <h1 className='nav-title'>Helpdesk</h1>
            <div className='nav-links'>
                <Link className='icon'><FaBell /></Link>
                <Link className='icon'><FaUser /></Link>
                <Link to="/" className='icon'><FaSignOutAlt /></Link>
            </div>
        </nav>
        <div className='dash-con'>
        <SideNav />
        <MainDashboard />
        </div>
    </div>
  )
}

export default Dashboard