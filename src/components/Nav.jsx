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
        <li>
          <a href="#accueil">accueil</a>
        </li>
        <li>
          <a href="#àpropos">à propos</a>
        </li>
        <li>
          <a href="#compétences">compétences</a>
        </li>
        <li>
          <a href="#projets">projets</a>
        </li>
        <li>
          <a href="#contacts">contacts</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
