import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CompetencesCard from "../components/CompetenceCard";
import js from "../assets/logos/js.png";
import html from "../assets/logos/html.png";
import css from "../assets/logos/css.png";
import sass from "../assets/logos/sass.png";
import react from "../assets/logos/react.png";
import redux from "../assets/logos/redux.png";
import tailwind from "../assets/logos/tailwind.png";
import vscode from "../assets/logos/vscode.png";
import git from "../assets/logos/git.png";
import figma from "../assets/logos/figma.png";
import swagger from "../assets/logos/swagger.png";
import node from "../assets/logos/node.png";
import mongo from "../assets/logos/mongoDB.png";
import npm from "../assets/logos/npm.png";
import vite from "../assets/logos/Vitejs.png";
import SkillCard from "../components/SkillCard";

const Competences = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <main className="main-competences">
      <motion.h1
        ref={ref}
        initial={{ x: 1200, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
      >
        <span className="number-title">01.</span> MES COMPÉTENCES
      </motion.h1>
      <article>
        <section className="competences-section">
          <h2>Languages</h2>
          <div className="competences-div">
            <CompetencesCard logoCompetence={html} titleCard={"HTML"} />
            <CompetencesCard logoCompetence={css} titleCard={"CSS"} />
            <CompetencesCard logoCompetence={js} titleCard={"Javascript"} />
          </div>
        </section>

        <section className="competences-section">
          <h2>Frameworks</h2>
          <div className="competences-div">
            <CompetencesCard logoCompetence={react} titleCard={"React.js"} />
            <CompetencesCard
              logoCompetence={redux}
              titleCard={"Redux Toolkit"}
            />
            <CompetencesCard
              logoCompetence={tailwind}
              titleCard={"Tailwind CSS"}
            />
            <CompetencesCard logoCompetence={sass} titleCard={"SASS"} />
          </div>
        </section>

        <section className="competences-section">
          <h2>Outils de gestion et environement</h2>
          <div className="competences-div">
            <CompetencesCard logoCompetence={vscode} titleCard={"VS Code"} />
            <CompetencesCard logoCompetence={git} titleCard={"Git"} />
            <CompetencesCard logoCompetence={figma} titleCard={"Figma"} />
            <CompetencesCard logoCompetence={swagger} titleCard={"Swagger"} />
            <CompetencesCard logoCompetence={node} titleCard={"Node.js"} />
            <CompetencesCard logoCompetence={mongo} titleCard={"MongoDB"} />
            <CompetencesCard logoCompetence={npm} titleCard={"npm"} />
            <CompetencesCard logoCompetence={vite} titleCard={"Vite"} />
          </div>
        </section>
        <section className="skills-container">
          <SkillCard skillTitle={"Bonne pratique SEO"} />
          <SkillCard skillTitle={"Responsiv design"} />
          <SkillCard skillTitle={"Tests"} />
          <SkillCard skillTitle={"Autonomie"} />
          <SkillCard skillTitle={"Méthode Agile"} />
          <SkillCard skillTitle={"W3C"} />
          <SkillCard skillTitle={"Curiosité"} />
          <SkillCard skillTitle={"Bonne communication"} />
          <SkillCard skillTitle={"Gestion du stress"} />
        </section>
      </article>
    </main>
  );
};

export default Competences;
