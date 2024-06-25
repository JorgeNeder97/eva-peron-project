import React from 'react';
import styles from './GestionNoticias.module.css';
import { useSlowLoad } from '../../../../../hooks/useSlowLoad';
import { Link } from 'react-router-dom';
import { VolverAtrasButton } from '../../../../../components/VolverAtrasButton/VolverAtrasButton';
import { useLinkScroll } from '../../../../../hooks/useLinkScroll';
import { SecretariaNavBar } from '../SecretariaNavBar/SecretariaNavBar';


export const GestionNoticias = () => {

    const { isLoaded } = useSlowLoad();
    const { handleLinkClick } = useLinkScroll();



    return (
        <>
            <SecretariaNavBar />
            <div className={isLoaded ? styles.mainContainer : styles.unloaded}>
                <div className={styles.paginaHeader}>
                    <h2 className={styles.tituloPagina}>GESTION DE NOTICIAS</h2>
                    <VolverAtrasButton url="/secretaria/home" />
                </div>
                <div className={styles.opcionesContainer}>

                    <Link to="nuevaNoticia" onClick={handleLinkClick}>
                        <div className={styles.gestionUsuariosContainer}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <h2 className={styles.gestionUsuariosTitulo}>CREAR NOTICIA</h2>
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
                            <h2 className={styles.gestionUsuariosTitulo}>MODIFICAR NOTICIA</h2>
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
                            <h2 className={styles.gestionUsuariosTitulo}>ELIMINAR NOTICIA</h2>
                            <img className={styles.gestionUsuariosDescripcion} src="/eliminarUsuario.png" alt="Eliminar Usuarios" />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
