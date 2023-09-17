// Sidebar.js

import React from 'react';

function Sidebar({
  isRotationOn,
  isSizeOn,
  isIdleTimeOn,
  onToggleRotation,
  onToggleSize,
  onToggleIdleTime,
}) {
  return (
    <div className="Sidebar">
      <div className="ToggleOption">
        <h3>Options</h3>
        <label>
          <input
            type="checkbox"
            checked={isRotationOn}
            onChange={onToggleRotation}
          />
          Rotate Logo
        </label>
      </div>
      <div className="ToggleOption">
        <label>
          <input
            type="checkbox"
            checked={isSizeOn}
            onChange={onToggleSize}
          />
          Resize Logo
        </label>
      </div>
      <div className="ToggleOption">
        <label>
          <input
            type="checkbox"
            checked={isIdleTimeOn}
            onChange={onToggleIdleTime}
          />
          Mouse Idle Time
        </label>
      </div>
    </div>
  );
}

export default Sidebar;
