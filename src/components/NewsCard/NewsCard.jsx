import { Link } from "react-router-dom";
import styles from "./NewsCard.module.css";

function NewsCard({ id, title, excerpt, image, date }) {
  return (
    <article className={styles.card}>
      <Link to={`/news/${id}`} className={styles.imageWrapper}>
        <img src={image} alt={title} />
      </Link>

      <div className={styles.content}>
        <time className={styles.date}>{date}</time>

        <h3 className={styles.title}>
          <Link to={`/news/${id}`}>{title}</Link>
        </h3>

        <p className={styles.excerpt}>{excerpt}</p>

        <Link to={`/news/${id}`} className={styles.readMore}>
          Lire la suite →
        </Link>
      </div>
    </article>
  );
}

export default NewsCard;
