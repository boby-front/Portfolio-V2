import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";
import Nav from "../components/Nav";

const Header = () => {
  const [scrollMooved, setScrollMooved] = useState();

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      setScrollMooved(true);
    } else {
      setScrollMooved(false);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <header className={scrollMooved ? "hide" : ""}>
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
