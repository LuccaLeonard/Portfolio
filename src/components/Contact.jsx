import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { fadeIn } from "../constants/variants";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -20],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Contact() {
  return (
    <div
      id="contact"
      className="px-16 flex justify-center min-h-screen items-center relative top-0 z-0 h-screen bg-neutral-950 
        bg-[radial-gradient(ellipse_80%_80%_at_50%_70%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
    >
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col max-w-7xl gap-10 items-center justify-center absolute"
      >
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-light text-white md:text-5xl ">
            Contato
          </h1>
          <h2 className="text-2xl font-light mb-10 text-white md:text-2xl">
            Entre em contato comigo:
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10 max-w-3xl">
          <motion.div
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            variants={iconVariants(2.5)}
          >
            <a
              href="https://github.com/LuccaLeonard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-5xl text-white" />
            </a>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            variants={iconVariants(3)}
          >
            <a
              href="https://www.linkedin.com/in/lucca-leonardo-537593214/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-5xl text-blue-500" />
            </a>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            variants={iconVariants(4)}
          >
            <a
              href="mailto:luccaleonardo1002@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail className="text-5xl text-yellow-500" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
