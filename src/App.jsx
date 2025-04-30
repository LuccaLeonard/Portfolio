import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experiences from "./components/Experiences";

function App() {
  return (
    <div>
      <div className="absolute top-0 z-[-2] h-screen w-full bg-neutral-950 
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Navbar />
      <Home />
      <About />
      <Technologies />
      <Experiences />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
