// src/components/IdleTimeTracker.js

import React, { useState, useEffect } from 'react';

function IdleTimeTracker() {
  const [idleTime, setIdleTime] = useState(0);
  let idleTimer;

  const startIdleTimer = () => {
    idleTimer = setTimeout(() => {
      setIdleTime((prevIdleTime) => prevIdleTime + 1);
    }, 1000); // Adjust the interval as needed (1 second in this example)
  };

  useEffect(() => {
    startIdleTimer();

    // Reset the idle timer when the mouse moves
    const handleMouseMove = () => {
      clearTimeout(idleTimer);
      setIdleTime(0);
      startIdleTimer();
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(idleTimer);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  });

  return <p>Idle Time: {idleTime} seconds</p>;
}

export default IdleTimeTracker;
