import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../constants/variants";

function Home() {
  return (

    <div
      
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    > 
      
      <div className="text-center z-10 px-4 ">
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-5xl font-bold md:text-7xl mb-6">LUCCA LEONARDO</motion.h1>

        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-1xl mb-8 max-w-lg mx-auto">
           
          <TypeAnimation
            sequence={[
              "Desenvolvedor Front-end que transforma ideias em realidade!",
              2500, 
              "Desenvolvedor Front-end que transforma sonhos em realidade!",
              2500,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "18px", display: "inline-block" }}
            repeat={Infinity}
          />
        </motion.p>
      </div>
    </div>
  );

}

export default Home;
