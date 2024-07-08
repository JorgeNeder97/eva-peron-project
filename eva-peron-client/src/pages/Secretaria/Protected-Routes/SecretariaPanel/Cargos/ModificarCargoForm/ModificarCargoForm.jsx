import React, { useState, useEffect } from 'react';
import styles from './ModificarCargoForm.module.css';
import { useForm } from 'react-hook-form';
import { cargoParaModificarRequest, modificarCargoRequest } from '../../../../../../api/cargosCRUD';
import { Modal } from '../../../../../../components/Modal/Modal';
import { Navigate, useParams } from 'react-router-dom';
import { VolverAtrasButton } from '../../../../../../components/VolverAtrasButton/VolverAtrasButton';
import { SecretariaNavBar } from '../../SecretariaNavBar/SecretariaNavBar';




export const ModificarCargoForm = () => {

    const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm();

    const [creado, setCreado] = useState(false);
    const [estadoModal, setEstadoModal] = useState(false);
    const [redirigir, setRedirigir] = useState(false);
    const [cargo, setCargo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    const params = useParams();

    useEffect(() => {
        const mostrarCargo = async () => {
            const res = await cargoParaModificarRequest(params.id);
            setCargo(res.data.cargo);
            setLoading(false);
        }

        mostrarCargo();

        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 50);

        // Limpieza del timer cuando el componente se desmonta
        return () => clearTimeout(timer);
    }, []);

    const modificarCargo = async (data) => {
        const formData = new FormData();
        formData.append('nombre', data.nombre);

        try {
            setCreado(true);
            setEstadoModal(true);
            await modificarCargoRequest(formData, params.id);
        } catch (error) {
            console.log(error);
        }
    }

    const onSubmit = handleSubmit((data) => {
        modificarCargo(data);
    });

    const handleAceptar = (e) => {
        setRedirigir(true);
    }

    if (redirigir) return <Navigate to="/secretaria/gestionCargos/modificarCargo" />;

    // Formulario listo, ahora hay que ver como mandar la información.
    // Para el css deberas crear los divs y encerrar cada label e input, podrias usar un grid con
    // layout bonito para el form...

    if (loading) return (<div className={isLoaded ? styles.mainContainer : styles.unloaded}>Cargando...</div>);
    else {
        return (
            <>
                <SecretariaNavBar />
                <div className={isLoaded ? styles.mainContainer : styles.unloaded}>
                    {estadoModal &&
                        <Modal
                            titulo="GESTION CARGOS"
                            mostrarHeader={true}
                            estado={estadoModal}
                            cambiarEstado={setEstadoModal}
                        >
                            <h2>¡Cargo modificado con éxito!</h2>
                            <button onClick={handleAceptar}>ACEPTAR</button>
                        </Modal>
                    }
                    <div className={styles.paginaHeader}>
                        <h2 className={styles.tituloPagina}>MODIFICAR CARGO</h2>
                        <VolverAtrasButton url="/secretaria/gestionCargos/modificarCargo" />
                    </div>
                    <form className={styles.form} onSubmit={onSubmit}>

                        {/* NOMBRE */}
                        <div className={styles.cargo}>
                            <label htmlFor="nombre">Nombre del Cargo</label>
                            <input
                                type="text"
                                {...register("nombre", {
                                    required: {
                                        value: true,
                                        message: 'Debe ingresar un nuevo cargo',
                                    },
                                    minLength: {
                                        value: 3,
                                        message: 'El cargo debe contener al menos 3 caracteres',
                                    },
                                    maxLength: {
                                        value: 100,
                                        message: 'El cargo puede contener como máximo 100 caracteres',
                                    },
                                    value: cargo.nombre,
                                })}
                            />
                            <span className={errors.nombre ? styles.error : styles.hiddenSpan}>{errors.nombre && errors.nombre.message}</span>
                        </div>

                        {/* BOTON CREAR */}
                        <div className={styles.enviar}>
                            <button type="submit">MODIFICAR CARGO</button>
                        </div>

                    </form>
                </div>
            </>
        )
    }
}
