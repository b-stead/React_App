import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [isClockwise, setIsClockwise] = useState(true);

  const handleLogoClick = () => {
    // Toggle the rotation direction
    setIsClockwise(!isClockwise);
  };

  const animationStyle = {
    animation: isClockwise ? 'App-logo-spin-clockwise infinite 20s linear' : 'App-logo-spin-counterclockwise infinite 20s linear',
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          onClick={handleLogoClick}
          style={animationStyle}
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
