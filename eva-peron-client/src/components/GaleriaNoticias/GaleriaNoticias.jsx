import React, { useState, useEffect } from 'react';
import styles from './GaleriaNoticias.module.css';
import { Noticia } from '../News/Noticia';
import { lastestListRequest } from '../../api/noticiasCRUD';


export const GaleriaNoticias = () => {

    const [noticias, setNoticias] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const ultimasNoticias = async () => {
            try {
                const res = await lastestListRequest();
                setNoticias(res.data.noticias);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        }

        ultimasNoticias();

        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 50);

        // Limpieza del timer cuando el componente se desmonta
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className={isLoaded ? styles.mainContainer : styles.unloaded}>
                <h2 className={styles.tituloPagina}>Últimas Noticias</h2>
                <div className={styles.divider}></div>
                {isLoading ? <h2>Cargando...</h2> :
                    <div className={styles.noticiasContainer}>
                        {noticias.map((noticia, i) => {
                            return (
                                <div id={'noticia' + (i + 1)} key={noticia.id}>
                                    <Noticia
                                        key={noticia.id}
                                        id={noticia.id}
                                        titulo={noticia.titulo}
                                        adelanto={noticia.adelanto}
                                        cuerpo={noticia.cuerpo}
                                        imagen={noticia.noticia_imagen[0].nombre}
                                    />
                                </div>
                            )
                        })}
                    </div>
                }
                <div className={styles.bottomDivider}></div>
            </div>
        </>
    )
}
