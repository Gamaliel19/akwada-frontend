import styles from "./Footer.module.css";
import logoAkwada from "../../assets/images/logoAkwada.jpg";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Identité */}
        <div className={styles.brand}>
          <img
            src={logoAkwada}
            alt="Logo ONG AKWADA"
            className={styles.logo}
          />
          <p className={styles.description}>
            AKWADA est une organisation engagée pour la formation,
            le développement communautaire et la promotion de la culture
            dans le Mayo-Kebbi Est, au Tchad.
          </p>

          {/* Réseaux sociaux */}
          <div className={styles.socials}>
            <a
              href="#"
              aria-label="Facebook AKWADA"
              title="Facebook"
              className={styles.socialLink}
            >
              <svg viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2v-3h2V9.5c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12z"/>
              </svg>
            </a>

            <a
              href="#"
              aria-label="X Twitter AKWADA"
              title="X (Twitter)"
              className={styles.socialLink}
            >
              <svg viewBox="0 0 24 24">
                <path d="M18.9 2H22l-6.8 7.8L23 22h-6.6l-5.1-6.7L5.6 22H2.4l7.3-8.3L1 2h6.8l4.6 6L18.9 2z"/>
              </svg>
            </a>

            <a
              href="#"
              aria-label="LinkedIn AKWADA"
              title="LinkedIn"
              className={styles.socialLink}
            >
              <svg viewBox="0 0 24 24">
                <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 8.98h4v12H3zM9 8.98h3.8v1.6h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6v6.4h-4v-5.7c0-1.4 0-3.1-2-3.1-2 0-2.3 1.5-2.3 3v5.8H9z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className={styles.links}>
          <h4>Navigation</h4>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/interventions">Domaines</a></li>
            <li><a href="/projects">Projets</a></li>
            <li><a href="/news">Actualités</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.contact}>
          <h4>Contact</h4>
          <p>Bongor, Mayo-Kebbi Est – Tchad</p>
          <p>Email : contact@akwada.org</p>
          <p>Tél : +235 00 00 00 00</p>
        </div>
      </div>

      <div className={styles.bottom}>
        © {year} ONG AKWADA — Tous droits réservés
      </div>
    </footer>
  );
};

export default Footer;
