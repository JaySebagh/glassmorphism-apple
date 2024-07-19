import React from 'react';
import './assets/styles/landing.css';
import pfp from './assets/images/pfp.jpg';

const Landing = () => {
  return (
    <div className="main-container">
      <div className="panel-glow">
        <div className="left-panel">
          <h1>Jean-Francois Sebagh</h1>
          <img className="pfp" src={pfp}/>
          <h2>Navigation</h2>
          <div className='nav'>
            <div>Projects</div>
            <div>Skills</div>
            <div>Contact</div>
          </div>
        </div>
        <div className='main-panel'>
          hello
        </div>
      </div>
    </div>
  );
}

export default Landing;
