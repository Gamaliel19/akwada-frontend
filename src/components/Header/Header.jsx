import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.css";
import logoAkwada from "../../assets/images/logoAkwada.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* Logo */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <img src={logoAkwada} alt="AKWADA" />
          </div>
          <span className={styles.brandName}>AKWADA</span>
        </div>


        {/* Navigation desktop */}
        <nav className={styles.navDesktop}>
          <NavLink to="/" end>Accueil</NavLink>
          <NavLink to="/about">À propos</NavLink>
          <NavLink to="/interventions">Domaines</NavLink>
          <NavLink to="/projects">Projets</NavLink>
          <NavLink to="/news">Actualités</NavLink>
          <NavLink to="/contact" className={styles.cta}>
            Contact
          </NavLink>
        </nav>

        {/* Burger mobile */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-label="Menu principal"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Menu mobile */}
      <nav className={`${styles.navMobile} ${menuOpen ? styles.open : ""}`}>
        <NavLink to="/" end onClick={closeMenu}>Accueil</NavLink>
        <NavLink to="/about" onClick={closeMenu}>À propos</NavLink>
        <NavLink to="/interventions" onClick={closeMenu}>Domaines</NavLink>
        <NavLink to="/projects" onClick={closeMenu}>Projets</NavLink>
        <NavLink to="/news" onClick={closeMenu}>Actualités</NavLink>
        <NavLink to="/contact" onClick={closeMenu} className={styles.ctaMobile}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
