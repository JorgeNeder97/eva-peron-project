import React from 'react';
import styles from './GestionUsuarios.module.css';
import { useSlowLoad } from '../../../../../hooks/useSlowLoad';
import { Link } from 'react-router-dom';
import { NavBarRectoria } from '../NavBarRectoria/NavBarRectoria';
import { VolverAtrasButton } from '../../../../../components/VolverAtrasButton/VolverAtrasButton';
import { useLinkScroll } from '../../../../../hooks/useLinkScroll';


export const GestionUsuarios = () => {

    const { isLoaded } = useSlowLoad();
    const { handleLinkClick } = useLinkScroll();



    return (
        <>
            <NavBarRectoria />
            <div className={isLoaded ? styles.mainContainer : styles.unloaded}>
                <div className={styles.paginaHeader}>
                    <h2 className={styles.tituloPagina}>GESTION DE USUARIOS</h2>
                    <VolverAtrasButton url="/rectoria/home" />
                </div>
                <div className={styles.opcionesContainer}>

                    <Link to="nuevoUsuario" onClick={handleLinkClick}>
                        <div className={styles.gestionUsuariosContainer}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <h2 className={styles.gestionUsuariosTitulo}>CREAR USUARIO</h2>
                            <img className={styles.gestionUsuariosDescripcion} src="/agregarUsuario.png" alt="Agregar Usuarios" />
                        </div>
                    </Link>

                    <Link to="listarUsuarios" onClick={handleLinkClick}>
                        <div className={styles.gestionUsuariosContainer}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <h2 className={styles.gestionUsuariosTitulo}>MODIFICAR USUARIO</h2>
                            <img className={styles.gestionUsuariosDescripcion} src="/editarUsuario.png" alt="Editar Usuarios" />
                        </div>
                    </Link>

                    <Link to="eliminarUsuarios" onClick={handleLinkClick}>
                        <div className={styles.gestionUsuariosContainer}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <h2 className={styles.gestionUsuariosTitulo}>ELIMINAR USUARIO</h2>
                            <img className={styles.gestionUsuariosDescripcion} src="/eliminarUsuario.png" alt="Eliminar Usuarios" />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
