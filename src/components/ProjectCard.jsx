import React from "react";

const ProjectCard = ({ titleProject, img, urlSite, urlGithub }) => {
  return (
    <div className="project-card">
      <div style={{ background: `url(${img})` }}>
        <h2>{titleProject}</h2>
        <div className="link-div">
          {urlSite && (
            <img
              src="../assets/logos/link.png"
              alt=""
              className="logo-card-project"
            />
          )}
          {urlGithub && (
            <img
              src="../assets/logos/github.png"
              alt=""
              className="logo-card-project"
            />
          )}
          <img
            src="../assets/logos/about.png"
            alt=""
            className="logo-card-project"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
