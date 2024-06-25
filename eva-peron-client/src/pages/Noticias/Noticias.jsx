import React from 'react';
import styles from './Noticias.module.css';
import { NavBar } from '../../components/NavBar/NavBar';
import { Noticia } from '../../components/News/Noticia';
import { useSlowLoad } from '../../hooks/useSlowLoad';
import { useFetch } from '../../hooks/useFetch';


export const Noticias = () => {

    const { isLoaded } = useSlowLoad();

    const { data, isLoading, errors } = useFetch('http://localhost:3000/api/noticias/list');

    console.log(data);

    return (
        <>
            <NavBar />
            <div className={isLoaded ? styles.mainContainer : styles.unloaded}>
                <h2 className={styles.tituloPagina}>NOTICIAS</h2>
                <div className={styles.divider}></div>
                {isLoading ? <h2>Cargando...</h2> : errors ? <h2>Ha ocurrido un error: {errors}</h2> :
                    <div className={styles.noticiasContainer}>
                        {data.data.map(noticia => {
                            return (
                                <Noticia
                                    key={noticia.id}
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
