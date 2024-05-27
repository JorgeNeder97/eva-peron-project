import React from 'react'
import styles from './RectoriaPanel.module.css';
import { NavBar } from '../../../../components/NavBar/NavBar';
import { Link } from 'react-router-dom';


export const RectoriaPanel = () => {
  return (
    <>
      <NavBar />
      <div className={styles.propuestasContainer}>
        <div className={styles.pctbiContainer}>
          <Link to="">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img className={styles.pctbiImagen} src="propuesta-PCTBI.png" alt="PCTBI" />
            <h2 className={styles.pctbiTitulo}>P.C.T.B.I.</h2>
            <p className={styles.pctbiDescripcion}>Perito Comercial Especializado en Técnicas Bancarias e Impositivas</p>
          </Link>
        </div>
        <div className={styles.formacionContainer}>
          <Link to="">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img className={styles.formacionImagen} src="propuesta-FP.png" alt="FP" />
            <h2 className={styles.formacionTitulo}>F.P.</h2>
            <p className={styles.formacionDescripcion}>Formación Profesional</p>
          </Link>
        </div>
      </div>
    </>
  )
}
