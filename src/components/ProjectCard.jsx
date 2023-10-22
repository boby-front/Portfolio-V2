import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import github from "../assets/logos/github.webp";
import about from "../assets/logos/about.webp";
import link from "../assets/logos/link.webp";

const ProjectCard = ({ titleProject, img, urlSite, urlGithub, modaleView }) => {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0 }}
      animate={inView ? { scale: 1 } : {}}
      transition={{ duration: 0.5, ease: "linear" }}
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
        <div className="link-github-container"></div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
