import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ReactIcon from './components/ReactIcon';
import IdleTimeTracker from './components/IdleTimeTracker';
import './App.css';

function App() {
  const [isRotationOn, setRotationOn] = useState(true);
  const [isSizeOn, setSizeOn] = useState(true);
  const [isIdleTimeOn, setIdleTimeOn] = useState(true);
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const handleToggleRotation = () => {
    setRotationOn(!isRotationOn);
  };

  const handleToggleSize = () => {
    setSizeOn(!isSizeOn);
  };

  const handleToggleIdleTime = () => {
    setIdleTimeOn(!isIdleTimeOn);
  };

  const handleToggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="App">
      <header className="App-header">
      <ReactIcon
          isRotationOn={isRotationOn}
          isSizeOn={isSizeOn}
        />
        <p>
          <IdleTimeTracker
            isIdleTimeOn={isIdleTimeOn}
          />
        </p>
        <div className="menu-container">
        <i className={`fas ${isSidebarVisible ? 'fa-times' : 'fa-bars'} ${isSidebarVisible ? 'active' : ''} top-right-icon`} onClick={handleToggleSidebar}></i>
        
        {isSidebarVisible && ( // Render the sidebar if isSidebarVisible is true
        <div className="Sidebar"> 
          <Sidebar
            isRotationOn={isRotationOn}
            isSizeOn={isSizeOn}
            isIdleTimeOn={isIdleTimeOn}
            onToggleRotation={handleToggleRotation}
            onToggleSize={handleToggleSize}
            onToggleIdleTime={handleToggleIdleTime}
          />
        </div>       
        )}
        </div>
      </header>
    </div>
  );
}

export default App;
