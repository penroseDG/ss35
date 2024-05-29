import React from 'react';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <button className="new-item">+ New Item</button>
      <ul>
        <li>Dashboard</li>
        <li>Commerce</li>
        <li>Analytics</li>
        <li>Crypto</li>
        <li>Helpdesk</li>
        <li>Monitoring</li>
        <li>Fitness</li>
      </ul>
    </div>
  );
};
export default Sidebar;