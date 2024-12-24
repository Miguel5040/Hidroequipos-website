import React, { useState } from 'react';
import './Menu.css'; // Ensure to create and link this CSS file

const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className={`off-screen-menu ${!isActive ? 'active' : ''}`}>
        <ul>
          <li><a href="#">home</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">contact</a></li>
        </ul>
      </div>

      <nav>
        <div
          className={`ham-menu ${isActive ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
};

export default Menu;