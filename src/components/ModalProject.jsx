import React from "react";

const ModalProject = ({ modalView, description, pointFort, title, logos }) => {
  const pointFortArray = pointFort.split("\n");

  return (
    <div className="modal-project">
      <div className="modal-content">
        <p className="close-modal" onClick={() => modalView(!modalView)}>
          X
        </p>
        <h2>
          <span className="planet-modal"></span>
          {title}
        </h2>
        <h3>Description :</h3>
        <p>{description}</p>
        <h3>Points forts :</h3>
        <div className="point-fort">
          {pointFortArray.map((point, index) => (
            <p key={index}>{point}</p>
          ))}
        </div>
        <div className="logos-project-container">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalProject;
