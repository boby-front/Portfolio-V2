import React from "react";
import github from "../assets/logos/github.png";
import link from "../assets/logos/link.png";

const ModalProject = ({
  modalView,
  description,
  pointFort,
  title,
  logos,
  linkInfo,
  githubInfo,
}) => {
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
        <div className="link-github-container">
          <h3>Liens :</h3>
          {linkInfo && (
            <a target="_blank" href={linkInfo}>
              <img src={link} alt="" className="link" />
            </a>
          )}
          {githubInfo && (
            <a target="_blank" href={githubInfo}>
              <img src={github} alt="" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalProject;
