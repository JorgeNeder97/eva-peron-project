import React, { useState } from 'react';
import styles from './CrearCargoForm.module.css';
import { useForm } from 'react-hook-form';
import { useSlowLoad } from '../../../../../../hooks/useSlowLoad';
import { crearCargoRequest } from '../../../../../../api/cargosCRUD';
import { Modal } from '../../../../../../components/Modal/Modal';
import { Navigate } from 'react-router-dom';
import { VolverAtrasButton } from '../../../../../../components/VolverAtrasButton/VolverAtrasButton';
import { SecretariaNavBar } from '../../SecretariaNavBar/SecretariaNavBar';



export const CrearCargoForm = () => {

    const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm();
    const { isLoaded } = useSlowLoad();

    const [creado, setCreado] = useState(false);
    const [estadoModal, setEstadoModal] = useState(false);
    const [redirigir, setRedirigir] = useState(false);

    const crearCargo = async (data) => {
        const formData = new FormData();
        formData.append('nombre', data.nombre);

        try {
            setCreado(true);
            setEstadoModal(true);
            await crearCargoRequest(formData);
        } catch (error) {
            console.log(error);
        }
    }

    const onSubmit = handleSubmit((data) => {
        crearCargo(data);
        reset();
    });

    const handleAceptar = (e) => {
        setRedirigir(true);
    }

    if (redirigir) return <Navigate to="/secretaria/gestionCargos" />;

    // Formulario listo, ahora hay que ver como mandar la información.
    // Para el css deberas crear los divs y encerrar cada label e input, podrias usar un grid con
    // layout bonito para el form...

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
                        <h2>¡Cargo creado con éxito!</h2>
                        <button onClick={handleAceptar}>ACEPTAR</button>
                    </Modal>
                }
                <div className={styles.paginaHeader}>
                    <h2 className={styles.tituloPagina}>NUEVO CARGO</h2>
                    <VolverAtrasButton url="/secretaria/gestionCargos" />
                </div>
                <form className={styles.form} onSubmit={onSubmit}>

                    {/* NOMBRE */}
                    <div className={styles.cargo}>
                        <label htmlFor="nombre">Nombre del nuevo cargo</label>
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
                            })}
                        />
                        <span className={errors.nombre ? styles.error : styles.hiddenSpan}>{errors.nombre && errors.nombre.message}</span>
                    </div>

                    {/* BOTON CREAR */}
                    <div className={styles.enviar}>
                        <button type="submit">CREAR CARGO</button>
                    </div>

                </form>
            </div>
        </>
    )
}
