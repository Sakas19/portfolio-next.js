import React from "react";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import Image from 'next/image'

const projects = [
  {
    name: "First react project",
    description:
      "This is the first assignment that we done with vite",
    image: "/project-1.png",
    github: "https://github.com/Sakas19/project1",
    link: "/",
  },
  {
    name: "Seceond react project",
    description: "PlatoIO is a to do list app that built using the PERN stack.",
    image: "/",
    github: "https://github.com/Sakas19/Assignment-2-React",
    link: "/",
  },
  {
    name: "Third react project",
    description:
      "This is my third project as part of my assigmnet for reaxt course",
    image: "/",
    github: "https://github.com/Sakas19/cocktail-mocktail",
    link: "cocktail-mocktail-1d19.vercel.app"
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

