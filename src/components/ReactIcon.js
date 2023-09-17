// src/components/ReactIcon.js

import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';

function ReactIcon() {
  const [isClockwise, setIsClockwise] = useState(true);
  const [iconSize, setIconSize] = useState(100); // Initial size
  

  const handleIconClick = () => {
    // Toggle the rotation direction
    setIsClockwise(!isClockwise);
  };

  const handleMouseMove = (e) => {
    // Calculate the new icon size based on cursor position (both horizontal and vertical)
    const newSize = 100 + (e.clientX / window.innerWidth) * 30 + (e.clientY / window.innerHeight) * 30; // Adjust as needed
    setIconSize(newSize);
  };

  const rotationStyle = {
    animation: isClockwise
      ? 'App-logo-spin-clockwise infinite 20s linear'
      : 'App-logo-spin-counterclockwise infinite 20s linear',
    width: `${iconSize}px`, // Set the width based on iconSize
    height: `${iconSize}px`, // Set the height based on iconSize
  };

  useEffect(() => {
    // Add mousemove event listener when the component mounts
    document.addEventListener('mousemove', handleMouseMove);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array ensures the event listener is added/removed only once


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
