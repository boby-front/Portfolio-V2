import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";

const Header = () => {
  const { mode } = useSelector((state) => state.sunMode);
  const [scrollMooved, setScrollMooved] = useState(false);

  const handleScroll = (event) => {
    if (window.innerWidth < 1300) {
      setScrollMooved(false);
    } else {
      if (event.deltaY > 0) {
        setScrollMooved(true);
      } else {
        setScrollMooved(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1300) {
        setScrollMooved(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`${scrollMooved ? "hide" : ""} ${
        !mode ? "sun-theme-bg-header" : ""
      }`}
    >
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
