import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactMe = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ x: 200, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : {}}
      transition={{ type: "spring", stiffness: 70 }}
      className="contact-me"
    >
      <div className="info-contact">
        <i class="fa-solid fa-phone"></i> <p>06.75.53.36.46</p>
      </div>
      <a href="mailto:adresse@example.com" className="info-contact">
        <i class="fa-solid fa-envelope"></i> delanglebob38@gmail.com
      </a>
      <div className="info-contact">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/bob-delangle-520ba5252"
        >
          <i class="fa-brands fa-linkedin"></i>
          Delangle Bob
        </a>
      </div>
    </motion.div>
  );
};

export default ContactMe;
