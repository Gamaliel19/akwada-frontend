import React from "react";
import styles from "./DomainsSection.module.css";
import { Link } from "react-router-dom";

const domains = [
  {
    title: "Formation",
    description:
      "Renforcement des capacités humaines à travers l’éducation, la formation professionnelle et l’accompagnement des jeunes et des adultes.",
    icon: "🎓",
  },
  {
    title: "Développement communautaire",
    description:
      "Appui aux initiatives locales, autonomisation des communautés et promotion de solutions durables adaptées aux réalités locales.",
    icon: "🤝",
  },
  {
    title: "Promotion de la culture",
    description:
      "Valorisation du patrimoine culturel local, transmission des savoirs traditionnels et renforcement de l’identité culturelle.",
    icon: "🌍",
  },
];

const DomainsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.kicker}>Nos domaines d’intervention</span>
          <h2 className={styles.title}>
            Des actions structurées pour un impact durable
          </h2>
          <p className={styles.intro}>
            AKWADA intervient à travers des domaines complémentaires afin de
            répondre aux besoins essentiels des communautés du Mayo-Kebbi Est.
          </p>
        </header>

        <div className={styles.grid}>
          {domains.map((domain, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{domain.icon}</div>
              <h3>{domain.title}</h3>
              <p>{domain.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <Link to="/interventions" className={styles.primaryBtn}>
            Découvrir nos domaines
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
