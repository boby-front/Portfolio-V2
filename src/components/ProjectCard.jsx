import React from "react";
import github from "../assets/logos/github.png";
import about from "../assets/logos/about.jpg";
import link from "../assets/logos/link.png";

const ProjectCard = ({ titleProject, img, urlSite, urlGithub, modaleView }) => {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={() => {
        modaleView(true);
      }}
      style={{
        background: `url(${img})`,
        backgroundSize: "cover",
        position: "relative",
      }}
      className="project-card"
    >
      <div className="filter"></div>
      <div className="infos-card-project">
        <h2>{titleProject}</h2>
        <div className="link-div">
          {urlSite && (
            <a href={urlSite} target="_blank" onClick={stopPropagation}>
              <img src={link} alt="" className="logo-card-project" />
            </a>
          )}
          {urlGithub && (
            <a href={urlGithub} target="_blank" onClick={stopPropagation}>
              <img src={github} alt="" className="logo-card-project" />
            </a>
          )}
          <img src={about} alt="" className="logo-card-project" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
