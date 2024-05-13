import React, { useEffect, useRef, useState } from 'react'
import styles from './SecretariaNavBar.module.css'
import Logo from '../../assets/logoSecretaria.png'
import { Link } from 'react-router-dom'


export const SecretariaNavBar = () => {

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
        <Link to="/secretaria/home"><img src={Logo} className={styles.logo} alt="Secretaría Eva Perón - Logotipo" /></Link>
      </div>
      <div className={styles.linksContainerContainer}>
        <div className={fix ? styles.scrolled : styles.linksContainer}>
          <Link to="/secretaria/home" className={styles.links}>NOTICIAS</Link>
          <Link to="/secretaria/home" className={styles.links}>CARGOS</Link>
          <Link to="/secretaria/home" className={styles.links}>PLANTA FUNCIONAL</Link>
          <Link to="/secretaria/home" className={styles.links}>DOCENTES</Link>
          <Link to="/secretaria/home" className={styles.links}>LICENCIAS</Link>
        </div>
      </div>
    </div>
  )
}
