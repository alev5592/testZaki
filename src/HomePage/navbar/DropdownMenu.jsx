import React, { useState } from 'react';
import './DropdownMenu.css'; 

const DropdownMenu = ({dropdownName}) => {
  const [isHovered, setIsHovered] = useState(false);


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="dropdown-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="dropdown-button">{dropdownName}</button>
      <img className='arrow' src="src\icons\ChevronDown.png" />
      {isHovered && (
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
