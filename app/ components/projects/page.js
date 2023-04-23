import React from "react";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import Image from 'next/image'
import styles from './Projects.module.css'

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
    image: "/project-2.png",
    github: "https://github.com/Sakas19/Assignment-2-React",
    link: "/",
  },
  {
    name: "Third react project",
    description:
      "This is my third project as part of my assigmnet for reaxt course",
    image: "/CandM.png",
    github: "https://github.com/Sakas19/cocktail-mocktail",
    link: "https://cocktail-mocktail-1d19.vercel.app/"
  },
   {name: "Fourth react project",
    description:
      "This is my fourth project as part of my assigmnet for reaxt course",
    image: "/Project-4.png",
    github: "/"
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h1 className={styles.heading}>Projects</h1>

      <div className={styles.list}>
        {projects.map((project, idx) => (
          <div key={idx} className={styles.project}>
            <div className={styles.imageContainer}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Image src={project.image} alt="" width={400} height={300} />
              </a>
            </div>
            <div className={styles.content}>
              <h2 className={styles.title}>{project.name}</h2>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.buttons}>
                <a
                  className={`${styles.button} ${styles.githubButton}`}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub className={styles.icon} />
                  View Code
                </a>
                <a
                  className={`${styles.button} ${styles.linkButton}`}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsArrowUpRightSquare className={styles.icon} />
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




