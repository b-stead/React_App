
import React, { useState } from 'react';
import './ToggleSwitch.css';

function ToggleSwitch({ isChecked, onChange }) {
  const [checked, setChecked] = useState(isChecked || false);

  const handleChange = () => {
    setChecked(!checked);
    onChange(!checked);
  };

  return (
    <label className={`switch ${checked ? 'checked' : ''}`}>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <div className="slider"></div>
    </label>
  );
}

export default ToggleSwitch;
