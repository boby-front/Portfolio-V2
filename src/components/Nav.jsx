import React, { useState } from "react";
import { useSelector } from "react-redux";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mode } = useSelector((state) => state.sunMode);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={!isMenuOpen ? "hide-nav" : ""}>
      <div
        className={`toggle-btn ${isMenuOpen ? "active" : ""}`}
        onClick={handleToggleMenu}
      >
        <span className="nav-line"></span>
        <span className="nav-line"></span>
        <span className="nav-line"></span>
      </div>
      <ul>
        <li>
          <a
            href="#accueil"
            onClick={handleToggleMenu}
            className={!mode ? "sun-theme-text" : ""}
          >
            accueil
          </a>
        </li>
        <li>
          <a
            href="#àpropos"
            onClick={handleToggleMenu}
            className={!mode ? "sun-theme-text" : ""}
          >
            à propos
          </a>
        </li>
        <li>
          <a
            href="#compétences"
            onClick={handleToggleMenu}
            className={!mode ? "sun-theme-text" : ""}
          >
            compétences
          </a>
        </li>
        <li>
          <a
            href="#projets"
            onClick={handleToggleMenu}
            className={!mode ? "sun-theme-text" : ""}
          >
            projets
          </a>
        </li>
        <li>
          <a
            href="#contacts"
            onClick={handleToggleMenu}
            className={!mode ? "sun-theme-text" : ""}
          >
            contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
