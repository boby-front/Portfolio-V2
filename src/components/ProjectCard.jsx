import React from "react";
import github from "../assets/logos/github.png";
import about from "../assets/logos/about.jpg";
import link from "../assets/logos/link.png";

const ProjectCard = ({ titleProject, img, urlSite, urlGithub }) => {
  return (
    <div
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
          {urlSite && <img src={link} alt="" className="logo-card-project" />}
          {urlGithub && (
            <img src={github} alt="" className="logo-card-project" />
          )}
          <img src={about} alt="" className="logo-card-project" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
