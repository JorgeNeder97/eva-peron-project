import React, { useState, useEffect } from 'react';
import styles from './SolicitarLicencia.module.css';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { VolverAtrasButton } from '../../../../../components/VolverAtrasButton/VolverAtrasButton';
import { SecretariaNavBar } from '../../SecretariaPanel/SecretariaNavBar/SecretariaNavBar';
import { useSecretariaAuth } from '../../../../../context/SecretariaContext/SecretariaContext';
import { solicitarLicenciaRequest, traerLicenciasRequest } from '../../../../../api/docentesCRUD';
import { ModalLicencia } from '../../../../../components/ModalLicencia/ModalLicencia';



export const SolicitarLicencia = () => {

    const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm();
    // Trae los datos del usuario en sesión
    const { usuario } = useSecretariaAuth();


    const [creado, setCreado] = useState(false);
    const [estadoModal, setEstadoModal] = useState(false);
    const [redirigir, setRedirigir] = useState(false);
    const [urlToNavigate, setUrlToNavigate] = useState(null);
    const [historialLicencias, setHistorialLicencias] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        const traerLicencias = async () => {
            const res = await traerLicenciasRequest(usuario.id);
            setHistorialLicencias(res.data.licencias);
            setLoading(false);
        }

        traerLicencias();

        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 50);

        // Limpieza del timer cuando el componente se desmonta
        return () => clearTimeout(timer);
    }, []);


    const solicitarLicencia = async (data) => {
        const datos = {
            licencia: data.licencia,
            fecha: data.fecha,
            docente_id: usuario.id,
        }

        try {
            setEstadoModal(true);
            const res = await solicitarLicenciaRequest(datos);
            if (res.data.status === 200) {
                setUrlToNavigate(`/secretaria/personalDocente/solicitudLicencia/${res.data.licenciaId}`);
                setCreado(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const normalizarFecha = (fechaStr) => {
        const [year, month, day] = fechaStr.split('-');
        return new Date(year, month - 1, day); // Los meses en JS son de 0 a 11
    };

    const onSubmit = handleSubmit((data) => {
        solicitarLicencia(data);
        reset();
    });

    const handleAceptar = (e) => {
        setRedirigir(true);
    }

    console.log(new Date().getUTCDate());

    if (redirigir) return <Navigate to={creado ? urlToNavigate : "/secretaria/personalDocente"} />;

    if (loading) {
        return <div>Cargando...</div>;
    } else {
        return (
            <>
                <SecretariaNavBar />
                <div className={isLoaded ? styles.mainContainer : styles.unloaded}>
                    {estadoModal &&
                        <ModalLicencia
                            titulo="GESTION DOCENTES"
                            mostrarHeader={true}
                            estado={estadoModal}
                            cambiarEstado={setEstadoModal}
                        >
                            <h2>¡Licencia solicitada con éxito!</h2>
                            <button onClick={handleAceptar}>ACEPTAR</button>
                        </ModalLicencia>
                    }
                    <div className={styles.paginaHeader}>
                        <h2 className={styles.tituloPagina}>SOLICITAR LICENCIA</h2>
                        <VolverAtrasButton url="/secretaria/personalDocente" />
                    </div>
                    <form className={styles.form} onSubmit={onSubmit}>
                        <div className={styles.licenciaFechaContainer}>
                            {/* LICENCIA */}
                            <div className={styles.licencia}>
                                <label htmlFor="licencia">Seleccione un articulo</label>
                                <select {...register("licencia", {
                                    required: {
                                        value: true,
                                        message: "Debe seleccionar un articulo",
                                    }
                                })}>
                                    <option value="Articulo N° 17">Articulo N° 17</option>
                                    {usuario.sexo_id === 2 && <option value="Articulo N° 30">Articulo N° 30</option>}

                                </select>
                                <span className={errors.licencia ? styles.error : styles.hiddenSpan}>{errors.licencia && errors.licencia.message}</span>
                            </div>

                            <div className={styles.fecha}>
                                <label htmlFor="fecha">Fecha en que se solicita (mes/día/año)</label>
                                <input
                                    type="date"
                                    {...register("fecha", {
                                        required: {
                                            value: true,
                                            message: "Debe ingresar la fecha en que se solicita el articulo",
                                        },
                                        validate: (value) => {
                                            const fechaIngresada = normalizarFecha(value);
                                            const fechaActual = new Date();
                                            fechaActual.setHours(0, 0, 0, 0); // normaliza la fecha actual
                                            const diaSolicitado = fechaIngresada.getUTCDate();
                                            const mesSolicitado = fechaIngresada.getUTCMonth() + 1; // Los meses en JS son de 0 a 11
                                            const añoSolicitado = fechaIngresada.getUTCFullYear();
                                            const articulo = watch("licencia");
                                            let cantidadMesSolicitado = 0;
                                            let cantidadArticulo17 = 0;

                                            if (historialLicencias.length > 0) {
                                                historialLicencias.forEach(licencia => {
                                                    let articuloLicencia = licencia.licencia;
                                                    let fecha = new Date(licencia.fecha);
                                                    let mesLicencia = fecha.getUTCMonth() + 1;
                                                    let añoLicencia = fecha.getUTCFullYear();
                                                    let diaLicencia = fecha.getUTCDate();

                                                    if (mesLicencia === mesSolicitado && articuloLicencia === articulo) {
                                                        cantidadMesSolicitado++;
                                                    }
                                                    if (articuloLicencia === "Articulo N° 17" && añoLicencia === añoSolicitado) {
                                                        cantidadArticulo17++;
                                                    }
                                                });
                                            }

                                            // Verifica si la fecha ingresada es anterior a la fecha actual
                                            if (fechaIngresada < fechaActual) {
                                                console.log(fechaIngresada);
                                                console.log(fechaActual);
                                                return 'La fecha ingresada no puede ser anterior a la fecha actual';
                                            }

                                            // Verifica la cantidad de solicitudes por mes y por artículo
                                            if (articulo === "Articulo N° 30" && cantidadMesSolicitado >= 1) {
                                                return 'Solo puedes solicitar un artículo N° 30 por mes';
                                            } else if (articulo === "Articulo N° 17" && cantidadMesSolicitado >= 2) {
                                                return 'Solo puedes solicitar hasta dos artículos N° 17 por mes';
                                            }

                                            // Verifica el límite anual para el artículo 17
                                            if (articulo === "Articulo N° 17" && cantidadArticulo17 >= 7) {
                                                return 'Solo puedes solicitar hasta 7 artículos N° 17 por año';
                                            }

                                            return true;
                                        }
                                    })}
                                />
                                <span className={errors.fecha ? styles.error : styles.hiddenSpan}>{errors.fecha && errors.fecha.message}</span>
                            </div>
                        </div>
                        {/* BOTON SOLICITAR */}
                        <div className={styles.enviar}>
                            <button type="submit">SOLICITAR LICENCIA</button>
                        </div>

                    </form>
                </div>
            </>
        )
    }
}