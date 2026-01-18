import { NavLink } from "react-router-dom";
import styles from "./SectionPresentation.module.css";

const SectionPresentation = () => {
  return (
    <section className={`section ${styles.presentation}`}>
      <div className="container">
        <div className={styles.grid}>
          
          <div className={styles.text}>
            <h2>Qui sommes-nous ?</h2>

            <p>
              L’ONG AKWADA est une organisation à but non lucratif basée à Bongor,
              dans la province du Mayo-Kebbi Est au Tchad. Elle œuvre pour le
              renforcement des capacités humaines, le développement
              communautaire et la promotion de la culture locale.
            </p>

            <p>
              À travers une approche participative et inclusive, AKWADA
              accompagne les communautés locales afin de répondre durablement
              aux défis sociaux, éducatifs et culturels.
            </p>

            <NavLink to="/about" className={styles.link}>
              En savoir plus sur l’ONG →
            </NavLink>
          </div>

          <div className={styles.highlight}>
            <div className={styles.stat}>
              <strong>10+</strong>
              <span>Années d’engagement</span>
            </div>
            <div className={styles.stat}>
              <strong>3</strong>
              <span>Domaines d’intervention</span>
            </div>
            <div className={styles.stat}>
              <strong>1</strong>
              <span>Territoire d’ancrage</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SectionPresentation;
