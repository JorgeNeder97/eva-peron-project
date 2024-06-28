import React, { useEffect, useState } from 'react';
import styles from './ModificarNoticiaForm.module.css';
import { useForm } from 'react-hook-form';
import { modifiyRequest, noticiaParaModificarRequest } from '../../../../../../api/noticiasCRUD';
import { Modal } from '../../../../../../components/Modal/Modal';
import { Navigate, useParams } from 'react-router-dom';
import { VolverAtrasButton } from '../../../../../../components/VolverAtrasButton/VolverAtrasButton';
import { SecretariaNavBar } from '../../SecretariaNavBar/SecretariaNavBar';



export const ModificarNoticiaForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    // Se utiliza para el efecto de carga 
    const [isLoaded, setIsLoaded] = useState(false);

    // Traemos useParams() para obtener los parametros del path de la url
    const params = useParams();

    // Creamos el estado de la noticia
    const [noticia, setNoticia] = useState(null);

    // Creamos un estado de carga para la asincronía
    const [loading, setLoading] = useState(true);

    // Creamos un estado para saber si el usuario esta modificado
    const [modificado, setModificado] = useState(false);

    const [estadoModal, setEstadoModal] = useState(false);

    const [redirigir, setRedirigir] = useState(false);

    const [creado, setCreado] = useState(false);


    useEffect(() => {
        const mostrarNoticia = async () => {
            const res = await noticiaParaModificarRequest(params.id);
            setNoticia(res.data.noticia);
            setLoading(false);
        }

        mostrarNoticia();

        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 50);

        // Limpieza del timer cuando el componente se desmonta
        return () => clearTimeout(timer);
    }, [])


    const modificarNoticia = async (noticia) => {
        try {
            const res = await modifiyRequest(noticia, params.id);
            setModificado(true);
            setEstadoModal(true);
        } catch (error) {
            console.log(error);
        }
    }

    const onSubmit = handleSubmit((data) => {
        modificarNoticia(data);
    });

    const handleAceptar = (e) => {
        setRedirigir(true);
    }

    if (redirigir) return <Navigate to="/secretaria/gestionNoticias/modificarNoticias" />;

    if (loading) return (<div className={isLoaded ? styles.mainContainer : styles.unloaded}>Cargando...</div>);
    else {
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
                            <h2>¡Noticia editada con éxito!</h2>
                            <button onClick={handleAceptar}>ACEPTAR</button>
                        </Modal>
                    }
                    <div className={styles.paginaHeader}>
                        <h2 className={styles.tituloPagina}>EDITAR NOTICIA</h2>
                        <VolverAtrasButton url="/secretaria/gestionNoticias/modificarNoticias" />
                    </div>
                    <form className={styles.form} onSubmit={onSubmit} encType="multipart/form-data">

                        {/* TITULO */}
                        <div className={styles.titulo}>
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
                                        value: 100,
                                        message: 'El titulo puede contener como máximo 100 caracteres',
                                    },
                                    value: noticia.titulo,
                                })}
                            />
                            <span className={errors.titulo ? styles.error : styles.hiddenSpan}>{errors.titulo && errors.titulo.message}</span>
                        </div>


                        {/* ADELANTO */}
                        <div className={styles.adelanto}>
                            <label htmlFor="apellido">Adelanto</label>
                            <textarea
                                {...register("adelanto", {
                                    minLength: {
                                        value: 15,
                                        message: 'El adelanto debe contener al menos 15 caracteres',
                                    },
                                    maxLength: {
                                        value: 250,
                                        message: 'El adelanto puede contener como máximo 250 caracteres',
                                    },
                                    value: noticia.adelanto,
                                })}
                            />
                            <span className={errors.adelanto ? styles.error : styles.hiddenSpan}>{errors.adelanto && errors.adelanto.message}</span>
                        </div>


                        {/* CUERPO */}
                        <div className={styles.cuerpo}>
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
                                    value: noticia.cuerpo,
                                })}
                            />
                            <span className={errors.cuerpo ? styles.error : styles.hiddenSpan}>{errors.cuerpo && errors.cuerpo.message}</span>
                        </div>


                        {/* IMAGENES */}
                        <div className={styles.imagen}>
                            <label htmlFor="nombre">Cambiar la imagen (Opcional)</label>
                            <input
                                type="file"
                                accept='.jpg, .png, .jpeg, .webp, .svg'
                                {...register('nombre')}
                            />
                            <span className={errors.nombre ? styles.error : styles.hiddenSpan}>{errors.nombre && errors.nombre.message}</span>
                        </div>

                        {/* BOTON EDITAR */}
                        <div className={styles.enviar}>
                            <button type="submit">EDITAR NOTICIA</button>
                        </div>

                    </form>
                </div>
            </>
        )
    }
}
