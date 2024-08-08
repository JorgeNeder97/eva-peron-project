import React, { useState, useEffect } from 'react';
import styles from './Noticias.module.css';
import { NavBar } from '../../components/NavBar/NavBar';
import { Noticia } from '../../components/News/Noticia';
import { listarNoticiasRequest } from '../../api/noticiasCRUD';


export const Noticias = () => {


    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [noticias, setNoticias] = useState(null);

    useEffect(() => {
        const listarNoticias = async () => {
            try {
                const res = await listarNoticiasRequest();
                setNoticias(res.data.noticias);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        }

        listarNoticias();

        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 50);

        // Limpieza del timer cuando el componente se desmonta
        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            <NavBar />
            <div className={isLoaded ? styles.mainContainer : styles.unloaded}>
                <h2 className={styles.tituloPagina}>NOTICIAS</h2>
                <div className={styles.divider}></div>
                {isLoading ? <h2>Cargando...</h2> :
                    <div className={styles.noticiasContainer}>
                        {noticias.map(noticia => {
                            return (
                                <Noticia
                                    key={noticia.id}
                                    id={noticia.id}
                                    titulo={noticia.titulo}
                                    adelanto={noticia.adelanto}
                                    cuerpo={noticia.cuerpo}
                                    imagen={noticia.noticia_imagen[0].nombre}
                                />
                            )
                        })}
                    </div>
                }
            </div>
        </>
    )
}
