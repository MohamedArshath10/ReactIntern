import React, { useState } from 'react'
import '../App';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSignin = () => {
        if(!username || !password) {
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
            <button className='btn' onClick={handleSignin}>Sign in</button>
            <div className='con-2'>
                <Link to="/forgot" className="link-1">Forget password</Link>
                <Link to="/signup" className="link-2">Sign up</Link>
            </div>
        </div>
        
        
    </div>
  )
}

export default Signin