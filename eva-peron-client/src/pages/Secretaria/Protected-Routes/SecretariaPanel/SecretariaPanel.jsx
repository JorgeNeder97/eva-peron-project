import React, { useState, useEffect } from 'react'
import styles from './SecretariaPanel.module.css';
import { Link } from 'react-router-dom';
import { SecretariaNavBar } from './SecretariaNavBar/SecretariaNavBar';
import { useLinkScroll } from '../../../../hooks/useLinkScroll';

export const SecretariaPanel = () => {

    const { handleLinkClick } = useLinkScroll();
    const [isLoaded, setIsLoaded] = useState();

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
            <h2 className={styles.tituloPanel}>PANEL FUNCIONAL</h2>
            <div className={styles.divider}></div>
                <div className={styles.opcionesContainer}>

                    <div className={styles.opcionContainer}>
                        <Link to="../gestionNoticias" onClick={handleLinkClick}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <img className={styles.opcionImagen} src="/opcionFondo.png" alt="Gestión de Usuarios" />
                            <h2 className={styles.opcionTitulo}>NOTICIAS</h2>
                            <p className={styles.opcionDescripcion}>Crear, modificar o eliminar una noticia</p>
                        </Link>
                    </div>

                    <div className={styles.opcionContainer}>
                        <Link to="../gestionCargos" onClick={handleLinkClick}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <img className={styles.opcionImagen} src="/opcionFondo.png" alt="Gestión de Usuarios" />
                            <h2 className={styles.opcionTitulo}>CARGOS</h2>
                            <p className={styles.opcionDescripcion}>Crear, modificar o eliminar un cargo</p>
                        </Link>
                    </div>

                    <div className={styles.opcionContainer}>
                        <Link to="../gestionDocentes" onClick={handleLinkClick}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <img className={styles.opcionImagen} src="/opcionFondo.png" alt="Gestión de Usuarios" />
                            <h2 className={styles.opcionTitulo}>DOCENTES</h2>
                            <p className={styles.opcionDescripcion}>Alta, modificación y baja de docentes, licencias y planta funcional</p>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

