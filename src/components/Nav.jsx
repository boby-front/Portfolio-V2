import React, { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <ul className={!isMenuOpen ? "hide-nav" : ""}>
        <div
          className={`toggle-btn ${isMenuOpen ? "active" : ""}`}
          onClick={handleToggleMenu}
        >
          <span className="nav-line"></span>
          <span className="nav-line"></span>
          <span className="nav-line"></span>
        </div>
        <li>accueil</li>
        <li>à propos</li>
        <li>compétences</li>
        <li>projets</li>
        <li>contacts</li>
      </ul>
    </nav>
  );
};

export default Nav;
