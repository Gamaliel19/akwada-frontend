import { useParams, Link } from "react-router-dom";
import styles from "./NewsDetail.module.css";
import { newsData } from "../../utils/mockData";

function NewsDetail() {
  const { id } = useParams();
  const article = newsData.find((item) => item.id == id);

  if (!article) {
    return (
      <section className={styles.notFound}>
        <h2>Article introuvable</h2>
        <Link to="/news">← Retour aux actualités</Link>
      </section>
    );
  }

  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.date}>{article?.date}</span>
          <h1 className={styles.title}>{article.title}</h1>
        </header>

        <div className={styles.imageWrapper}>
          <img src={article.image} alt={article.title} />
        </div>

        <div className={styles.content}>
          {/* On vérifie si content est une chaîne de caractères */}
          {typeof article.content === 'string' ? (
            // On divise le texte en fonction des retours à la ligne et on boucle
            article.content.split('\n').filter(p => p.trim() !== "").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          ) : Array.isArray(article.content) ? (
            // Si c'est déjà un tableau, on garde le comportement normal
            article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          ) : (
            <p>Aucun contenu disponible.</p>
          )}
        </div>

        <footer className={styles.footer}>
          <Link to="/news" className={styles.backLink}>
            ← Retour aux actualités
          </Link>
        </footer>
      </div>
    </article>
  );
}

export default NewsDetail;
