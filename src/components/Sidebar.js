import React from 'react';

function Sidebar({ onToggleRotation, onToggleSize, onToggleIdleTime }) {
  return (
    <div className="Sidebar">
      <h2>Options</h2>
      <label>
        <input type="checkbox" onChange={onToggleRotation} />
        Toggle Rotation
      </label>
      <label>
        <input type="checkbox" onChange={onToggleSize} />
        Toggle Size
      </label>
      <label>
        <input type="checkbox" onChange={onToggleIdleTime} />
        Toggle Idle Time
      </label>
    </div>
  );
}

export default Sidebar;