import styles from "./News.module.css";
import NewsCard from "../../components/NewsCard/NewsCard";
import { newsData } from "../../utils/mockData";

function News() {
  return (
    <section className={styles.newsPage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Actualités</h1>
          <p>
            Suivez les actions, projets et initiatives de l’ONG AKWADA
            sur le terrain.
          </p>
        </header>

        <div className={styles.grid}>
          {newsData.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;
