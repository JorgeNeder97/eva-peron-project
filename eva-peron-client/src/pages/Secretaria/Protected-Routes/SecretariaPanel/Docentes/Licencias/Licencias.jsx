import React, { useState, useEffect } from 'react';
import styles from './Licencias.module.css';
import { listarDocentesRequest, listarLicenciasRequest } from '../../../../../../api/docentesCRUD';
import { VolverAtrasButton } from '../../../../../../components/VolverAtrasButton/VolverAtrasButton';
import { SecretariaNavBar } from '../../../SecretariaPanel/SecretariaNavBar/SecretariaNavBar';
import { TablaLicenciasDiarias } from '../../../../../../components/TablaLicenciasDiarias/TablaLicenciasDiarias';
import { TablaDocenteLicencia } from '../../../../../../components/TablaDocenteLicencia/TablaDocenteLicencia';




export const Licencias = () => {

    const [docentes, setDocentes] = useState(null);
    const [licencias, setLicencias] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        const traerDocentesYLicencias = async () => {
            const resDocentes = await listarDocentesRequest();
            const resLicencias = await listarLicenciasRequest();
            setDocentes(resDocentes.data.data);
            setLicencias(resLicencias.data.licencias);
            setLoading(false);
        }

        traerDocentesYLicencias();

        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 50);

        // Limpieza del timer cuando el componente se desmonta
        return () => clearTimeout(timer);
    }, []);

    const formatearFecha = (fecha) => {
        const fechaFormateada = new Date(fecha);

        const dia = fechaFormateada.getUTCDate(); // Día del mes (1-31)
        const mes = fechaFormateada.getUTCMonth() + 1; // Mes (0-11, por lo que sumamos 1)
        const año = fechaFormateada.getUTCFullYear();
        const fechaCompleta = `${dia.toString().length == 2 ? dia : '0' + dia}/${mes.toString().length == 2 ? mes : '0' + mes}/${año}`;

        return fechaCompleta;
    }

    const fecha = new Date();
    const dia = fecha.getUTCDate(); // Día del mes (1-31)
    const mes = fecha.getUTCMonth() + 1; // Mes (0-11, por lo que sumamos 1)
    const año = fecha.getUTCFullYear();
    const fechaCompleta = `${año}-${mes.toString().length == 2 ? mes : '0' + mes}-${dia.toString().length == 2 ? dia : '0' + dia}T00:00:000Z`;

    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    const mesesDelAño = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const diaSemana = diasSemana[fecha.getUTCDay()];
    const mesDelAño = mesesDelAño[fecha.getUTCMonth()];

    const diaCompleto = `${diaSemana} ${dia}`;

    console.log(fechaCompleta);
    console.log(docentes);
    console.log(licencias);

    if (loading) return (<div className={isLoaded ? styles.mainContainer : styles.unloaded}>Cargando...</div>);
    else {
        return (
            <>
                <SecretariaNavBar />
                <div className={isLoaded ? styles.mainContainer : styles.unloaded}>
                    <div className={styles.paginaHeader}>
                        <h2 className={styles.tituloPagina}>LICENCIAS</h2>
                        <VolverAtrasButton url="/secretaria/gestionDocentes" />
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.licenciasContainer}>
                        <h2 className={styles.tituloSecundario}>{diaCompleto} de {mesDelAño} del {año}</h2>
                        <TablaLicenciasDiarias licencias={licencias} />
                    </div>

                    <div className={styles.docentesContainer}>
                        <h2 className={styles.tituloSecundario}>HISTORIAL DE LICENCIAS</h2>
                        <TablaDocenteLicencia docentes={docentes} url={'/secretaria/gestionDocentes/licencias/historialLicencias/'} />
                    </div>

                </div>
            </>
        )
    }
}
