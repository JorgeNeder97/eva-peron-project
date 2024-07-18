import React, { useEffect, useState } from 'react';
import styles from './ModificarDocente.module.css';
import { SecretariaNavBar } from '../../SecretariaNavBar/SecretariaNavBar';
import { listarDocentesRequest } from '../../../../../../api/docentesCRUD';
import { VolverAtrasButton } from '../../../../../../components/VolverAtrasButton/VolverAtrasButton';
import { TablaDocentes } from '../../../../../../components/TablaDocentes/TablaDocentes';



export const ModificarDocente = () => {

    const [loading, setLoading] = useState(true);
    const [docentes, setDocentes] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        const listarDocentes = async () => {
            const res = await listarDocentesRequest();
            setDocentes(res.data.data);
            setLoading(false);
        }
        
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 50);

        listarDocentes();

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
                            <h3 className={styles.tituloTabla}>Todos los docentes</h3>
                            <TablaDocentes docentes={docentes} accion='EDITAR' url='../gestionDocentes/modificarDocente/' />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
