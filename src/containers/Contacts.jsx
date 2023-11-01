import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ConstForm from "../components/ContactForm";
import ContactMe from "../components/ContactMe";
import { useSelector } from "react-redux";

const Contacts = () => {
  const { mode } = useSelector((state) => state.sunMode);
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <footer
      className={`main-contacts bg-dark ${!mode ? "sun-theme-bg" : ""}`}
      id="contacts"
    >
      <motion.h1
        ref={ref}
        initial={{ x: -100, y: -100, opacity: 0 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 1.5, type: "spring", stiffness: 80 }}
        className={!mode ? "sun-theme-text" : ""}
      >
        <span className="number-title">04.</span> CONTACTEZ MOI
      </motion.h1>
      <div className="contact-group">
        <ContactMe />
        <ConstForm />
      </div>
    </footer>
  );
};

export default Contacts;
