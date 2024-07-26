import React, { useRef, useState } from 'react'
import styles from './NavBar.module.css'
import Logo from '../../assets/img/Logo.png'
import { Link } from 'react-router-dom'
import { useLinkScroll } from '../../hooks/useLinkScroll'


export const NavBar = () => {

  const logoContainer = useRef(null);

  const { handleLinkClick } = useLinkScroll();

  return (
    <>
    <div className={styles.mainContainer}>
      <div className={styles.logoContainer} ref={logoContainer}>
        <Link to="/" onClick={handleLinkClick}><img src={Logo} className={styles.logo} alt="Escuela Eva Perón - Logotipo" /></Link>
      </div>
    </div>
      <div className={styles.linksContainerContainer}>
        <div className={styles.linksContainer}>
          <Link to="/" className={styles.links} onClick={handleLinkClick}>INICIO</Link>
          <Link to="/institucional" className={styles.links} onClick={handleLinkClick}>INSTITUCIONAL</Link>
          <Link to="/noticias" className={styles.links} onClick={handleLinkClick}>NOTICIAS</Link>
          <Link to ="/rectoria" className={styles.links} onClick={handleLinkClick}>RECTORIA</Link>
          <Link to="/secretaria" className={styles.links} onClick={handleLinkClick}>SECRETARIA</Link>
          <Link to="/alumnos" className={styles.links} onClick={handleLinkClick}>ALUMNOS</Link>
          <Link to="/asesoria-pedagogica" className={styles.links} onClick={handleLinkClick}>ASESORIA PEDAGOGICA</Link>
        </div>
      </div>
    </>
  )
}
