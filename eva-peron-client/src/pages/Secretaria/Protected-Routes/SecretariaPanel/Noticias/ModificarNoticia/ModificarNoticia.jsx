import React, { useEffect, useState } from 'react';
import styles from './ModificarNoticia.module.css';
import { SecretariaNavBar } from '../../SecretariaNavBar/SecretariaNavBar';
import { listarNoticiasRequest } from '../../../../../../api/noticiasCRUD';
import { TablaNoticias } from '../../../../../../components/TablaNoticias/TablaNoticias';
import { VolverAtrasButton } from '../../../../../../components/VolverAtrasButton/VolverAtrasButton';



export const ModificarNoticia = () => {

    const [loading, setLoading] = useState(true);
    const [noticias, setNoticias] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        const listaNoticias = async () => {
            const res = await listarNoticiasRequest();
            setNoticias(res.data.data);
            setLoading(false);
            console.log(noticias);
        }
        
        listaNoticias();

        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 50);

        // Limpieza del timer cuando el componente se desmonta
        return () => clearTimeout(timer);
    }, []);

    console.log(noticias);


    // Verificamos si esta cargando el estado de noticias.
    if (loading) {
        return ( <div className={isLoaded ? styles.mainContainer : styles.unloaded}>Cargando...</div> );
    } else {
        console.log(noticias);
        return (
            <>
                <SecretariaNavBar />
                <div className={isLoaded ? styles.mainContainer : styles.unloaded}>
                    <div className={styles.paginaHeader}>
                        <h2 className={styles.tituloPagina}>NOTICIAS</h2>
                        <VolverAtrasButton url="/secretaria/gestionNoticias"/>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.gridContainer}>
                        <div className={styles.tableContainer}>
                            <h3 className={styles.tituloTabla}>Todas las Noticias</h3>
                            <TablaNoticias noticias={noticias} accion='EDITAR' url='../gestionNoticias/modificarNoticias/' />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
