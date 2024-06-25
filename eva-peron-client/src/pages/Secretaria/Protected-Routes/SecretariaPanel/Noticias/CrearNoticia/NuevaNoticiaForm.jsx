import React, { useState } from 'react';
import styles from './NuevaNoticiaForm.module.css';
import { useForm } from 'react-hook-form';
import { useSlowLoad } from '../../../../../../hooks/useSlowLoad';
import { crearNoticiaRequest } from '../../../../../../api/noticiasCRUD';
import { Modal } from '../../../../../../components/Modal/Modal';
import { Navigate } from 'react-router-dom';
import { VolverAtrasButton } from '../../../../../../components/VolverAtrasButton/VolverAtrasButton';
import { SecretariaNavBar } from '../../SecretariaNavBar/SecretariaNavBar';



export const NuevaNoticiaForm = () => {

    const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm();
    const { isLoaded } = useSlowLoad();

    const [creado, setCreado] = useState(false);
    const [estadoModal, setEstadoModal] = useState(false);
    const [redirigir, setRedirigir] = useState(false);

    const registrarNoticia = async (noticia) => {
        try {
            crearNoticiaRequest(noticia);
            setCreado(true);
            setEstadoModal(true);
        } catch (error) {
            console.log(error);
        }
    }

    const onSubmit = handleSubmit((data) => {
        registrarNoticia(data);
        reset();
    });

    const imageOnChange = (e) => {
        setValue('nombre', e.target.files[0].name);
    }

    const handleAceptar = (e) => {
        setRedirigir(true);
    }

    if (redirigir) return <Navigate to="/secretaria/gestionNoticias" />;

    // Formulario listo, ahora hay que ver como mandar la información.
    // Para el css deberas crear los divs y encerrar cada label e input, podrias usar un grid con
    // layout bonito para el form...

    return (
        <>
            <SecretariaNavBar />
            <div className={isLoaded ? styles.mainContainer : styles.unloaded}>
                {estadoModal &&
                    <Modal
                        titulo="GESTION NOTICIAS"
                        mostrarHeader={true}
                        estado={estadoModal}
                        cambiarEstado={setEstadoModal}
                    >
                        <h2>¡Noticia creada con éxito!</h2>
                        <button onClick={handleAceptar}>ACEPTAR</button>
                    </Modal>
                }
                <div className={styles.paginaHeader}>
                    <h2 className={styles.tituloPagina}>NUEVA NOTICIA</h2>
                    <VolverAtrasButton url="/secretaria/gestionNoticias" />
                </div>
                <form className={styles.form} onSubmit={onSubmit} encType="multipart/form-data">

                    {/* TITULO */}
                    <div className={styles.nombre}>
                        <label htmlFor="titulo">Titulo</label>
                        <input
                            type="text"
                            {...register("titulo", {
                                required: {
                                    value: true,
                                    message: 'Debe ingresar un titulo para la noticia',
                                },
                                minLength: {
                                    value: 3,
                                    message: 'El titulo debe contener al menos 3 caracteres',
                                },
                                maxLength: {
                                    value: 83,
                                    message: 'El titulo puede contener como máximo 83 caracteres',
                                },
                            })}
                        />
                        <span className={errors.titulo ? styles.error : styles.hiddenSpan}>{errors.titulo && errors.titulo.message}</span>
                    </div>


                    {/* ADELANTO */}
                    <div className={styles.apellido}>
                        <label htmlFor="apellido">Adelanto</label>
                        <textarea
                            {...register("adelanto", {
                                minLength: {
                                    value: 15,
                                    message: 'El adelanto debe contener al menos 15 caracteres',
                                },
                                maxLength: {
                                    value: 200,
                                    message: 'El adelanto puede contener como máximo 200 caracteres',
                                },
                            })}
                        />
                        <span className={errors.adelanto ? styles.error : styles.hiddenSpan}>{errors.adelanto && errors.adelanto.message}</span>
                    </div>


                    {/* CUERPO */}
                    <div className={styles.dni}>
                        <label htmlFor="cuerpo">Cuerpo</label>
                        <textarea
                            {...register("cuerpo", {
                                required: {
                                    value: true,
                                    message: 'Debe ingresar contenido a la noticia',
                                },
                                minLength: {
                                    value: 50,
                                    message: 'El cuerpo debe contener al menos 50 caracteres',
                                },
                            })}
                        />
                        <span className={errors.cuerpo ? styles.error : styles.hiddenSpan}>{errors.cuerpo && errors.cuerpo.message}</span>
                    </div>


                    {/* IMAGENES */}
                    <div className={styles.contraseña}>
                        <label htmlFor="nombre">Imagenes</label>
                        <input
                            type="file"
                            accept='.jpg, .png, .jpeg, .webp, .svg'
                            onChange={imageOnChange}
                            {...register('nombre', {
                                required: {
                                    value: true,
                                    message: 'Debes subir una foto para la noticia',
                                },
                            })}
                        />
                        <span className={errors.nombre ? styles.error : styles.hiddenSpan}>{errors.nombre && errors.nombre.message}</span>
                    </div>

                    {/* BOTON CREAR */}
                    <div className={styles.enviar}>
                        <button type="submit">CREAR NOTICIA</button>
                    </div>

                </form>
            </div>
        </>
    )
}
