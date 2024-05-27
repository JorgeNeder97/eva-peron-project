import React from 'react';
import styles from './Rectoria.module.css';
import { NavBar } from '../../components/NavBar/NavBar';
import { useSlowLoad } from '../../hooks/useSlowLoad';
import video from '../../assets/SecretariaLogin.mp4';
import logoRectoria from '../../assets/logoRectoria.png';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import { useRectoriaAuth } from '../../context/RectoriaContext/RectoriaContext';


export const RectoriaPage = () => {

    const { isLoaded } = useSlowLoad()
    const cookie = Cookies.get();
    if(cookie.rectoriaToken) {
        return <Navigate to="/rectoria/home" />
    }

    return (
        <>
            <NavBar />
            <div className={isLoaded ? styles.mainContainer : styles.unloaded}>
                <div className={styles.videoContainer}>
                    <video autoPlay loop muted className={styles.video}>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div className={styles.formContainer}>
                    <div className={styles.logoContainer}>
                        <img className={styles.logoRectoria} src={logoRectoria} alt="Rectoría Eva Perón - Logo" />
                    </div>
                    <LoginForm urlToNavigate={'/rectoria/home'} loginPage={'rectoria'} auth={useRectoriaAuth}/>
                </div>
            </div>
        </>
    )
}