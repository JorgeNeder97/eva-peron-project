import React from 'react';
import styles from './GaleriaNoticias.module.css';
import { NavBar } from '../NavBar/NavBar';
import { Noticia } from '../News/Noticia';
import { useSlowLoad } from '../../hooks/useSlowLoad';
import { useFetch } from '../../hooks/useFetch';


export const GaleriaNoticias = () => {

    const { isLoaded } = useSlowLoad();

    const { data, isLoading, errors } = useFetch('http://localhost:3000/api/noticias/list');

    return (
        <>
            <div className={isLoaded ? styles.mainContainer : styles.unloaded}>
                <h2 className={styles.tituloPagina}>Últimas Noticias</h2>
                <div className={styles.divider}></div>
                {isLoading ? <h2>Cargando...</h2> : errors ? <h2>Ha ocurrido un error: {errors}</h2> :
                    <div className={styles.noticiasContainer}>
                        {data.data.map((noticia, i) => {
                            return (
                                <div id={'noticia' + (i + 1)} key={noticia.id}>
                                    <Noticia
                                        key={noticia.id}
                                        titulo={noticia.titulo}
                                        adelanto={noticia.adelanto}
                                        cuerpo={noticia.cuerpo}
                                        imagenes={noticia.noticia_imagen}
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
