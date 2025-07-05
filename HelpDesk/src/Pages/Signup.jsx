import React, { useState } from 'react'
import '../App';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSignin = () => {
        if(!username || !password || !email) {
            alert('Please fill in all fields');
            return;
        }
        else{
            navigate('/dashboard'); 
        }
    }
  return (
    <div className='container'>
        <div className="input-con">
            <h1 className='title'>Help Desk</h1>
            <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="text" placeholder='Password'value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <button className='sign-btn' onClick={handleSignin}>Sign up</button>
            <div className='con-2'>
                <Link to="/forgot" className="link-1">Forget password</Link>
                <Link to="/" className="link-2">Sign in</Link>
            </div>
        </div>
        
        
    </div>
  )
}

export default Signup
