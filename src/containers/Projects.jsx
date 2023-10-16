import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <main className="projects-main">
      <h1>
        <span className="number-title">02.</span> MES PROJETS
      </h1>
      <article className="article-projects">
        <ProjectCard titleProject="" img="" urlSite="" urlGithub="" />
      </article>
    </main>
  );
};

export default Projects;
