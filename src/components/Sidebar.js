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
  <h3>Options</h3>
  <div className="ToggleOption">
    <label className="OptionLabel">
      <ToggleSwitch isChecked={isRotationOn} onChange={onToggleRotation} />
      Rotate
    </label>
  </div>
  <div className="ToggleOption">
    <label className="OptionLabel">
      <ToggleSwitch isChecked={isSizeOn} onChange={onToggleSize} />
      Resize
    </label>
  </div>
  <div className="ToggleOption">
    <label className="OptionLabel">
      <ToggleSwitch isChecked={isIdleTimeOn} onChange={onToggleIdleTime} />
      Idle Time
    </label>
  </div>
</div>
  );
}

export default Sidebar;
