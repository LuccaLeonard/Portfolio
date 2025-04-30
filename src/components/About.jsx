import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../constants/variants";

function About() {
  return (
    <div
      id="about"
      className="px-6 md:px-16 flex justify-center min-h-screen items-center relative top-0 z-[-2] h-screen  bg-neutral-950 
      bg-[radial-gradient(ellipse_80%_80%_at_50%_130%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
    >
      <div
        className="flex max-w-7xl flex-wrap gap-6 md:gap-10 items-center justify-center absolute"
      >
        <motion.h1
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl font-light text-white md:text-5xl">
          Sobre mim
        </motion.h1>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex w-full flex-wrap items-center transition-all justify-center">
          <p className="text-white sm:text-lg md:text-lg text-center leading-relaxed max-w-4xl">
            Meu nome é Lucca, tenho 21 anos e sou apaixonado por tecnologia e
            programação. Estou cursando o 4º semestre de Análise e
            Desenvolvimento de Sistemas no Centro Universitário Senac. Tenho
            experiência prática em projetos de desenvolvimento web, utilizando
            metodologias ágeis, o que me proporcionou uma sólida compreensão de
            processos colaborativos e dinâmicos. Sou movido por novos desafios e
            estou sempre buscando evoluir como profissional, contribuindo com
            minhas habilidades e experiências em cada projeto que participo.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
