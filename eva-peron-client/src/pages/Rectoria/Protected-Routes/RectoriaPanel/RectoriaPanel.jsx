import React from 'react'
import styles from './RectoriaPanel.module.css';
import { Link } from 'react-router-dom';
import { useSlowLoad } from '../../../../hooks/useSlowLoad';
import { NavBarRectoria } from './NavBarRectoria/NavBarRectoria';
import { useLinkScroll } from '../../../../hooks/useLinkScroll';


export const RectoriaPanel = () => {

  const { isLoaded } = useSlowLoad();
  const { handleLinkClick } = useLinkScroll();


  return (
    <>
      <NavBarRectoria />
      <h2 className={styles.tituloPanel}>PANEL DE RECTORÍA</h2>
      <div className={styles.divider}></div>
      <div className={isLoaded ? styles.mainContainer : styles.unloaded}>
        <div className={styles.opcionesContainer}>
          <div className={styles.gestionUsuariosContainer}>
            <Link to="../gestionUsuarios" onClick={handleLinkClick}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <img className={styles.gestionUsuariosImagen} src="/gestionUsuarios.jpg" alt="Gestión de Usuarios" />
              <h2 className={styles.gestionUsuariosTitulo}>GESTIONAR USUARIOS</h2>
              <p className={styles.gestionUsuariosDescripcion}>Crear, modificar o eliminar un usuario</p>
            </Link>
          </div>

          <div className={styles.plantaFuncionalContainer}>
            <Link to="">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <img className={styles.plantaFuncionalImagen} src="/plantaFuncional.jpg" alt="Planta Funcional" />
              <h2 className={styles.plantaFuncionalTitulo}>PLANTA FUNCIONAL</h2>
              <p className={styles.plantaFuncionalDescripcion}>Exportar la planta funcional al dia de la fecha</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}