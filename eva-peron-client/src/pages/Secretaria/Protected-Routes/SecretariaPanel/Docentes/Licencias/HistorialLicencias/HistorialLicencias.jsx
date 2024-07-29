import React, { useState } from 'react';
import styles from './HistorialLicencias.module.css';
import { datosDocenteRequest } from '../../../../../../../api/docentesCRUD';
import { Navigate, useParams } from 'react-router-dom';
import { SecretariaNavBar } from '../../../SecretariaNavBar/SecretariaNavBar';
import { VolverAtrasButton } from '../../../../../../../components/VolverAtrasButton/VolverAtrasButton';
import { useEffect } from 'react';
import { TablaLicencias } from '../../../../../../../components/TablaLicencias/TablaLicencias';



export const HistorialLicencias = () => {

    const [docente, setDocente] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    const params = useParams();

    useEffect(() => {
        const datosDocente = async () => {
            const res = await datosDocenteRequest(params.id);
            setDocente(res.data.docente);
            setLoading(false);
        }

        datosDocente();
        
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 50);

        // Limpieza del timer cuando el componente se desmonta
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <div>Cargando...</div>
    else return (
        <>
            <SecretariaNavBar />
            <div className={isLoaded ? styles.mainContainer : styles.unloaded}>
                <div className={styles.paginaHeader}>
                    <h2 className={styles.tituloPagina}>HISTORIAL DE LICENCIAS</h2>
                    <VolverAtrasButton url="/secretaria/gestionDocentes/licencias" />
                </div>
                <div className={styles.divider}></div>
                <div className={styles.historialContainer}>
                    <h3 className={styles.tituloSecundario}>{docente.apellido} {docente.nombre} - {docente.docente_cargo.nombre}</h3>
                    <TablaLicencias licencias={docente.licencia_docente} />
                </div>
                
            </div>
        </>
    )
}
