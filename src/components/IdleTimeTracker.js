// src/components/IdleTimeTracker.js

import React, { useState, useEffect, useRef } from 'react';

function IdleTimeTracker(isIdleTimeOn) {
  const [idleTime, setIdleTime] = useState(0);
  const idleTimerRef = useRef(null);

  useEffect(() => {   
    const startIdleTimer = () => {
        if (isIdleTimeOn) {
            idleTimerRef.current = setTimeout(() => {
                setIdleTime((prevIdleTime) => prevIdleTime + 1);
              }, 1000); // Adjust the interval as needed (1 second in this example)
        }
      };

    // Reset the idle timer when the mouse moves
    const handleMouseMove = () => {
      clearTimeout(idleTimerRef.current);
      setIdleTime(0);
      startIdleTimer();
    };

    startIdleTimer();
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(idleTimerRef.current);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isIdleTimeOn]);

  return <p>Idle Time: {idleTime} seconds</p>;
}

export default IdleTimeTracker;
