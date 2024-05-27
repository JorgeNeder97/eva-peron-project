import React, { useEffect, useState } from 'react'
import styles from './SeccionAlumnos.module.css'
import { NavBar } from '../../components/NavBar/NavBar'
import { useSlowLoad } from '../../hooks/useSlowLoad'
import video from '../../assets/SeccionAlumnosLogin.mp4'
import logoSeccionAlumnos from '../../assets/logoSeccionAlumnos.png'
import { LoginForm } from '../../components/LoginForm/LoginForm'
import { useSeccionAlumnosAuth } from '../../context/SeccionAlumnosContext/SeccionAlumnosContext'

export const SeccionAlumnosPage = () => {

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
                        <img className={styles.logoSeccionAlumnos} src={logoSeccionAlumnos} alt="Sección Alumnos Eva Perón - Logo" />
                    </div>
                    <LoginForm urlToNavigate={'/alumnos/home'} loginPage={"seccionAlumnos"} auth={useSeccionAlumnosAuth} />
                </div>
            </div>
        </>
    )
}
