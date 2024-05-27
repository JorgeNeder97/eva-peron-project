import React, { useEffect, useState } from 'react'
import styles from './AsesoriaPedagogica.module.css'
import { NavBar } from '../../components/NavBar/NavBar'
import { useSlowLoad } from '../../hooks/useSlowLoad'
import video from '../../assets/AsesoriaPedagogicaLogin.mp4'
import logoAsesoriaPedagogica from '../../assets/logoAsesoriaPedagogica.png'
import { LoginForm } from '../../components/LoginForm/LoginForm'
import { useAsesoriaPedagogicaAuth } from '../../context/AsesoriaPedagogicaContext/AsesoriaPedagogicaContext';


export const AsesoriaPedagogicaPage = () => {

    const { isLoaded } = useSlowLoad()

    
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
                        <img className={styles.logoAsesoriaPedagogica} src={logoAsesoriaPedagogica} alt="Asesoría Pedagógica Eva Perón - Logo" />
                    </div>
                    <LoginForm urlToNavigate={'/asesoria-pedagogica/home'} loginPage={"asesoriaPedagogica"} auth={useAsesoriaPedagogicaAuth} />
                </div>
            </div>
        </>
    )
}
