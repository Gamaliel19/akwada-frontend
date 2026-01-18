import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/images/hero-akwada.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        {/* Contenu texte */}
        <div className={styles.content}>
          <h1>
            Agir pour la formation, le développement communautaire et la
            valorisation culturelle au <span>Mayo-Kebbi Est</span>
          </h1>

          <p>
            L’ONG AKWADA œuvre aux côtés des communautés locales pour renforcer
            les capacités humaines et valoriser la richesse culturelle du Tchad.
          </p>

          <div className={styles.actions}>
            <Link to="/about" className={styles.primaryBtn}>
              Découvrir l’ONG
            </Link>
            <Link to="/contact" className={styles.secondaryBtn}>
              Devenir partenaire
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className={styles.imageWrapper}>
          <img src={heroImage} alt="Actions communautaires de l'ONG AKWADA" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
