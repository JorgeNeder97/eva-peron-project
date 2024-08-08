import React, { useState, useEffect } from 'react';
import styles from './MostrarLicencia.module.css';
import { Link, Navigate, useParams } from 'react-router-dom';
import { VolverAtrasButton } from '../../../../../components/VolverAtrasButton/VolverAtrasButton';
import { useLinkScroll } from '../../../../../hooks/useLinkScroll';
import { SecretariaNavBar } from '../../SecretariaPanel/SecretariaNavBar/SecretariaNavBar';
import { useSecretariaAuth } from '../../../../../context/SecretariaContext/SecretariaContext';
import { Art30 } from '../../../../../components/PDF/Art30/Art30';
import { Art17 } from '../../../../../components/PDF/Art17/Art17';
import { datosLicenciaRequest } from '../../../../../api/docentesCRUD';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';


export const MostrarLicencia = () => {

    const { handleLinkClick } = useLinkScroll();
    const { usuario } = useSecretariaAuth();

    const [datos, setDatos] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    const params = useParams();

    useEffect(() => {
        const obtenerDatos = async () => {
            const res = await datosLicenciaRequest(params.id);
            setDatos(res.data.licencia);
            setLoading(false);
        }

        obtenerDatos();

        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 50);

        // Limpieza del timer cuando el componente se desmonta
        return () => clearTimeout(timer);
    }, []);

    
    
    if (loading) {
        return <div>Cargando...</div>;
    } else if (!loading && !datos) {
        return <Navigate to="/" />;  
    } else {

        const nombre = datos.licencia_docente.nombre;
        const apellido = datos.licencia_docente.apellido;
        const cargo = datos.licencia_docente.docente_cargo.nombre;
    
        const fechaRecibida = datos.fecha;
        const fechaFormateada = new Date(fechaRecibida);
    
        const dia = fechaFormateada.getUTCDate(); // Día del mes (1-31)
        const mes = fechaFormateada.getUTCMonth() + 1; // Mes (0-11, por lo que sumamos 1)
        const año = fechaFormateada.getUTCFullYear();
    
        const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        const diaSemana = diasSemana[fechaFormateada.getUTCDay()];

        const mesAño = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
        const nombreCompleto = `${apellido} ${nombre}`
        const diaCompleto = `${diaSemana} ${dia}`;
        const fechaCompleta = `${dia.toString().length == 2 ? dia : '0' + dia}/${mes.toString().length == 2 ? mes : '0' + mes}/${año}`;

        return (
            <>
                <SecretariaNavBar />
                <div className={isLoaded ? styles.mainContainer : styles.unloaded}>
                    <div className={styles.paginaHeader}>
                        <h2 className={styles.tituloPagina}>SOLICITUD DE LICENCIA</h2>
                        <VolverAtrasButton url="/secretaria/personalDocente" />
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.opcionesContainer}>

                        <PDFDownloadLink document={datos && datos.licencia == "Articulo N° 17" ? <Art17 nombre={nombreCompleto} cargo={cargo} dia={diaCompleto} mes={mesAño[mes]} año={año} fechaCompleta={fechaCompleta} /> : <Art30 nombre={nombreCompleto} cargo={cargo} dia={diaCompleto} mes={mes} año={año} fechaCompleta={fechaCompleta} />} fileName="solicitudLicencia.pdf">
                            {({ loading }) => loading ? <button className={styles.downloadButton} disabled >Cargando...</button> : <button className={styles.downloadButton}>Descargar PDF</button>}
                        </PDFDownloadLink>

                        <PDFViewer className={styles.pdfViewer}>
                            {datos && datos.licencia == "Articulo N° 17" && <Art17 nombre={nombreCompleto} cargo={cargo} dia={diaCompleto} mes={mesAño[mes]} año={año} fechaCompleta={fechaCompleta} />}
                            {datos && datos.licencia == "Articulo N° 30" && <Art30 nombre={nombreCompleto} cargo={cargo} dia={diaCompleto} mes={mesAño[mes]} año={año} fechaCompleta={fechaCompleta} />}
                        </PDFViewer>

                    </div>
                </div>
            </>
        )
    }
}
