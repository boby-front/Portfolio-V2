import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ConstForm from "../components/ContactForm";
import ContactMe from "../components/ContactMe";

const Contacts = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <footer className="main-contacts">
      <motion.h1
        ref={ref}
        initial={{ x: -100, y: -100, opacity: 0 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 1.5, type: "spring", stiffness: 80 }}
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
