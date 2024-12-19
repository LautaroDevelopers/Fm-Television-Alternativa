import React, { useState } from "react";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? (
          <i className="ri-close-large-line"></i>
        ) : (
          <i className="ri-menu-line"></i>
        )}
      </button>
      {isOpen && (
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
