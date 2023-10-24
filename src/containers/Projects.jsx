import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  const [selectedLink, setSelectedLink] = useState("");
  const [selectedGithub, setSelectedGithub] = useState("");

  const openModal = (description, title, pointFort, logos, github, link) => {
    setSelectedProjecTitle(title);
    setSelectedProjectDescription(description);
    setSelectedProjectPointFort(pointFort);
    setSelectedProjectPointLogos(logos);
    setSelectedLink(link);
    setSelectedGithub(github);
    setModalValue(true);
  };

  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  return (
    <main className="projects-main" id="projets">
      <motion.h1
        ref={ref}
        initial={{ x: -200, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        className="rightToLeft"
      >
        <span className="number-title">02.</span> MES PROJETS
      </motion.h1>
      <article className="article-projects">
        {Data.map((el, index) => (
          <ProjectCard
            key={index}
            titleProject={el.title}
            img={el.image}
            urlSite={el.link}
            urlGithub={el.github}
            modaleView={() =>
              openModal(
                el.description,
                el.title,
                el.pointFort,
                el.logo,
                el.github,
                el.link
              )
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
            linkInfo={selectedLink}
            githubInfo={selectedGithub}
          />
        )}
      </article>
    </main>
  );
};

export default Projects;
