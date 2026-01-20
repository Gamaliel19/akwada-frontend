import React from "react";
import styles from "./Domains.module.css";
import DomainsSection from "../../components/common/DomainsSection/DomainsSection";

const Domains = () => {
  return (
    <main className={styles.page}>
      {/* Intro page */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Nos domaines d’intervention</h1>
          <p>
            Les actions de l’ONG AKWADA s’articulent autour de domaines
            complémentaires, conçus pour répondre durablement aux besoins des
            communautés du Mayo-Kebbi Est.
          </p>
        </div>
      </section>

      {/* Réutilisation exacte de la section Home */}
      <DomainsSection />

      {/* Détails par domaine */}
      <section className={styles.details}>
        <div className={styles.container}>
          <article className={styles.domain}>
            <h2>Formation</h2>
            <p>
              AKWADA place la formation au cœur de son action afin de renforcer
              les capacités humaines et favoriser l’autonomie des individus.
              L’ONG intervient dans l’éducation de base, la formation
              professionnelle et l’accompagnement des jeunes et des femmes.
            </p>
          </article>

          <article className={styles.domain}>
            <h2>Développement communautaire</h2>
            <p>
              Le développement communautaire repose sur une approche participative
              visant à soutenir les initiatives locales, améliorer les conditions
              de vie et renforcer la résilience des communautés face aux défis
              socio-économiques.
            </p>
          </article>

          <article className={styles.domain}>
            <h2>Promotion de la culture</h2>
            <p>
              La culture est un levier essentiel du développement durable. AKWADA
              œuvre à la valorisation du patrimoine culturel local, à la
              transmission des savoirs traditionnels et au renforcement de
              l’identité culturelle des communautés.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Domains;
