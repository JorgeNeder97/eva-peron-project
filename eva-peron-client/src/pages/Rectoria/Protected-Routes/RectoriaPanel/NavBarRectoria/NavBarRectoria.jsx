import React, { useEffect, useRef, useState } from 'react';
import styles from './NavBarRectoria.module.css';
import Logo from '../../../../../assets/logoRectoria.png';
import { Link, Navigate } from 'react-router-dom';
import { logoutRectoriaRequest } from '../../../../../api/login';
import { useRectoriaAuth } from '../../../../../context/RectoriaContext/RectoriaContext';


export const NavBarRectoria = () => {

    const [loggedOut, setLoggedOut] = useState(false);

    const logoContainer = useRef(null);

    const { usuario, loading } = useRectoriaAuth();

    const handleLinkClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    const handleCerrarSesion = async () => {
        try {
            const response = await logoutRectoriaRequest();
            setLoggedOut(true);
        } catch (error) {
            console.log(error);
        }
    }

    if (loggedOut) return <Navigate to="/" />;
    if (loading) return <h2>Cargando...</h2>

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.logoContainer} ref={logoContainer}>
                    <Link to="/rectoria/home" onClick={handleLinkClick}><img src={Logo} className={styles.logo} alt="Escuela Eva Perón - Logotipo" /></Link>
                </div>
            </div>
            <div className={styles.linksContainerContainer}>
                <div className={styles.linksContainer}>
                    <Link to="/" className={styles.links} onClick={handleLinkClick}>VOLVER AL INICIO</Link>
                    {usuario.sexo_id === 2 ?
                        <h2 className={styles.bienvenido}>BIENVENIDA {usuario.nombre ? usuario.nombre.toUpperCase() : ""}</h2> :
                        <h2 className={styles.bienvenido}>BIENVENIDO {usuario.nombre ? usuario.nombre.toUpperCase() : ""}</h2>}
                    <Link className={styles.links} onClick={handleCerrarSesion}>CERRAR SESIÓN</Link>
                </div>
            </div>
        </>
    )
}
