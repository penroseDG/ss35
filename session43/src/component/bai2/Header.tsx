import React from 'react';
import './Header.scss';
const Header = () => {
  return (
    <div className="header">
      <button className="add-new-post">Add new post</button>
      <input type="text" placeholder="Search content..." />
      <div className="admin">Admin</div>
    </div>
  );
};
export default Header;