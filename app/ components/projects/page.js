import React from "react";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Thankful Thoughts",
    description:
      "ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
    image: "/project-1.png",
    github: "https://github.com/hqasmei/thankful-thoughts",
    link: "https://thankfulthoughts.io/",
  },
  {
    name: "PlatoIO",
    description: "PlatoIO is a to do list app that built using the PERN stack.",
    image: "/platoio.png",
    github: "https://github.com/hqasmei/platoio",
    link: "https://platoio.com/register",
  },
  {
    name: "Kator Family Photos",
    description:
      "Kator Family Photos is a photos and video digitization service in the LA area.",
    image: "/familyphotos.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects">
      <h1 className="projects__heading">Projects</h1>

      <div className="projects__list">
        {projects.map((project, idx) => (
          <div key={idx} className="project">
            <div className="project__image-container">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  className="project__image"
                  src={project.image}
                  alt={project.name}
                />
              </a>
            </div>
            <div className="project__content">
              <h2 className="project__title">{project.name}</h2>
              <p className="project__description">{project.description}</p>
              <div className="project__buttons">
                <a
                  className="project__button project__button--github"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub className="project__icon" />
                  View Code
                </a>
                <a
                  className="project__button project__button--link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsArrowUpRightSquare className="project__icon" />
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

