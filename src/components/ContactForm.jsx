import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";

const ConstForm = () => {
  const { mode } = useSelector((state) => state.sunMode);

  const [sendMessage, setSendMessage] = useState(false);
  const [messageText, setMessageText] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_yw1wcxd",
        "template_e3r6adr",
        form.current,
        "NqEDSuzQVH8z6hHvS"
      )
      .then(
        (result) => {
          // console.log(result.text);
          setSendMessage(true);
          setMessageText("Message envoyé !");
          form.current.reset();

          setTimeout(() => {
            setSendMessage(false);
            setMessageText("");
          }, 3000);
        },
        (error) => {
          // console.log(error.text);
          formMess.innerHTML =
            "<p class='error'>Une erreur s'est produite, veuillez réessayer</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
            setSendMessage(false);
          }, 1500);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className={`form-contacts ${!mode ? "sun-theme-border" : ""}`}
    >
      <label className={!mode ? "sun-theme-text" : ""}>Nom :</label>
      <input
        type="text"
        name="name"
        required
        autoComplete="off"
        id="name"
        className={!mode ? "sun-theme-text" : ""}
      />
      <label className={!mode ? "sun-theme-text" : ""}>Email :</label>
      <input
        type="email"
        name="email"
        required
        autoComplete="off"
        id="email"
        className={!mode ? "sun-theme-text" : ""}
      />
      <label className={!mode ? "sun-theme-text" : ""}>Message :</label>
      <textarea
        name="message"
        id="message"
        className={!mode ? "sun-theme-text" : ""}
      />
      <motion.button
        transition={{ type: "spring" }}
        whileHover={{ scale: 1.2 }}
        type="submit"
        id="send"
      >
        Envoyer
      </motion.button>
      {sendMessage && (
        <motion.div
          initial={{ x: 1200, opacity: 0 }} // Position initiale en dehors de la vue (droite)
          animate={{ x: "-50%", opacity: 1 }} // Position finale et opacité pour apparaître
          exit={{ x: 1200, opacity: 0 }} // Sortie vers la gauche pour masquer
          transition={{ type: "spring", stiffness: 80 }}
          className="form-message"
        >
          {messageText}
        </motion.div>
      )}
    </form>
  );
};

export default ConstForm;
