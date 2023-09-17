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
    // Get the center coordinates of the logo
    const logoRect = document.querySelector('.App-logo').getBoundingClientRect();
    const logoCenterX = logoRect.left + logoRect.width / 2;
    const logoCenterY = logoRect.top + logoRect.height / 2;
  
    // Calculate the distance between the cursor and the logo's center
    const dx = e.clientX - logoCenterX;
    const dy = e.clientY - logoCenterY;
    const distance = Math.sqrt(dx * dx + dy * dy);
  
    // Calculate the new icon size based on the distance
    const newSize = 300 - distance * 0.1; // Adjust the factor to control the sensitivity
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
