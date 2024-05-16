import React from 'react'
import styles from './Noticia.module.css'
import { Link } from 'react-router-dom'
export const Noticia = ({ id, titulo, adelanto, cuerpo, imagenes }) => {


    return (
        <>
            <div className={styles.mainContainer} key={id}>
                    <Link className={styles.imagenAdelantoContainer}>
                        {imagenes.map((imagen, i) => (
                            <img className={styles.image} src={imagen.nombre} key={i} />
                        ))}
                        <div className={styles.tituloAdelantoContainer}>
                            <h3 className={styles.titulo}>{titulo}</h3>
                            <p className={styles.adelanto}>{adelanto}</p>
                        </div>
                    </Link>
            </div>
        </>
    )
}
