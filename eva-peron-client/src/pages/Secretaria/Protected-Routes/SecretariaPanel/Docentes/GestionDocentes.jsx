import React from 'react';
import styles from './GestionDocentes.module.css';
import { useSlowLoad } from '../../../../../hooks/useSlowLoad';
import { Link } from 'react-router-dom';
import { SecretariaNavBar } from '../SecretariaNavBar/SecretariaNavBar';
import { VolverAtrasButton } from '../../../../../components/VolverAtrasButton/VolverAtrasButton';
import { useLinkScroll } from '../../../../../hooks/useLinkScroll';


export const GestionDocentes = () => {

    const { isLoaded } = useSlowLoad();
    const { handleLinkClick } = useLinkScroll();



    return (
        <>
            <SecretariaNavBar />
            <div className={isLoaded ? styles.mainContainer : styles.unloaded}>
                <div className={styles.paginaHeader}>
                    <h2 className={styles.tituloPagina}>GESTION DE DOCENTES</h2>
                    <VolverAtrasButton url="/secretaria/home" />
                </div>
                <div className={styles.opcionesContainer}>

                    <Link to="altaDocente" onClick={handleLinkClick}>
                        <div className={styles.gestionDocentesContainer}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <h2 className={styles.gestionDocentesTitulo}>ALTA DOCENTE</h2>
                            <img className={styles.gestionDocentesDescripcion} src="/agregarUsuario.png" alt="Agregar Usuarios" />
                        </div>
                    </Link>

                    <Link to="modificarDocente" onClick={handleLinkClick}>
                        <div className={styles.gestionDocentesContainer}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <h2 className={styles.gestionDocentesTitulo}>MODIFICAR DOCENTE</h2>
                            <img className={styles.gestionDocentesDescripcion} src="/editarUsuario.png" alt="Editar Usuarios" />
                        </div>
                    </Link>

                    <Link to="bajaDocente" onClick={handleLinkClick}>
                        <div className={styles.gestionDocentesContainer}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <h2 className={styles.gestionDocentesTitulo}>BAJA DOCENTE</h2>
                            <img className={styles.gestionDocentesDescripcion} src="/eliminarUsuario.png" alt="Eliminar Usuarios" />
                        </div>
                    </Link>

                    <Link to="eliminarUsuarios" onClick={handleLinkClick}>
                        <div className={styles.gestionDocentesContainer}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <h2 className={styles.gestionDocentesTitulo}>LICENCIAS</h2>
                            <div className={styles.gestionDocentesIcono}><i className="fa-solid fa-file-invoice fa-2xl"></i></div>
                        </div>
                    </Link>

                    <Link to="eliminarUsuarios" onClick={handleLinkClick}>
                        <div className={styles.gestionDocentesContainer}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <h2 className={styles.gestionDocentesTitulo}>PLANTA FUNCIONAL</h2>
                            <div className={styles.gestionDocentesIcono}><i className="fa-solid fa-file-arrow-down fa-2xl"></i></div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
