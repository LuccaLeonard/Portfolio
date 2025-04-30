import { motion } from "framer-motion";
import React from "react";
import { projectData } from "../constants";
import { fadeIn } from "../constants/variants";

function Projects() {
  return (
    <div
      id="projects"
      className="px-16 flex justify-center min-h-screen items-center relative top-0 h-screen bg-neutral-950 
      bg-[radial-gradient(ellipse_80%_80%_at_50%30%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
    >
      <div className="flex max-w-7xl flex-wrap gap-10 items-center justify-center">
        <motion.h1
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl font-light text-white md:text-5xl w-full text-center mb-8"
        >
          Projetos
        </motion.h1>
        <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {projectData.map((project) => (
            <a
              href={project.link}
              key={project.id}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-400"
            >
              <img
                src={project.image}
                className="w-full h-auto object-cover"
                alt={project.title}
              />

              <div className="flex flex-col gap-3 bg-gray-900 p-5 transition-colors duration-300 hover:bg-gray-800 flex-grow">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-slate-400"> {project.descricao}</p>
                <div className="flex gap-3 flex-wrap mt-auto">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-orange-400 rounded-xl text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
