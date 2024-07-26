import React, { useEffect, useState } from 'react';
import styles from './EliminarDocente.module.css';
import { SecretariaNavBar } from '../../SecretariaNavBar/SecretariaNavBar';
import { listarDocentesRequest } from '../../../../../../api/docentesCRUD';
import { VolverAtrasButton } from '../../../../../../components/VolverAtrasButton/VolverAtrasButton';
import { TablaEliminarDocentes } from '../../../../../../components/TablaEliminarDocentes/TablaEliminarDocentes';



export const EliminarDocente = () => {

    const [loading, setLoading] = useState(true);
    const [docentes, setDocentes] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        const listarDocentes = async () => {
            const res = await listarDocentesRequest();
            setDocentes(res.data.data);
            setLoading(false);
        }
        
        listarDocentes();

        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 50);

        // Limpieza del timer cuando el componente se desmonta
        return () => clearTimeout(timer);
    }, []);



    // Verificamos si esta cargando el estado de noticias.
    if (loading) {
        return ( <div className={isLoaded ? styles.mainContainer : styles.unloaded}>Cargando...</div> );
    } else {
        return (
            <>
                <SecretariaNavBar />
                <div className={isLoaded ? styles.mainContainer : styles.unloaded}>
                    <div className={styles.paginaHeader}>
                        <h2 className={styles.tituloPagina}>DOCENTES</h2>
                        <VolverAtrasButton url="/secretaria/gestionDocentes"/>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.gridContainer}>
                        <div className={styles.tableContainer}>
                            <h3 className={styles.tituloTabla}>Todos los Docentes</h3>
                            <TablaEliminarDocentes docentes={docentes} accion='ELIMINAR' />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
