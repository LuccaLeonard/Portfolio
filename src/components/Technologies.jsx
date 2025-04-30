import { motion } from "framer-motion";
import React from "react";
import { FaAngular, FaNodeJs } from "react-icons/fa";
import {
  RiJavascriptFill,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiBootstrap } from "react-icons/si";
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

const Technologies = () => {
  return (
    <div
      id="technologies"
      className="px-16 flex justify-center min-h-screen items-center relative top-0 z-[-2] h-screen bg-neutral-950 
    bg-[radial-gradient(ellipse_80%_80%_at_50%_30%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
    >
      <div className="flex flex-col max-w-7xl gap-10 items-center justify-center absolute">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h1 className="text-4xl font-light text-white md:text-5xl ">
            Tecnologias
          </h1>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-6 max-w-3xl"
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
          >
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
          >
            <FaAngular className="text-7xl text-red-500" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
          >
            <RiJavascriptFill className="text-7xl text-yellow-500" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
          >
            <FaNodeJs className="text-7xl text-green-500" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(6)}
          >
            <RiTailwindCssFill className="text-7xl text-cyan-500" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
          >
            <SiBootstrap className="text-7xl text-purple-600" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
