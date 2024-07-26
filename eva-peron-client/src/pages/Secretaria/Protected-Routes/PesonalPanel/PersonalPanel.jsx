import React, { useState, useEffect } from 'react'
import styles from './PersonalPanel.module.css';
import { Link } from 'react-router-dom';
import { SecretariaNavBar } from '../SecretariaPanel/SecretariaNavBar/SecretariaNavBar';
import { useLinkScroll } from '../../../../hooks/useLinkScroll';
import { useSecretariaAuth } from '../../../../context/SecretariaContext/SecretariaContext';


export const PersonalPanel = () => {

  const [isLoaded, setIsLoaded] = useState();
  const { handleLinkClick } = useLinkScroll();
  const { usuario } = useSecretariaAuth();


  useEffect(() => {
    const timer = setTimeout(() => {
        setIsLoaded(true);
    }, 50);

    // Limpieza del timer cuando el componente se desmonta
    return () => clearTimeout(timer);
}, []);

  return (
    <>
      <SecretariaNavBar />
      <div className={isLoaded ? styles.mainContainer : styles.unloaded}>
      <h2 className={styles.tituloPanel}>PERSONAL DOCENTE</h2>
      <div className={styles.divider}></div>
        <div className={styles.opcionesContainer}>
          <div className={styles.opcionContainer}>
            <Link to="solicitarLicencia" onClick={handleLinkClick}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <img className={styles.opcionImagen} src="/opcionFondo.png" alt="Licencias" />
              <h2 className={styles.opcionTitulo}>LICENCIAS</h2>
              <p className={styles.opcionDescripcion}>Solicitar una licencia</p>
            </Link>
          </div>

          <div className={styles.opcionContainer}>
            <Link to="datosPersonales">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <img className={styles.opcionImagen} src="/opcionFondo.png" alt="Datos Personales" />
              <h2 className={styles.opcionTitulo}>MIS DATOS</h2>
              <p className={styles.opcionDescripcion}>Visualizar tus datos personales</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}