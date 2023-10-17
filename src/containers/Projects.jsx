import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { Data } from "../data/Data";
import ModalProject from "../components/ModalProject";

const Projects = () => {
  const [modalValue, setModalValue] = useState(false);
  const [selectedProjectDescription, setSelectedProjectDescription] =
    useState("");
  const [selectedProjecTitle, setSelectedProjecTitle] = useState("");
  const [selectedProjectPointFort, setSelectedProjectPointFort] = useState("");
  const [selectedProjectLogos, setSelectedProjectPointLogos] = useState("");

  const openModal = (description, title, pointFort, logos) => {
    setSelectedProjecTitle(title);
    setSelectedProjectDescription(description);
    setSelectedProjectPointFort(pointFort);
    setSelectedProjectPointLogos(logos);
    setModalValue(true);
  };

  return (
    <main className="projects-main">
      <h1>
        <span className="number-title">02.</span> MES PROJETS
      </h1>
      <article className="article-projects">
        {Data.map((el, index) => (
          <ProjectCard
            key={index}
            titleProject={el.title}
            img={el.image}
            urlSite={el.link}
            urlGithub={el.github}
            modaleView={() =>
              openModal(el.description, el.title, el.pointFort, el.logo)
            }
          />
        ))}
        {modalValue && (
          <ModalProject
            modalView={() => setModalValue(false)}
            description={selectedProjectDescription}
            title={selectedProjecTitle}
            pointFort={selectedProjectPointFort}
            logos={selectedProjectLogos}
          />
        )}
      </article>
    </main>
  );
};

export default Projects;
