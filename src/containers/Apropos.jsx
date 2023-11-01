import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";

const Apropos = () => {
  const { mode } = useSelector((state) => state.sunMode);

  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <main
      className={`main-apropos bg-dark ${!mode ? "sun-theme-bg" : ""}`}
      id="àpropos"
    >
      <motion.h1
        ref={ref}
        initial={{ y: 200, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        className={!mode ? "sun-theme-text" : ""}
      >
        <span className="number-title">03.</span> À PROPOS DE MOI
      </motion.h1>
      <article className="article-apropos">
        <div className="image-apropos-container">
          <p></p>
        </div>
        <section>
          <p className={!mode ? "sun-theme-text" : ""}>
            👋 Mon parcours atypique dans l'infographie a renforcé mes
            compétences en design et créativité. Passionné par le développement
            web, j'ai plongé dans l'apprentissage autodidacte, puis me suis
            perfectionné lors d'une formation intensive de 9 mois chez
            OpenClassrooms, en mettant l'accent sur le développement front-end,
            notamment en React JS.
          </p>
          <p className={!mode ? "sun-theme-text" : ""}>
            J'ai acquis une solide compréhension des concepts fondamentaux de
            React JS, des bibliothèques telles que Redux, React Router et Axios,
            pour le Front-end, ainsi que Node.Js / Express pour le Back-end et
            des meilleures pratiques pour créer des applications web dynamiques
            et interactives. Aujourd'hui, en tant que développeur front-end , je
            suis fier d'offrir des interfaces réactives, optimisées et
            évolutives.
          </p>
          <p className={`f-w-police ${!mode ? "sun-theme-text" : ""}`}>
            Explorez mon portfolio pour découvrir mes projets, n'hésitez pas à
            me contacter, je suis ouvert à toutes opportunités. 🚀
          </p>
        </section>
      </article>
    </main>
  );
};

export default Apropos;
