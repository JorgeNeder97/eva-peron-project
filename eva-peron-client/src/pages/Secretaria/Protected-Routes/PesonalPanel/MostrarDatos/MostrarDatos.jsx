import React, { useState, useEffect } from 'react';
import styles from './MostrarDatos.module.css';
import { datosDocenteRequest } from '../../../../../api/docentesCRUD';
import { VolverAtrasButton } from '../../../../../components/VolverAtrasButton/VolverAtrasButton';
import { SecretariaNavBar } from '../../SecretariaPanel/SecretariaNavBar/SecretariaNavBar';
import { useSecretariaAuth } from '../../../../../context/SecretariaContext/SecretariaContext';
import { TablaLicencias } from '../../../../../components/TablaLicencias/TablaLicencias';




export const MostrarDatos = () => {

    const { usuario } = useSecretariaAuth();
    const [docente, setDocente] = useState(null);
    const [licencias, setLicencias] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        const traerDocente = async () => {
            const res = await datosDocenteRequest(usuario.id);
            setDocente(res.data.docente);
            setLicencias(res.data.docente.licencia_docente);
            setLoading(false);
        }

        traerDocente();

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

    console.log(licencias);
    
    if (loading) return (<div className={isLoaded ? styles.mainContainer : styles.unloaded}>Cargando...</div>);
    else {
        return (
            <>
                <SecretariaNavBar />
                <div className={isLoaded ? styles.mainContainer : styles.unloaded}>
                    <div className={styles.paginaHeader}>
                        <h2 className={styles.tituloPagina}>MIS DATOS</h2>
                        <VolverAtrasButton url="/secretaria/personalDocente" />
                    </div>
                    <div className={styles.datosContainer}>
                        <div className={styles.datosPersonalesContainer}>
                            <h3 className={styles.tituloPequeño}>Datos Personales</h3>
                            <div className={styles.datosPersonales}>

                                {/* Nombre y Apellido */}
                                <div className={styles.dPersCampo}>
                                    <h4>Nombre y Apellido </h4>
                                    <p>{docente.nombre} {docente.apellido}</p>
                                </div>

                                {/* Dni */}
                                <div className={styles.dPersCampo}>
                                    <h4>DNI </h4>
                                    <p>{docente.dni}</p>
                                </div>

                                {/* Cuil */}
                                <div className={styles.dPersCampo}>
                                    <h4>CUIL </h4>
                                    <p>{docente.cuil}</p>
                                </div>

                                {/* Edad */}
                                <div className={styles.dPersCampo}>
                                    <h4>Edad </h4>
                                    <p>{docente.edad}</p>
                                </div>

                                {/* Sexo */}
                                <div className={styles.dPersCampo}>
                                    <h4>Sexo </h4>
                                    <p>{docente.sexo_docente.nombre}</p>
                                </div>

                                {/* Domicilio */}
                                <div className={styles.dPersCampo}>
                                    <h4>Domicilio </h4>
                                    <p>{docente.domicilio}</p>
                                </div>

                                {/* Email */}
                                <div className={styles.dPersCampo}>
                                    <h4>Email </h4>
                                    <p>{docente.email}</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.datosProfesionalesContainer}>
                            <h3 className={styles.tituloPequeño}>Datos Profesionales</h3>
                            <div className={styles.datosProfesionales}>

                                {/* Titulo */}
                                <div className={styles.dProfCampo}>
                                    <h4>Título </h4>
                                    <p>{docente.titulo}</p>
                                </div>

                                {/* Fecha Prom Inc Doce */}
                                <div className={styles.dProfCampo}>
                                    <h4>Fecha prom. inicio docente </h4>
                                    <p>{formatearFecha(docente.fecha_prom_inc_doce)}</p>
                                </div>

                                {/* Cargo */}
                                <div className={styles.dProfCampo}>
                                    <h4>Cargo </h4>
                                    <p>{docente.docente_cargo.nombre}</p>
                                </div>

                                {/* Situacion Revista */}
                                <div className={styles.dProfCampo}>
                                    <h4>Situación Revista </h4>
                                    <p>{docente.situacion_revista}</p>
                                </div>

                                {/* Fecha Inc Cargo Actual */}
                                <div className={styles.dProfCampo}>
                                    <h4>Fecha inicio cargo actual </h4>
                                    <p>{formatearFecha(docente.fecha_inc_cargo_actual)}</p>
                                </div>

                                {/* Alta Expte */}
                                <div className={styles.dProfCampo}>
                                    <h4>Alta Expediente </h4>
                                    <p>{docente.alta_expte}</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.cupofsAsignaturasContainer}>
                            <h3 className={styles.tituloPequeño}>Cupofs Y Asignaturas</h3>
                            <div className={styles.cupofsAsignaturas}>
                                <div className={styles.cupofs}>
                                    {/* Cupofs */}
                                    {docente.cupof_docente.map(cupof => {
                                        return (
                                            <div className={styles.smallContainer} key={cupof.id}>
                                                <div className={styles.dProfCampo}>
                                                    <h4>Cupof </h4>
                                                    <p>{cupof.nombre}</p>
                                                </div>

                                                <div className={styles.dProfCampo}>
                                                    <h4>Situación Revista</h4>
                                                    <p>{cupof.situacion_revista}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className={styles.asignaturas}>
                                    {/* Asignaturas */}
                                    {docente.asignatura_docente.map(asignatura => {
                                        return (
                                            <div className={styles.smallContainer} key={asignatura.id}>
                                                <div className={styles.dProfCampo}>
                                                    <h4>Asignatura </h4>
                                                    <p>{asignatura.asignatura}</p>
                                                </div>

                                                <div className={styles.dProfCampo}>
                                                    <h4>Curso </h4>
                                                    <p>{asignatura.asignatura_curso.año_academico} "{asignatura.asignatura_curso.nombre}"</p>
                                                </div>

                                                <div className={styles.dProfCampo}>
                                                    <h4>Horas </h4>
                                                    <p>{asignatura.horas} hs</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={styles.licenciasContainer}>
                        <h2 className={styles.tituloLicencia}>HISTORIAL DE LICENCIAS</h2>
                        <TablaLicencias licencias={licencias} />
                    </div>

                </div>
            </>
        )
    }
}
