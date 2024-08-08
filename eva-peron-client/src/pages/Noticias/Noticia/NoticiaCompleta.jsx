import React, { useEffect, useState } from 'react';
import styles from './NoticiaCompleta.module.css';
import { NavBar } from '../../../components/NavBar/NavBar';
import { listarNoticiaRequest } from '../../../api/noticiasCRUD';
import { VolverAtrasButton } from '../../../components/VolverAtrasButton/VolverAtrasButton';
import { useParams } from 'react-router-dom';



export const NoticiaCompleta = () => {

    const [loading, setLoading] = useState(true);
    const [noticia, setNoticia] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const params = useParams();


    useEffect(() => {
        const listarNoticia = async () => {
            const res = await listarNoticiaRequest(params.id);
            setNoticia(res.data.noticia);
            setLoading(false);
        }

        listarNoticia();

        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 50);

        // Limpieza del timer cuando el componente se desmonta
        return () => clearTimeout(timer);
    }, []);

    
    // Verificamos si esta cargando el estado de noticias.
    if (loading) {
        return (<div className={isLoaded ? styles.mainContainer : styles.unloaded}>Cargando...</div>);
    } else {
        
        const nombreImagen = noticia.noticia_imagen[0].nombre;
        const imagenUrl = `https://server.escuelaevaperon.com/images/${nombreImagen}`;
        
        return (
            <>
                <NavBar />
                <div className={isLoaded ? styles.mainContainer : styles.unloaded}>
                    <div className={styles.paginaHeader}>
                        <h2 className={styles.tituloPagina}>NOTICIAS</h2>
                        <VolverAtrasButton url="/noticias" />
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.flexContainer}>
                        <h2 className={styles.tituloNoticia}>{noticia.titulo}</h2>
                        <p className={styles.adelantoNoticia}>{noticia.adelanto}</p>
                        <img className={styles.imagenNoticia} src={imagenUrl} alt="Imagen de la noticia" />
                        <p className={styles.cuerpoNoticia}>{noticia.cuerpo}</p>
                    </div>
                </div>
            </>
        )
    }
}
