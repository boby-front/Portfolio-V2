import React from "react";

const Competence = ({ logoCompetence, titleCard }) => {
  return (
    <div className="competence-card">
      <img src={logoCompetence} alt={titleCard} className="logo-skill" />
      <p>{titleCard}</p>
    </div>
  );
};

export default Competence;
