import styles from "./Section.module.css";
import sectionImage from "../../../assets/images/akwada.jpg";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Illustration */}
        <div className={styles.visual}>
          <img
            src={sectionImage}
            alt="Actions communautaires de l’ONG AKWADA"
          />
        </div>
        {/* Texte */}
        <div className={styles.content}>
          <span className={styles.kicker}>Qui sommes-nous</span>

          <h2 className={styles.title}>
            Une ONG engagée pour le développement humain et culturel
            <br />
            dans le Mayo-Kebbi Est
          </h2>

          <p className={styles.description}>
            L’ONG <strong>AKWADA</strong> œuvre depuis plusieurs années aux côtés
            des communautés locales du Mayo-Kebbi Est, au Tchad, pour renforcer
            les capacités humaines, promouvoir l’éducation, soutenir le
            développement communautaire et valoriser la richesse culturelle
            locale.
          </p>

          <p className={styles.description}>
            À travers des actions concrètes, inclusives et durables, AKWADA
            accompagne les populations dans la construction de solutions
            adaptées à leurs réalités, en plaçant l’humain, la culture et la
            transmission des savoirs au cœur de son approche.
          </p>

          <div className={styles.actions}>
            <Link to="/about" className={styles.primaryBtn}>
              En savoir plus
            </Link>
            <Link to="/projects" className={styles.secondaryBtn}>
              Nos projets
            </Link>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Section;
