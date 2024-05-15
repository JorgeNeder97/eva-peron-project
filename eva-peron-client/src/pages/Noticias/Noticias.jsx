import React, { useEffect, useState } from 'react';
import styles from './Noticias.module.css';
import { NavBar } from '../../components/NavBar/NavBar';
import { Noticia } from '../../components/News/Noticia';
import { useSlowLoad } from '../../hooks/useSlowLoad';
import { useFetch } from '../../hooks/useFetch';


export const Noticias = () => {

    const { isLoaded } = useSlowLoad();
    
    const [noticias, setNoticias] = useState(null);
    
    const {data, isLoading, errors} = useFetch('http://localhost:3000/api/noticias/list');
    console.log(data);

    
    // const {titulo, adelanto, cuerpo, noticia_imagen} = noticias;

    // const imagen = noticia_imagen.nombre;

    return (
        <>
            <NavBar />
            <div className={isLoaded ? styles.mainContainer : styles.unloaded}>
                <div className={styles.noticiasContainer}>
                        <Noticia />
                </div>
            </div>
        </>
    )
}
