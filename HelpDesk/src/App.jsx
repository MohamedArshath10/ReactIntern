import React from 'react'
import './App.css';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup'
import { Routes, Route } from 'react-router-dom';
import Forgot from './Pages/Forgot';
import Dashboard from './Pages/Dashboard';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App