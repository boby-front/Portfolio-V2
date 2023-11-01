import React from "react";
import { useSelector } from "react-redux";

const Competence = ({ logoCompetence, titleCard }) => {
  const { mode } = useSelector((state) => state.sunMode);

  return (
    <div className="competence-card">
      <img src={logoCompetence} alt={titleCard} className="logo-skill" />
      <p className={!mode ? "sun-theme-text" : ""}>{titleCard}</p>
    </div>
  );
};

export default Competence;
