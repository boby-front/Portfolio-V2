import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Data } from "../data/Data";

const Projects = () => {
  return (
    <main className="projects-main">
      <h1>
        <span className="number-title">02.</span> MES PROJETS
      </h1>
      <article className="article-projects">
        {Data.map((el) => (
          <ProjectCard
            titleProject={el.title}
            img={el.image}
            urlSite={el.link}
            urlGithub={el.github}
          />
        ))}
      </article>
    </main>
  );
};

export default Projects;
