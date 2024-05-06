import React, { useEffect, useRef, useState } from 'react'
import styles from './NavBar.module.css'
import Logo from '../../assets/img/Logo.png'
import { Link } from 'react-router-dom'


export const NavBar = () => {

  const [fix, setFix] = useState(false);

  const logoContainer = useRef(null);


  const setFixed = () => {
    window.scrollY > 200 ? setFix(true) : setFix(false);
  }

  console.log(window.scrollY);


  window.addEventListener('scroll', setFixed);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.logoContainer} ref={logoContainer}>
        <Link to="/"><img src={Logo} className={styles.logo} alt="Escuela Eva Perón - Logotipo" /></Link>
      </div>
      <div className={styles.linksContainerContainer}>
        <div className={fix ? styles.scrolled : styles.linksContainer}>
          <Link to="/" className={styles.links}>INICIO</Link>
          <Link to="/institucional" className={styles.links}>INSTITUCIONAL</Link>
          <Link to="/secretaria" className={styles.links}>SECRETARIA</Link>
          <Link to="/alumnos" className={styles.links}>ALUMNOS</Link>
          <Link to="/asesoria-pedagogica" className={styles.links}>ASESORIA PEDAGOGICA</Link>
        </div>
      </div>
    </div>
  )
}
