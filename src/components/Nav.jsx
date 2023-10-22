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
          <a href="#accueil" onClick={handleToggleMenu}>
            accueil
          </a>
        </li>
        <li>
          <a href="#àpropos" onClick={handleToggleMenu}>
            à propos
          </a>
        </li>
        <li>
          <a href="#compétences" onClick={handleToggleMenu}>
            compétences
          </a>
        </li>
        <li>
          <a href="#projets" onClick={handleToggleMenu}>
            projets
          </a>
        </li>
        <li>
          <a href="#contacts" onClick={handleToggleMenu}>
            contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
