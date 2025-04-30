import { motion, AnimatePresence } from "motion/react";
import React from "react";

const MenuResponsivo = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100  }}
          className="absolute top-10 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-[rgba(0,0,0,0.900)] backdrop-blur-md text-orange-400 py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#technologies">Tecnologias</a></li>
              <li><a href="#experiences">Experiências</a></li>
              <li><a href="#projects">Projetos</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MenuResponsivo;
