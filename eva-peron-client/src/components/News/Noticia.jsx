import React from 'react'
import styles from './Noticia.module.css'
import { Link } from 'react-router-dom'
export const Noticia = ({ id, titulo, adelanto, cuerpo, imagen }) => {

    const imagenUrl = `http://localhost:3000/images/${imagen}`;

    return (
        <>
            <div className={styles.mainContainer} key={id}>
                <Link className={styles.imagenAdelantoContainer}>
                    <img className={styles.image} src={imagenUrl} />
                    <div className={styles.tituloAdelantoContainer}>
                        <h3 className={styles.titulo}>{titulo}</h3>
                        <p className={styles.adelanto}>{adelanto}</p>
                    </div>
                </Link>
            </div>
        </>
    )
}
