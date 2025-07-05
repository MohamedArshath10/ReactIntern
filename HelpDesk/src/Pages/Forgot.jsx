import React from 'react'
import '../App';
import { Link, useNavigate } from 'react-router-dom';

const Forgot = () => {

    const navigate = useNavigate()
  return (
    <div className='container'>
        <div className="input-con">
            <p className='para'>Don't worry Enter your email below and and we will <br /> send
                you a link to reset your password
            </p>
            <input type="text" placeholder='Email' />
            <button className='btn'>Submit</button><br />
            <button className='sign-btn' onClick={() => navigate('/')}>Sign in</button>
        </div>
        
        
    </div>
  )
}

export default Forgot
