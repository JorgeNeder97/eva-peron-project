import React from 'react';
import styles from './Secretaria.module.css'
import { NavBar } from '../../components/NavBar/NavBar'
import { useSlowLoad } from '../../hooks/useSlowLoad'
import video from '../../assets/SecretariaLogin.mp4'
import logoSecretaria from '../../assets/logoSecretaria.png'
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { useSecretariaAuth } from '../../context/SecretariaContext/SecretariaContext';
import Cookies from 'js-cookie';

export const SecretariaPage = () => {

    const { isLoaded } = useSlowLoad()
    const cookie = Cookies.get();
    if(cookie.secretariaToken) {
        return <Navigate to="/secretaria/home" />
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
                        <img className={styles.logoSecretaria} src={logoSecretaria} alt="Secretaría Eva Perón - Logo" />
                    </div>
                    <LoginForm urlToNavigate={'/secretaria/home'} loginPage={"secretaria"} auth={useSecretariaAuth} />
                </div>
            </div>
        </>
    )
}
