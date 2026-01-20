import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projectsMock } from "../../utils/mockData";

const Projects = () => {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Nos projets et activités</h1>
          <p>
            AKWADA met en œuvre des projets concrets et inclusifs, conçus en
            collaboration avec les communautés locales afin de produire un
            impact durable dans le Mayo-Kebbi Est.
          </p>
        </div>
      </section>

      {/* Liste projets */}
      <section className={styles.projects}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {projectsMock.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
