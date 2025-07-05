import React from 'react';
import '../App.css';

const MainDashboard = () => {
  return (
    <div className='dash'>
      <h1>Dashboard</h1>
      
      <div className='card-container'>
        <div className='card-1 card'>
          <p>Total Tickets</p>
          <h1>12</h1>
        </div>
        <div className='card-2 card'>
          <p>Open Tickets</p>
          <h1>5</h1>
        </div>
        <div className='card-3 card'>
          <p>Closed Tickets</p>
          <h1>6</h1>
        </div>
        <div className='card-4 card'>
          <p>In Progress</p>
          <h1>1</h1>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
