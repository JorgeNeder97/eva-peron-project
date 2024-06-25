import React, { useEffect, useRef, useState } from 'react';
import styles from './SecretariaNavBar.module.css';
import Logo from '../../../../../assets/logoSecretaria.png';
import { logoutRequest } from '../../../../../api/login';
import { Link, Navigate } from 'react-router-dom';
import { useSecretariaAuth } from '../../../../../context/SecretariaContext/SecretariaContext';

export const SecretariaNavBar = () => {

  const [fix, setFix] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);

  const logoContainer = useRef(null);

  const { usuario, loading } = useSecretariaAuth();

  const setFixed = () => {
    window.scrollY > 200 ? setFix(true) : setFix(false);
  }

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const handleCerrarSesion = async () => {
    try {
      const response = await logoutRequest();
      setLoggedOut(true);
    } catch (error) {
      console.log(error);
    }
  }

  window.addEventListener('scroll', setFixed);

  if (loggedOut) return <Navigate to="/" />;
  if (loading) return <h2>Cargando...</h2>

  return (
    <div className={styles.mainContainer}>
      <div className={styles.logoContainer} ref={logoContainer}>
        <Link to="/secretaria/home"><img src={Logo} className={styles.logo} alt="Secretaría Eva Perón - Logotipo" /></Link>
      </div>
      <div className={styles.linksContainerContainer}>
        <div className={fix ? styles.scrolled : styles.linksContainer}>
          <Link to="/" className={styles.links} onClick={handleLinkClick}>VOLVER AL INICIO</Link>
          {usuario.sexo_id === 2 ?
            <h2 className={styles.bienvenido}>BIENVENIDA {usuario.nombre ? usuario.nombre.toUpperCase() : ""}</h2> :
            <h2 className={styles.bienvenido}>BIENVENIDO {usuario.nombre ? usuario.nombre.toUpperCase() : ""}</h2>}
          <Link className={styles.links} onClick={handleCerrarSesion}>CERRAR SESIÓN</Link>
        </div>
      </div>
    </div>
  )
}
