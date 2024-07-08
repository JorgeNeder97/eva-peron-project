import React, { useEffect, useState } from 'react';
import styles from './EliminarCargo.module.css';
import { SecretariaNavBar } from '../../SecretariaNavBar/SecretariaNavBar';
import { listarCargosRequest } from '../../../../../../api/cargosCRUD';
import { VolverAtrasButton } from '../../../../../../components/VolverAtrasButton/VolverAtrasButton';
import { TablaEliminarCargos } from '../../../../../../components/TablaEliminarCargos/TablaEliminarCargos';



export const EliminarCargo = () => {

    const [loading, setLoading] = useState(true);
    const [cargos, setCargos] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        const listarCargos = async () => {
            const res = await listarCargosRequest();
            setCargos(res.data.cargos);
            setLoading(false);
        }
        
        listarCargos();

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
                        <h2 className={styles.tituloPagina}>CARGOS</h2>
                        <VolverAtrasButton url="/secretaria/gestionCargos"/>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.gridContainer}>
                        <div className={styles.tableContainer}>
                            <h3 className={styles.tituloTabla}>Todos los Cargos</h3>
                            <TablaEliminarCargos className={styles.tablaCargos} cargos={cargos} accion='ELIMINAR' />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
