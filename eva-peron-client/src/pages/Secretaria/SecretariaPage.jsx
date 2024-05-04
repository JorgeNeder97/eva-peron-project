import React, { useEffect, useState } from 'react'
import styles from './Secretaria.module.css'
import { useSlowLoad } from '../../hooks/useSlowLoad'
import video from '../../assets/SecretariaLogin.mp4'
import logoSecretaria from '../../assets/logoSecretaria.png'
import { useForm } from '../../hooks/useForm'

export const SecretariaPage = () => {

    const { isLoaded } = useSlowLoad()

    const initForm = {
        user: '',
        password: ''
    }

    const {user, password, formState, onInputChange} = useForm(initForm);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <>
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
                    <form className={styles.form} onSubmit={onSubmit}>
                        <div className={styles.groupToWrite} id="accesoUsuarios">
                        <label htmlFor="accesoUsuarios" className={styles.label}>Acceso de usuarios</label>
                            <input
                                type="text"             
                                name="user"
                                placeholder="Usuario"
                                className={styles.input}
                                value={user}
                                onChange={onInputChange}
                            />
                            <input
                                type="password"                              
                                name="password"
                                placeholder="Contraseña"
                                className={styles.input}
                                value={password}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className={styles.groupToCheck}>
                            <input
                                type="checkbox"
                                name="remember"
                            />
                            <label htmlFor="remember">Recuerdame</label>
                        </div>
                        <button className={styles.submitButton} type="submit">Iniciar Sesión</button>
                    </form>
                </div>
            </div>
        </>
    )
}
