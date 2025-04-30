import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../constants/variants";
import { EXPERIENCE } from "../constants";

function Experiences() {
  return (
    <div
      id="experiences"
      className="px-6 md:px-16 py-24 flex justify-center items-start relative z-[-2] bg-neutral-950 
      bg-[radial-gradient(ellipse_80%_80%_at_50%_70%,rgba(120,119,198,0.3),rgba(255,255,255,0))] overflow-x-hidden"
    >
      <div
        
        className="flex max-w-7xl flex-col gap-10 items-center justify-center w-full"
      >
        <motion.h1
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="ext-4xl font-light text-white md:text-5xl text-center">
          Experiências
        </motion.h1>
        <div className="w-full">
          {EXPERIENCE.map((experience, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                variants={fadeIn("right", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">
                  {experience.ano}
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}           
                className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold text-white">
                  {experience.titulo} -{" "}
                  <span className="text-sm text-orange-400">
                    {experience.empresa}
                  </span>
                </h6>
                <p className="mb-4 text-neutral-400">{experience.descricao}</p>
                <div className="flex flex-wrap">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-orange-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiences;
