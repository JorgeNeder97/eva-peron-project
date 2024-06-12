import React, { useEffect, useState } from 'react';
import styles from './ModificarUsuarioForm.module.css';
import { userToModifyRequest, modifiyRequest } from '../../../../../../api/usersCRUD';
import { useForm } from 'react-hook-form';
import { Navigate, useParams } from 'react-router-dom';
import { NavBarRectoria } from '../../NavBarRectoria/NavBarRectoria';
import { Modal } from '../../../../../../components/Modal/Modal';
import { VolverAtrasButton } from '../../../../../../components/VolverAtrasButton/VolverAtrasButton';

// Ver en internet como se trabaja con rutas parametrizadas en react.

export const ModificarUsuarioForm = () => {

    // Traemos react hook form para efectuar los cambios
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    // Se utiliza para el efecto de carga 
    const [isLoaded, setIsLoaded] = useState(false);

    // Traemos useParams() para obtener los parametros del path de la url
    const params = useParams();

    // Creamos el estado del usuario
    const [usuario, setUsuario] = useState(null);

    // Creamos un estado de carga para la asincronía
    const [loading, setLoading] = useState(true);

    // Creamos un estado para saber si el usuario esta modificado
    const [modificado, setModificado] = useState(false);

    // Creamos un estado para mostrar el modal una vez modificados los datos
    const [estadoModal, setEstadoModal] = useState(false);

    // Creamos un estado para redirigir al usuario si aprieta en aceptar en el modal
    const [redirigir, setRedirigir] = useState(false);

    useEffect(() => {
        // Función para setear el usuario
        const mostrarUsuario = async () => {
            // Traemos el usuario ayudandonos del parametro "id" del path de la url
            const res = await userToModifyRequest(params.id);
            // Lo seteamos en el estado de usuario
            setUsuario(res.data.usuario);
            // Una vez cargado el usuario le indicamos que ya no esta cargando
            setLoading(false);
        }

        mostrarUsuario();

        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 50);

        // Limpieza del timer cuando el componente se desmonta
        return () => clearTimeout(timer);
    }, []);

    // Mostrar en consola si se estan obteniendo los datos
    // if (loading) {
    //     console.log('cargando');
    // } else {
    //     console.log(usuario);
    // }

    const modificarUsuario = async (usuario) => {
        try {
            // Enviamos el usuario para ser modificado
            const res = await modifiyRequest(usuario, params.id);
            // Indicamos que fue modificado
            setModificado(true);
            setEstadoModal(true);
        } catch (error) {
            console.log(error);
        }
    }

    const onSubmit = handleSubmit((data) => {
        modificarUsuario(data);
    });

    const handleAceptar = (e) => {
        setRedirigir(true);
    }

    if (redirigir) return <Navigate to="/rectoria/gestionUsuarios/listarUsuarios" />;

    if (loading) return (<div className={isLoaded ? styles.mainContainer : styles.unloaded}>Cargando...</div>);
    else {
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
                            <h2>¡Usuario editado con éxito!</h2>
                            <button onClick={handleAceptar}>ACEPTAR</button>
                        </Modal>
                    }
                    <div className={styles.paginaHeader}>
                        <h2 className={styles.tituloPagina}>MODIFICAR USUARIO</h2>
                        <VolverAtrasButton url="/rectoria/gestionUsuarios/listarUsuarios" />
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
                                    value: usuario.nombre,
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
                                    value: usuario.apellido,
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
                                    },
                                    value: usuario.dni,
                                })}
                            />
                            <span className={errors.dni ? styles.error : styles.hiddenSpan}>{errors.dni && errors.dni.message}</span>
                        </div>


                        {/* CONTRASEÑA */}
                        <div className={styles.contraseña}>
                            <label htmlFor="contraseña">Nueva Contraseña (Opcional)</label>
                            <input
                                type="password"
                                {...register("contraseña", {
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
                            <label htmlFor="confirmContraseña">Confirmar Nueva Contraseña</label>
                            <input
                                type="password"
                                {...register("confirmContraseña", {
                                    validate: (value) => value === watch("contraseña") || 'Las contraseñas deben coincidir',
                                })}
                            />
                            <span className={errors.confirmContraseña ? styles.error : styles.hiddenSpan}>{errors.confirmContraseña && errors.confirmContraseña.message}</span>
                        </div>

                        {/* FECHA DE NACIMIENTO */}
                        <div className={styles.fechaNacimiento}>
                            <label htmlFor="fecha_nacimiento">Fecha de nacimiento</label>
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
                                    },
                                    value: usuario.fecha_nacimiento,
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
                                    },
                                    value: usuario.email,
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
                                    },
                                    value: usuario.telefono,
                                })}
                            />
                            <span className={errors.telefono ? styles.error : styles.hiddenSpan}>{errors.telefono && errors.telefono.message}</span>
                        </div>


                        {/* SEXO */}
                        <div className={styles.sexo}>
                            <label htmlFor="sexo_id">Sexo</label>
                            <select
                                {...register("sexo_id", { value: usuario.sexo_id })}
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
                                {...register("rol_id", { value: usuario.rol_id })}
                            >
                                <option value="1">Rectoría</option>
                                <option value="2">Seccion Alumnos</option>
                                <option value="3">Secretaría</option>
                                <option value="5">Asesoría Pedagógica</option>
                            </select>
                        </div>

                        <div className={styles.enviar}>
                            <button type="submit">EDITAR USUARIO</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}
