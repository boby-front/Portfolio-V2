import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSunMode } from "../store/slices/sunModeSlice";

const Logo = () => {
  const [moveButton, setMoveButton] = useState(false);
  const { mode } = useSelector((state) => state.sunMode);
  const dispatch = useDispatch();

  const toggleButton = () => {
    setMoveButton(!moveButton);
    dispatch(toggleSunMode());
    console.log(mode);
  };

  return (
    <>
      <h2 className={`portfolio hovered ${!mode ? "sun-theme-text" : ""}`}>
        BOB DELANGLE.
      </h2>
      <button
        className={`sun-mode-button ${moveButton ? "move-button" : ""} ${
          !mode ? "sun-theme-bg-button" : ""
        }`}
        onClick={toggleButton}
      >
        <div className="container-logo-theme">
          {!moveButton ? (
            <i class="fa-solid fa-sun"></i>
          ) : (
            <i class="fa-solid fa-moon"></i>
          )}
        </div>
      </button>
    </>
  );
};

export default Logo;
