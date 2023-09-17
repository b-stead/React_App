import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ReactIcon from './components/ReactIcon';
import IdleTimeTracker from './components/IdleTimeTracker';
import './App.css';

function App() {
  const [isRotationOn, setRotationOn] = useState(true);
  const [isSizeOn, setSizeOn] = useState(true);
  const [isIdleTimeOn, setIdleTimeOn] = useState(true);

  const handleToggleRotation = () => {
    setRotationOn(!isRotationOn);
  };

  const handleToggleSize = () => {
    setSizeOn(!isSizeOn);
  };

  const handleToggleIdleTime = () => {
    setIdleTimeOn(!isIdleTimeOn);
  };

  return (
    <div className="App">
      <header className="App-header">
      <Sidebar
          isRotationOn={isRotationOn}
          isSizeOn={isSizeOn}
          isIdleTimeOn={isIdleTimeOn}
          onToggleRotation={handleToggleRotation}
          onToggleSize={handleToggleSize}
          onToggleIdleTime={handleToggleIdleTime}
        />
        <ReactIcon
          isRotationOn={isRotationOn}
          isSizeOn={isSizeOn}
        />
        <p>
        <IdleTimeTracker 
          isIdleTimeOn={isIdleTimeOn}
          />
        </p>
      </header>
    </div>
  );
}

export default App;
