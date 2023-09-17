// Sidebar.js

import React from 'react';
import ToggleSwitch from './ToggleSwitch';

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
        <h3> Options </h3>
        <ToggleSwitch isChecked={isRotationOn} onChange={onToggleRotation} />
        Rotate
      </div>
      <div className="ToggleOption">
        <ToggleSwitch isChecked={isSizeOn} onChange={onToggleSize} />
        Resize
      </div>
      <div className="ToggleOption">
        <ToggleSwitch isChecked={isIdleTimeOn} onChange={onToggleIdleTime} />
        Idle Time
      </div>
    </div>
  );
}

export default Sidebar;
