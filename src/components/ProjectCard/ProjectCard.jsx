import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  const { title, description, location, status, image } = project;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} loading="lazy" />
        <span
          className={`${styles.status} ${
            status === "En cours" ? styles.inProgress : styles.completed
          }`}
        >
          {status}
        </span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.meta}>
          <span className={styles.location}>{location}</span>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
