import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/img/Eva-Peron.png';
import logoSecretaria from '../../assets/img/logoSecretaria-Blanco.png';
import logoSeccionAlumnos from '../../assets/img/logoSeccionAlumnos-Blanco.png';
import logoAsesoriaPedagogica from '../../assets/img/logoAsesoriaPedagogica-Blanco.png';
import logoMind from '../../assets/img/mind.png';

export const Footer = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.logosContainer}>
                    <img className={styles.logoEscuela} src={logo} alt='Escuela Eva Perón - Logo' />
                </div>
                <div className={styles.redesContainer}>
                    <p>Nuestras Redes</p>
                    <div className={styles.redes}>
                        <a href="https://www.facebook.com/escformacionprofesional?locale=es_LA" target="_blank"><i className="fa-brands fa-square-facebook fa-2xl"></i></a>
                        <a href="https://www.instagram.com/escevaperon4/?igsh=YjFidXR2ajJodzZy" target="_blank"><i className="fa-brands fa-instagram fa-2xl"></i></a>
                    </div>
                </div>
                <div className={styles.infoContactoContainer}>
                    <div className={styles.emailContacto}>
                        <a href="mailto: escevaperon4@gmail.com"><i className="fa-solid fa-envelope"></i> escevaperon4@gmail.com</a>
                    </div>
                    <div className={styles.telefonoContacto}>
                        <a href="tel: 4226237"><i className="fa-solid fa-phone"></i> (385) 422-6237</a>
                    </div>
                </div>
                <div className={styles.developedByContainer}>
                    <p className={styles.developedBy}>Developed by</p>
                    <img src={logoMind} alt="Logo .Mind" className={styles.logoMind} />
                </div>
            </div>
        </>
    )
}
