import React, { useState, useEffect, useRef } from 'react';

function IdleTimeTracker({ isIdleTimeOn }) {
  const [idleTime, setIdleTime] = useState(0);
  const idleTimerRef = useRef(null);

  const startIdleTimer = () => {
    if (isIdleTimeOn) {
      idleTimerRef.current = setInterval(() => {
        setIdleTime((prevIdleTime) => prevIdleTime + 1);
      }, 1000);
    }
  };

  const resetIdleTimer = () => {
    clearInterval(idleTimerRef.current);
    setIdleTime(0);
    startIdleTimer();
  };

  useEffect(() => {   
    startIdleTimer();

    // Reset the idle timer when the mouse moves
    const handleMouseMove = () => {
      resetIdleTimer();
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(idleTimerRef.current);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  },);

  return <p>Idle Time: {idleTime} seconds</p>;
}

export default IdleTimeTracker;
