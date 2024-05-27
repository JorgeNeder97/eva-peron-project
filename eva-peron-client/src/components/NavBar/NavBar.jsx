import React, { useEffect, useRef, useState } from 'react'
import styles from './NavBar.module.css'
import Logo from '../../assets/img/Logo.png'
import { Link } from 'react-router-dom'


export const NavBar = () => {

  const [fix, setFix] = useState(false);

  const logoContainer = useRef(null);


  const setFixed = () => {
    window.scrollY > 189 ? setFix(true) : setFix(false);
  }

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  window.addEventListener('scroll', setFixed);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.logoContainer} ref={logoContainer}>
        <Link to="/" onClick={handleLinkClick}><img src={Logo} className={styles.logo} alt="Escuela Eva Perón - Logotipo" /></Link>
      </div>
      <div className={styles.linksContainerContainer}>
        <div className={fix ? styles.scrolled : styles.linksContainer}>
          <Link to="/" className={styles.links} onClick={handleLinkClick}>INICIO</Link>
          <Link to="/institucional" className={styles.links} onClick={handleLinkClick}>INSTITUCIONAL</Link>
          <Link to="/noticias" className={styles.links} onClick={handleLinkClick}>NOTICIAS</Link>
          <Link to ="/rectoria" className={styles.links} onClick={handleLinkClick}>RECTORIA</Link>
          <Link to="/secretaria" className={styles.links} onClick={handleLinkClick}>SECRETARIA</Link>
          <Link to="/alumnos" className={styles.links} onClick={handleLinkClick}>ALUMNOS</Link>
          <Link to="/asesoria-pedagogica" className={styles.links} onClick={handleLinkClick}>ASESORIA PEDAGOGICA</Link>
        </div>
      </div>
    </div>
  )
}
