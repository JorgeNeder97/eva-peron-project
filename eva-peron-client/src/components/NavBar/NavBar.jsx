import React from 'react'
import styles from './NavBar.module.css'
import Logo from '../../assets/img/Logo.png'
import { Link } from 'react-router-dom'


export const NavBar = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.logoContainer}>
        <Link to="/"><img src={Logo} className={styles.logo} alt="Escuela Eva Perón - Logotipo" /></Link>
      </div>
      <div className={styles.linksContainer}>
        <Link to="/" className={styles.links}>INICIO</Link>
        <Link className={styles.links}>INSTITUCIONAL</Link>
        <Link to="/secretaria" className={styles.links}>SECRETARIA</Link>
        <Link to="/alumnos" className={styles.links}>ALUMNOS</Link>
        <Link to="/asesoria-pedagogica" className={styles.links}>ASESORIA PEDAGOGICA</Link>
      </div>
    </div>
  )
}
