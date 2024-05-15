import React from 'react'
import styles from './Noticia.module.css'
import { Link } from 'react-router-dom'

export const Noticia = () => {
    // Crear un estado de la noticia, traer las noticias de la base de datos y guardarlas en el estado como array.
    // mapear debajo las ultimas 6 noticias.

  return (
    <>
        {/* Debe ser una galeria grid */}
        <div className={styles.mainContainer}>
            <div className={styles.card}>
                <img src="" width="" />
                <div>
                    <Link><h3>titulo</h3></Link>
                    <p>adelanto</p>
                </div>
            </div>
        </div>
    </>
  )
}
