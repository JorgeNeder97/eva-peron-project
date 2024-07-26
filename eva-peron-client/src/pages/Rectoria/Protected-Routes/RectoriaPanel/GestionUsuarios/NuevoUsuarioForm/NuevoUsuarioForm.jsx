import React, { useState } from 'react';
import styles from './NuevoUsuarioForm.module.css';
import { useForm } from 'react-hook-form';
import { useSlowLoad } from '../../../../../../hooks/useSlowLoad';
import { registerRequest } from '../../../../../../api/usersCRUD';
import { Modal } from '../../../../../../components/Modal/Modal';
import { Navigate } from 'react-router-dom';
import { NavBarRectoria } from '../../NavBarRectoria/NavBarRectoria';
import { VolverAtrasButton } from '../../../../../../components/VolverAtrasButton/VolverAtrasButton';



export const NuevoUsuarioForm = () => {

    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const { isLoaded } = useSlowLoad();

    const [creado, setCreado] = useState(false);
    const [estadoModal, setEstadoModal] = useState(false);
    const [redirigir, setRedirigir] = useState(false);

    const registrarUsuario = async (usuario) => {
        try {
            const res = await registerRequest(usuario);
            setCreado(true);
            setEstadoModal(true);
        } catch (error) {
            console.log(error);
        }
    }

    const onSubmit = handleSubmit((data) => {
        registrarUsuario(data);
        reset();
    });

    const handleAceptar = (e) => {
        setRedirigir(true);
    }

    if (redirigir) return <Navigate to="/rectoria/gestionUsuarios" />;

    // Formulario listo, ahora hay que ver como mandar la información.
    // Para el css deberas crear los divs y encerrar cada label e input, podrias usar un grid con
    // layout bonito para el form...

    return (
        <>
            <NavBarRectoria />
            <div className={isLoaded ? styles.mainContainer : styles.unloaded}>
                {estadoModal &&
                    <Modal
                        titulo="GESTION USUARIOS"
                        mostrarHeader={true}
                        estado={estadoModal}
                        cambiarEstado={setEstadoModal}
                    >
                        <h2>¡Usuario creado con éxito!</h2>
                        <button onClick={handleAceptar}>ACEPTAR</button>
                    </Modal>
                }
                <div className={styles.paginaHeader}>
                    <h2 className={styles.tituloPagina}>NUEVO USUARIO</h2>
                    <VolverAtrasButton url="/rectoria/gestionUsuarios"/>
                </div>
                <form className={styles.form} onSubmit={onSubmit}>

                    {/* NOMBRE */}
                    <div className={styles.nombre}>
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            {...register("nombre", {
                                required: {
                                    value: true,
                                    message: 'Debe ingresar un nombre',
                                },
                                minLength: {
                                    value: 2,
                                    message: 'El nombre debe contener al menos 2 caracteres',
                                },
                                maxLength: {
                                    value: 50,
                                    message: 'El nombre puede contener como máximo 50 caracteres',
                                },
                            })}
                        />
                        <span className={errors.nombre ? styles.error : styles.hiddenSpan}>{errors.nombre && errors.nombre.message}</span>
                    </div>

                    {/* APELLIDO */}
                    <div className={styles.apellido}>
                        <label htmlFor="apellido">Apellido</label>
                        <input
                            type="text"
                            {...register("apellido", {
                                required: {
                                    value: true,
                                    message: 'Debe ingresar un apellido',
                                },
                                minLength: {
                                    value: 2,
                                    message: 'El apellido debe contener al menos 2 caracteres',
                                },
                                maxLength: {
                                    value: 50,
                                    message: 'El apellido puede contener como máximo 50 caracteres',
                                },
                            })}
                        />
                        <span className={errors.apellido ? styles.error : styles.hiddenSpan}>{errors.apellido && errors.apellido.message}</span>
                    </div>

                    {/* DNI */}
                    <div className={styles.dni}>
                        <label htmlFor="dni">Doc. Nacional de Identidad (DNI)</label>
                        <input
                            type="text"
                            {...register("dni", {
                                required: {
                                    value: true,
                                    message: 'Debe ingresar un DNI',
                                },
                                minLength: {
                                    value: 8,
                                    message: 'El DNI debe contener 8 caracteres',
                                },
                                maxLength: {
                                    value: 8,
                                    message: 'El DNI debe contener 8 caracteres',
                                },
                                pattern: {
                                    value: /([0-9]){8}/g,
                                    message: 'El DNI no puede contener puntos ni letras',
                                }
                            })}
                        />
                        <span className={errors.dni ? styles.error : styles.hiddenSpan}>{errors.dni && errors.dni.message}</span>
                    </div>


                    {/* CONTRASEÑA */}
                    <div className={styles.contraseña}>
                        <label htmlFor="contraseña">Contraseña</label>
                        <input
                            type="password"
                            {...register("contraseña", {
                                required: {
                                    value: true,
                                    message: 'Debe ingresar una contraseña',
                                },
                                minLength: {
                                    value: 8,
                                    message: 'La contraseña debe contener al menos 8 caracteres',
                                }
                            })}
                        />
                        <span className={errors.contraseña ? styles.error : styles.hiddenSpan}>{errors.contraseña && errors.contraseña.message}</span>
                    </div>

                    {/* CONFIRMACION DE CONTRASEÑA */}
                    <div className={styles.confirmarContraseña}>
                        <label htmlFor="confirmContraseña">Confirmar Contraseña</label>
                        <input
                            type="password"
                            {...register("confirmContraseña", {
                                required: {
                                    value: true,
                                    message: 'Debe confirmar su contraseña',
                                },
                                validate: (value) => value === watch("contraseña") || 'Las contraseñas deben coincidir',
                            })}
                        />
                        <span className={errors.confirmContraseña ? styles.error : styles.hiddenSpan}>{errors.confirmContraseña && errors.confirmContraseña.message}</span>
                    </div>

                    {/* FECHA DE NACIMIENTO */}
                    <div className={styles.fechaNacimiento}>
                        <label htmlFor="fecha_nacimiento">Fecha de nacimiento (mes/día/año)</label>
                        <input
                            type="date"
                            {...register("fecha_nacimiento", {
                                required: {
                                    value: true,
                                    message: "La Fecha de nacimiento es obligatoria",
                                },
                                validate: (value) => {
                                    const fechaDeNacimiento = new Date(value);
                                    const fechaActual = new Date();
                                    const edad = fechaActual.getFullYear() - fechaDeNacimiento.getFullYear();

                                    if (edad > 100) {
                                        return "Debes ingresar una fecha de nacimiento válida";
                                    } else if (edad >= 16) {
                                        return true;
                                    } else {
                                        return "El usuario debe ser un mayor de edad"
                                    }
                                }
                            })}
                        />
                        <span className={errors.fechaNacimiento ? styles.error : styles.hiddenSpan}>{errors.fechaNacimiento && errors.fechaNacimiento.message}</span>
                    </div>


                    {/* EMAIL */}
                    <div className={styles.email}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Debes ingresar un correo electrónico',
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/,
                                    message: 'Debes ingresar un correo electrónico válido'
                                }
                            })}
                        />
                        <span className={errors.email ? styles.error : styles.hiddenSpan}>{errors.email && errors.email.message}</span>
                    </div>

                    {/* TELEFONO */}
                    <div className={styles.telefono}>
                        <label htmlFor="telefono">Teléfono</label>
                        <input
                            type="text"
                            {...register("telefono", {
                                required: {
                                    value: true,
                                    message: 'Debes ingresar un número de teléfono',
                                },
                                minLength: {
                                    value: 10,
                                    message: 'El teléfono debe contener como mínimo 10 caracteres',
                                },
                                maxLength: {
                                    value: 12,
                                    message: 'El teléfono no puede contener como máximo 12 caracteres',
                                },
                                pattern: {
                                    value: /^[0-9]{10,12}/,
                                    message: 'Debes ingresar un número de teléfono válido \n Ejemplo de un teléfono válido: 3854134253 \n Ejemplo de un teléfono no válido: +54 385 154-234186'
                                }
                            })}
                        />
                        <span className={errors.telefono ? styles.error : styles.hiddenSpan}>{errors.telefono && errors.telefono.message}</span>
                    </div>


                    {/* SEXO */}
                    <div className={styles.sexo}>
                        <label htmlFor="sexo_id">Sexo</label>
                        <select
                            {...register("sexo_id")}
                        >
                            <option value="3">Sin información</option>
                            <option value="1">Masculino</option>
                            <option value="2">Femenino</option>
                        </select>
                    </div>

                    {/* ROL */}
                    <div className={styles.rol}>
                        <label htmlFor="rol_id">Rol del usuario</label>
                        <select
                            {...register("rol_id")}
                        >
                            <option value="1">Rectoría</option>
                            <option value="2">Seccion Alumnos</option>
                            <option value="3">Secretaría</option>
                            <option value="4">Asesoría Pedagógica</option>
                        </select>
                    </div>

                    <div className={styles.enviar}>
                        <button type="submit">CREAR USUARIO</button>
                    </div>
                </form>
            </div>
        </>
    )
}
