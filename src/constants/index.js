import projeto1 from "../assets/TaskManager.png";
import projeto2 from "../assets/Portifolio.png"

export const EXPERIENCE = [
  {
    ano: "2024 - Até o momento",
    titulo: "Desenvolvedor Front-End",
    empresa: "Freelancer",
    descricao:
      "Atuo como Desenvolvedor Front-End freelancer, criando interfaces responsivas e otimizadas para diferentes dispositivos.Desenvolvo landing pages, sites institucionais e interfaces de aplicações web utilizando tecnologias em alta no mercado.Trabalho focado na experiência do usuário(UX), performance e boas práticas de desenvolvimento.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "ReactJs",
      "Bootstrap",
      "TailWind",
    ],
  },
  {
    ano: "2024 - Até o momento",
    titulo: "Desenvolvedor Front-End Jr.",
    empresa: "Ben T.I",
    descricao:
      "Atuo como Desenvolvedor Front-End Jr. na Ben T.I, contribuindo para o desenvolvimento e manutenção de aplicações web escaláveis e modernas. Utilizo Angular com TypeScript para criar componentes reutilizáveis, implementar funcionalidades interativas e integrar APIs. Também aplico HTML e Bootstrap para garantir interfaces responsivas. Colaboro com a equipe de desenvolvimento seguindo metodologias ágeis e boas práticas de versionamento e organização de código.",
    technologies: ["JavaScript", "TypeScript", "HTML", "Angular", "Bootstrap"],
  },
  {
    ano: "2024 - Até o momento",
    titulo: "Estagiário em Análise de Sistemas",
    empresa: "Security Leaders - Conteúdo Editorial",
    descricao:
      "Como estagiário em Análise de Sistemas, auxilio na gestão e otimização de sites em WordPress utilizando o construtor Elementor, além de apoiar campanhas de marketing digital com RD Station Marketing e CRM. Realizo integrações e configurações com Google Analytics e Google Tag Manager para monitoramento de desempenho e conversões. Também colaboro com a equipe na organização de conteúdos e relatórios utilizando ferramentas do Office 365, contribuindo para o alinhamento entre áreas técnicas e de marketing.",
    technologies: [
      "WordPress",
      "RD Station Marketing e CRM",
      "Google Analytics",
      "Google Tag Manager",
      "Office 365",
    ],
  },
];

export const projectData = [
  {
    id: 1,
    image: projeto1,
    titulo: "Gerenciador de Tarefas",
    descricao:
      "Esse foi o meu primeiro projeto com React + TailWind, é basicamente um gerenciador de tarefas simples, mas que me proporcionou um bom conhecimento sobre useState, useEffect, Props, API e Routes!",
    link: "https://github.com/LuccaLeonard/TaskManager",
    technologies: ["ReactJs", "Tailwind"],
  },
  {
    id: 2,
    image: projeto2,
    titulo: "Meu Portfólio",
    descricao:
      "Este é meu portfólio pessoal desenvolvido com ReactJS e estilizado com TailwindCSS, onde apresento meus principais projetos, habilidades e formas de contato",
    link: "https://github.com/LuccaLeonard/Portfolio",
    technologies: ["ReactJs", "Tailwind"],
  },
];
