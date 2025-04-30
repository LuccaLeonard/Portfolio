import { useState, useEffect } from "react";
import MenuResponsivo from "./MenuResponsivo";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMobileMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba( 10, 10, 10, 0.8)] backdrop-blur-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex  justify-between items-center h-16">
          <div className="ml-10 text-lg font-bold">
            <a href="#home">
              {" "}
              Lucca |{" "}
              <span className="text-orange-400 text-lg font-bold"> Dev. </span>
            </a>
          </div>

          <div className="hidden xl:flex items-center gap-10 text-base mr-10 ml-120">
            <a
              href="#home"
              className=" transition-colors relative overflow-hidden hover:-translate-y-0.5 hover:text-orange-400"
            >
              Home
            </a>
            <a
              href="#about"
              className="transition-colors relative overflow-hidden hover:-translate-y-0.5 hover:text-orange-400"
            >
              Sobre
            </a>
            <a
              href="#technologies"
              className="transition-colors relative overflow-hidden hover:-translate-y-0.5 hover:text-orange-400"
            >
              Tecnologias
            </a>
            <a
              href="#experiences"
              className="transition-colors relative overflow-hidden hover:-translate-y-0.5 hover:text-orange-400"
            >
              Experiências
            </a>
            <a
              href="#projects"
              className="transition-colors relative overflow-hidden hover:-translate-y-0.5 hover:text-orange-400"
            >
              Projetos
            </a>
            <a
              href="#contact"
              className="transition-colors relative overflow-hidden hover:-translate-y-0.5 hover:text-orange-400"
            >
              Contato
            </a>
          </div>

          <div className="xl:hidden">
            <button onClick={toggleMobileMenu}>
              {open ? (
                <X className="text-white ml-30" />
                
              ) : (
                <Menu className="text-white ml-30" />
              )}
            </button>
            <button onClickOutside></button>
          </div>

          <div>
            <MenuResponsivo open={open} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
