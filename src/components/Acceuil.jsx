import React, { useState, useEffect, useRef } from "react";
import saturn from "../assets/images/saturn.png";
const Acceuil = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Calcul du déplacement par rapport à la position précédente
      const deltaX = clientX - position.x;
      const deltaY = clientY - position.y;

      // Limiter le déplacement à 50 pixels
      const newX = Math.min(
        position.x + 50,
        Math.max(position.x - 50, clientX)
      );
      const newY = Math.min(
        position.y + 50,
        Math.max(position.y - 50, clientY)
      );

      setPosition({ x: newX, y: newY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [position]);

  const divStyle = {
    width: "50px",
    height: "50px",
    backgroundColor: "blue",
    position: "absolute",
    transform: `translate(${position.x / 35}%, ${position.y / 35}%)`,
    transition: "transform 0.2s",
  };

  const targetTitleReff = useRef(null);
  const array = ["Développeur", "Front-end", "Créatif", "Passionné"];

  let wordIndex = 0;
  let letterIndex = 0;

  // Identifiant de l'intervalle utilisé pour la mise à jour du texte
  let intervalId;

  useEffect(() => {
    // Fonction qui crée une nouvelle lettre dans le titre
    const createLetter = () => {
      const letter = document.createElement("span");
      targetTitleReff.current.appendChild(letter);
      letter.textContent = array[wordIndex][letterIndex];
    };

    // Fonction qui met à jour le texte avec la lettre courante du mot courant
    const updateText = () => {
      if (letterIndex < array[wordIndex].length) {
        createLetter();
        letterIndex++;
      } else {
        // Si toutes les lettres ont été ajoutées, arrêtez de mettre à jour le texte
        clearInterval(intervalId);
        setTimeout(() => {
          eraseText();
        }, 1000);
      }
    };

    // Fonction qui efface le texte lettre par lettre
    const eraseText = () => {
      const text = targetTitleReff.current;
      if (text.childNodes.length === 0) {
        wordIndex = (wordIndex + 1) % array.length;
        letterIndex = 0;
        intervalId = setInterval(updateText, 200);
      } else {
        text.removeChild(text.lastChild);
        setTimeout(() => {
          eraseText();
        }, 50);
      }
    };

    // Commencez à mettre à jour le texte dès que le composant est monté
    intervalId = setInterval(updateText, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <main className="article-acceuil" id="acceuil">
      <article className=" div-titles">
        <h1 className="target-title">
          <span>&#123;</span> Je suis <span>&#125;</span>
        </h1>

        <h1 ref={targetTitleReff} className="target-title-second"></h1>
        <p className="text-acceuil">
          Moi c'est Bob, un passionné de développement et de graphisme,
          spécialisé en React et Node.Js. Mon objectif est de créer des
          interfaces web interactives et esthétiques en utilisant les dernières
          technologies. Je suis constamment à l'affût des tendances et des
          meilleures pratiques pour vous offrir une expérience utilisateur
          exceptionnelle.
        </p>
        <p id="text-code">+ 1200h de code 🚀</p>
      </article>

      <div className="cercle-1">
        <div className="cercle-2">
          <div className="cercle-3">
            <div className="cercle-4">
              <img src={saturn} alt="" className="cosmonaute" />
            </div>
          </div>
        </div>
      </div>

      <div style={divStyle} id="planet" className="planet1"></div>
      <div style={divStyle} id="planet" className="planet2"></div>
      <div style={divStyle} id="planet" className="planet3"></div>
      <div style={divStyle} id="planet" className="planet4"></div>

      <div id="diamond" className="diamond1"></div>
      <div id="diamond" className="diamond2"></div>
      <div id="diamond" className="diamond3"></div>
      <div id="diamond" className="diamond4"></div>
      <div id="diamond" className="diamond5"></div>
      <div id="diamond" className="diamond6"></div>
      <div id="diamond" className="diamond7"></div>
      <div id="diamond" className="diamond8"></div>
      <div id="diamond" className="diamond9"></div>
      <div id="diamond" className="diamond10"></div>
      <div id="diamond" className="diamond11"></div>
      <div id="diamond" className="diamond12"></div>
    </main>
  );
};

export default Acceuil;
