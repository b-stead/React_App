// src/components/ReactIcon.js

import React, { useState } from 'react';
import logo from '../assets/logo.svg';

function ReactIcon() {
  const [isClockwise, setIsClockwise] = useState(true);
  

  const handleIconClick = () => {
    // Toggle the rotation direction
    setIsClockwise(!isClockwise);
  };

  const rotationStyle = {
    animation: isClockwise
      ? 'App-logo-spin-clockwise infinite 20s linear'
      : 'App-logo-spin-counterclockwise infinite 20s linear',
  };

  return (
    <img
      src={logo}
      alt="logo"
      className="App-logo"
      onClick={handleIconClick}
      style={rotationStyle}
    />
  );
}

export default ReactIcon;
