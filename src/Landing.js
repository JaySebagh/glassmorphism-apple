import React, { useState } from 'react';
import './assets/styles/landing.css';
import pfp from './assets/images/pfp.jpg';
import Projects from './components/tabs/Projects';
import Contact from './components/tabs/Contact';
import About from './components/tabs/About';

const Landing = () => {
  const tabs = [
    {
      label: 'Projects',
      content: <Projects />
    },
    {
      label: 'Contact',
      content: <Contact />
    },
    {
      label: 'About',
      content: <About />
    },
  ]

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="main-container">
      <div className="panel-glow">
        <div className="left-panel">
          <h1>Jean-Francois Sebagh</h1>
          <img className="pfp" src={pfp}/>
          <h2>Navigation</h2>
          <div className='nav'>
            {tabs.map((tab, index) => (
              <div
                  key={index}
                  className={index === activeTab ? 'tab active' : 'tab inactive'}
                  onClick={() => setActiveTab(index)}
              >
                  {tab.label}
              </div>
            ))}
          </div>
        </div>
        <div className='main-panel'>
          {tabs[activeTab].content}
        </div>
      </div>
    </div>
  );
}

export default Landing;