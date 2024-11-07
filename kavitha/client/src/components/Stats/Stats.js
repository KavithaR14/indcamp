import React from 'react';
import './Stats.css'; // Ensure your CSS reflects the new class names

const Stats = () => {
  return (
    <div className="stats-container">
      <div className="stats-item">
        <h1>40K</h1>
        <p>Endangered<br/> Species</p>
      </div>
      <div className="stats-item">
        <h1>800</h1>
        <p>Volunteers</p>
      </div>
      <div className="stats-item">
        <h1>140</h1>
        <p>Conservation<br/>Programs</p>
      </div>
      <div className="stats-item">
        <h1>1</h1>
        <p>Earth for Us to <br/>Protect</p>
      </div>
    </div>
  );
};

export default Stats;
