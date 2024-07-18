import React, { useState } from 'react';
import styles from './NuevoDocenteForm.module.css';
import { useForm } from 'react-hook-form';
import { useSlowLoad } from '../../../../../../hooks/useSlowLoad';
import { listarCargosRequest } from '../../../../../../api/cargosCRUD';
import { listarCursosRequest } from '../../../../../../api/docentesCRUD';
import { altaDocenteRequest } from '../../../../../../api/docentesCRUD';
import { Navigate } from 'react-router-dom';
import { SecretariaNavBar } from '../../SecretariaNavBar/SecretariaNavBar';
import { VolverAtrasButton } from '../../../../../../components/VolverAtrasButton/VolverAtrasButton';
import { Modal } from '../../../../../../components/Modal/Modal';
import { useEffect } from 'react';



export const NuevoDocenteForm = () => {

    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();

    const [creado, setCreado] = useState(false);
    const [estadoModal, setEstadoModal] = useState(false);
    const [redirigir, setRedirigir] = useState(false);
    const [cargos, setCargos] = useState(null);
    const [cursos, setCursos] = useState(null);
    const [cargosLoading, setCargosLoading] = useState(true);
    const [cursosLoading, setCursosLoading] = useState(true);
    const [fadeIn, setFadeIn] = useState(false);
    const [asignaturasFade, setAsignaturasFade] = useState(false);
    const [cupofFade, setCupofFade] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);


    const registrarDocente = async (data) => {
        try {
            setCreado(true);
            setEstadoModal(true);
            const res = await altaDocenteRequest(data);
        } catch (error) {
            console.log(error);
        }
    }

    const onSubmit = handleSubmit((data) => {
        registrarDocente(data);
        reset();
    });

    const handleAceptar = (e) => {
        setRedirigir(true);
    }

    useEffect(() => {
        const listarCargos = async () => {
            const response = await listarCargosRequest();
            const cargosArray = response.data.cargos;
            setCargos(cargosArray);
            setCargosLoading(false);
        }

        const listarCursos = async () => {
            const response = await listarCursosRequest();
            const cursosArray = response.data.cursos;
            setCursos(cursosArray);
            setCursosLoading(false);
        }

        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 50);

        listarCargos();
        listarCursos();
        
        // Limpieza del timer cuando el componente se desmonta
        return () => clearTimeout(timer);
    }, []);

    
    // Variables del form para los select
    const selectedCantidadCupof = watch("cantidadCupof", "");
    const selectedCargo = watch("cargo_id", "");
    const selectedSituacionRevista = watch("situacion_revista", "");
    const selectedCantidadAsignaturas = watch("cantidadAsignaturas", "");


    // Función para hacer dinámicos los cupofs
    const generarCupofsDinamicos = () => {
        const elements = [];
        for (let i = 0; i < parseInt(selectedCantidadCupof); i++) {
            const inputName = `cupof${i}`;
            const selectName = `cupof_situacion_revista${i}`
            const selectedCupofSituacionRevista = watch(selectName, "");

            elements.push(
                <div key={`input-select-${i}`} className={`${styles.fadeIn} ${cupofFade ? styles.cupofDinamicos : ''}`}>
                    <div className={styles.cupofDinamicosInput}>
                        <label htmlFor={inputName}>Cupof</label>
                        <input
                            type="text"
                            {...register(inputName, {
                                required: {
                                    value: true,
                                    message: 'Debes ingresar el cupof',
                                },
                                minLength: {
                                    value: 15,
                                    message: 'Debes ingresar un cupof válido',
                                }
                            })}
                        />
                        <span className={errors[inputName] ? styles.error : styles.hiddenSpan}>{errors[inputName] && errors[inputName].message}</span>
                    </div>

                    <div className={styles.cupofDinamicosSelect} key={`select-select-${i}`}>
                        <label htmlFor={selectName}>Situación de revista</label>
                        <select
                            {...register(selectName, {
                                required: {
                                    value: true,
                                    message: 'Debe seleccionar una opción',
                                }
                            })}
                            value={selectedCupofSituacionRevista}
                        >
                            <option value="" disabled>Seleccione una opción</option>
                            <option value="TIT">Titular</option>
                            <option value="SUP">Suplente</option>
                            <option value="INT">Interino</option>
                        </select>
                        <span className={errors[selectName] ? styles.error : styles.hiddenSpan}>{errors[selectName] && errors[selectName].message}</span>
                    </div>
                </div>
            );
        }
        return elements;
    };


    useEffect(() => {
        if (selectedCargo == 7) {
            setFadeIn(true);
        } else {
            setFadeIn(false);
        }
    }, [selectedCargo]);

    useEffect(() => {
        if(selectedCantidadAsignaturas > 0) {
            setAsignaturasFade(true);
        } else {
            setAsignaturasFade(false);
        }
    }, [selectedCantidadAsignaturas])

    useEffect(() => {
        if(selectedCantidadCupof > 0) {
            setCupofFade(true);
        } else {
            setCupofFade(false);
        }
    }, [selectedCantidadCupof]);

    // Función para hacer dinámicas las asignaturas
    const generarAsignaturasDinamicas = () => {
        const elements = [];
        for (let i = 0; i < parseInt(selectedCantidadAsignaturas); i++) {
            const inputName = `nombre_asignatura${i}`;
            const selectCurso = `curso_asignatura${i}`;
            const selectHoras = `horas_asignatura${i}`;
            const selectedCurso = watch(selectCurso, "");
            const selectedHoras = watch(selectHoras, "");

            elements.push(
                <div key={`asignatura-dinamica-${i}`} className={`${styles.fadeIn} ${asignaturasFade ? styles.asignaturasDinamicas : ''}`}>
                    <div className={styles.asignaturasDinamicasInput} key={`asignaturasInput${i}`}>
                        <label htmlFor={inputName}>Asignatura</label>
                        <input
                            type="text"
                            {...register(inputName, {
                                required: {
                                    value: true,
                                    message: 'Debes ingresar una asignatura',
                                },
                                minLength: {
                                    value: 2,
                                    message: 'Debes ingresar una asignatura válida',
                                },
                                maxLength: {
                                    value: 50,
                                    message: 'Debes ingresar una asignatura válida',
                                }
                            })}
                        />
                        <span className={errors[inputName] ? styles.error : styles.hiddenSpan}>{errors[inputName] && errors[inputName].message}</span>
                    </div>

                    <div className={styles.asignaturasDinamicasCurso} key={`asignaturasCurso${i}`}>
                        <label htmlFor={selectCurso}>Curso</label>
                        <select {...register(selectCurso, {
                            required: {
                                value: true,
                                message: 'Debes seleccionar un curso',
                            }
                        })}
                            value={selectedCurso}
                        >
                            <option value="">Seleccione un curso</option>
                            {cursos.map(curso => (
                                <option key={curso.id} value={curso.id}>{curso.año_academico} "{curso.nombre}"</option>
                            ))}
                        </select>
                        <span className={errors[selectCurso] ? styles.error : styles.hiddenSpan}>{errors[selectCurso] && errors[selectCurso].message}</span>
                    </div>

                    <div className={styles.asignaturasDinamicasHoras} key={`asignaturasHoras${i}`}>
                        <label htmlFor={selectHoras}>Horas</label>
                        <select {...register(selectHoras, {
                            required: {
                                value: true,
                                message: 'Debe seleccionar una cantidad de horas',
                            }
                        })}
                            value={selectedHoras}
                        >
                            <option value="" disabled>Seleccione la cantidad</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                        </select>
                        <span className={errors[selectHoras] ? styles.error : styles.hiddenSpan}>{errors[selectHoras] && errors[selectHoras].message}</span>
                    </div>
                </div>
            )
        }
        return elements;
    }



    if (redirigir) return <Navigate to="/secretaria/gestionDocentes" />;

    // Formulario listo, ahora hay que ver como mandar la información.
    // Para el css deberas crear los divs y encerrar cada label e input, podrias usar un grid con
    // layout bonito para el form...
    if (cargosLoading && cursosLoading) return <div>Cargando...</div>
    else return (
        <>
            <SecretariaNavBar />
            <div className={isLoaded ? styles.mainContainer : styles.unloaded}>
                {estadoModal &&
                    <Modal
                        titulo="GESTION DOCENTES"
                        mostrarHeader={true}
                        estado={estadoModal}
                        cambiarEstado={setEstadoModal}
                    >
                        <h2>¡Docente dado de alta con éxito!</h2>
                        <button onClick={handleAceptar}>ACEPTAR</button>
                    </Modal>
                }
                <div className={styles.paginaHeader}>
                    <h2 className={styles.tituloPagina}>ALTA DOCENTE</h2>
                    <VolverAtrasButton url="/secretaria/gestionDocentes" />
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

                    {/* CUIL */}
                    <div className={styles.cuil}>
                        <label htmlFor="cuil">CUIL</label>
                        <input
                            type="text"
                            {...register("cuil", {
                                required: {
                                    value: true,
                                    message: 'Debes ingresar un CUIL',
                                },
                                minLength: {
                                    value: 11,
                                    message: 'El CUIL debe contener 11 caracteres',
                                },
                                maxLength: {
                                    value: 11,
                                    message: 'El CUIL debe contener 11 caracteres',
                                },
                                pattern: {
                                    value: /([0-9]){11}/g,
                                    message: 'El CUIL no puede contener puntos ni guiones',
                                }
                            })}
                        />
                        <span className={errors.cuil ? styles.error : styles.hiddenSpan}>{errors.cuil && errors.cuil.message}</span>
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

                    {/* EDAD */}
                    <div className={styles.edad}>
                        <label htmlFor="edad">Edad</label>
                        <input
                            type="number"
                            {...register("edad", {
                                required: {
                                    value: true,
                                    message: "Debes ingresar la edad del docente",
                                },
                                minLength: {
                                    value: 1,
                                    message: 'La edad ingresada debe ser válida',
                                },
                                maxLength: {
                                    value: 2,
                                    message: 'La edad ingresada debe ser válida',
                                },
                                validate: (value) => {
                                    const edad = value;

                                    if (edad < 18) {
                                        return "El docente debe ser mayor de edad";
                                    } else if (edad > 90) {
                                        return "La edad ingresada debe ser válida";
                                    } else {
                                        return true;
                                    }
                                },
                            })}
                        />
                        <span className={errors.edad ? styles.error : styles.hiddenSpan}>{errors.edad && errors.edad.message}</span>
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

                    {/* DOMICILIO */}
                    <div className={styles.domicilio}>
                        <label htmlFor="domicilio">Domicilio</label>
                        <input
                            type="text"
                            {...register("domicilio", {
                                required: {
                                    value: true,
                                    message: 'Debes ingresar el domicilio del docente',
                                },
                                minLength: {
                                    value: 5,
                                    message: 'El domicilio puede contener como mínimo 5 caracteres',
                                },
                                maxLength: {
                                    value: 100,
                                    message: 'El domicilio puede contener como máximo 100 caracteres',
                                }
                            })}
                        />
                        <span className={errors.domicilio ? styles.error : styles.hiddenSpan}>{errors.domicilio && errors.domicilio.message}</span>
                    </div>

                    {/* TITULO */}
                    <div className={styles.tituloDocente}>
                        <label htmlFor="titulo">Título del docente</label>
                        <input
                            type="text"
                            {...register("titulo", {
                                required: {
                                    value: true,
                                    message: 'Debes ingresar el título del docente',
                                },
                                minLength: {
                                    value: 2,
                                    message: 'Debes ingresar un título válido',
                                },
                                maxLength: {
                                    value: 100,
                                    message: 'El título puede contener como máximo 100 caracteres',
                                }
                            })}
                        />
                        <span className={errors.titulo ? styles.error : styles.hiddenSpan}>{errors.titulo && errors.titulo.message}</span>
                    </div>

                    {/* FECHA PROM INICIO DOCENTE */}
                    <div className={styles.fechaPromIncDoce}>
                        <label htmlFor="fecha_prom_inc_doce">Fecha prom. inicio docencia</label>
                        <input
                            type="date"
                            {...register("fecha_prom_inc_doce", {
                                required: {
                                    value: true,
                                    message: 'Esta fecha es obligatoria',
                                },
                            })}
                        />
                        <span className={errors.fecha_prom_inc_doce ? styles.error : styles.hiddenSpan}>{errors.fecha_prom_inc_doce && errors.fecha_prom_inc_doce.message}</span>
                    </div>

                    {/* CARGO */}
                    <div className={styles.cargo}>
                        <label htmlFor="cargo_id">Cargo</label>
                        <select {...register("cargo_id", {
                            required: {
                                value: true,
                                message: 'Debes seleccionar el cargo que ocupara el docente',
                            }
                        })}
                            value={selectedCargo}
                        >
                            <option value="" disabled>Seleccione una opción</option>
                            {cargos.map(cargo => (
                                <option key={cargo.id} value={cargo.id}>{cargo.nombre}</option>
                            ))}
                        </select>
                        <span className={errors.cargo_id ? styles.error : styles.hiddenSpan}>{errors.cargo_id && errors.cargo_id.message}</span>
                    </div>

                    {/* SITUACION DE REVISTA */}
                    <div className={styles.situacionRevista}>
                        <label htmlFor="situacion_revista">Situación de revista</label>
                        <select {...register("situacion_revista")} value={selectedSituacionRevista}>
                            <option value="" disabled>Seleccione una opción</option>
                            <option value="TIT">Titular</option>
                            <option value="SUP">Suplente</option>
                            <option value="INT">Interino</option>
                        </select>
                        <span className={errors.situacion_revista ? styles.error : styles.hiddenSpan}>{errors.situacion_revista && errors.situacion_revista.message}</span>
                    </div>

                    {/* ALTA EXPEDIENTE */}
                    <div className={styles.altaExpte}>
                        <label htmlFor="alta_expte">Alta Expediente</label>
                        <input
                            type="text"
                            {...register("alta_expte", {
                                required: {
                                    value: true,
                                    message: 'Debes ingresar el expediente de alta',
                                },
                                minLength: {
                                    value: 2,
                                    message: 'Debe contener al menos dos caracteres',
                                },
                                maxLength: {
                                    value: 100,
                                    message: 'El Expediente de Alta supera los 100 caracteres',
                                }
                            })}
                        />
                        <span className={errors.alta_expte ? styles.error : styles.hiddenSpan}>{errors.alta_expte && errors.alta_expte.message}</span>
                    </div>

                    {/* FECHA DE INICIO EN EL CARGO */}
                    <div className={styles.fechaIncCargoActual}>
                        <label htmlFor="fecha_inc_cargo_actual">Fecha de inicio del cargo actual</label>
                        <input
                            type="date"
                            {...register("fecha_inc_cargo_actual", {
                                required: {
                                    value: true,
                                    message: 'La fecha de inicio del cargo actual es obligatoria',
                                },
                                validate: (value) => {
                                    const fechaIngresada = new Date(value);
                                    const fechaDeProm = new Date(watch("fecha_prom_inc_doce"));
                                    if (fechaIngresada < fechaDeProm) {
                                        return 'La fecha debe ser igual o mayor que la fecha de prom. inicio docencia';
                                    } else if (fechaIngresada >= fechaDeProm) {
                                        return true;
                                    }
                                }
                            })}
                        />
                        <span className={errors.fecha_inc_cargo_actual ? styles.error : styles.hiddenSpan}>{errors.fecha_inc_cargo_actual && errors.fecha_inc_cargo_actual.message}</span>
                    </div>

                    {/* Area de CUPOF */}
                    <div className={styles.cupofContainer}>
                        <h3 className={styles.cupofTitulo}>CUPOF</h3>
                        {/* CANTIDAD */}
                        <div className={styles.cupofCantidad}>
                            <label htmlFor="cantidadCupof">Cantidad de Cupof</label>
                            <select {...register("cantidadCupof", {
                                required: {
                                    value: true,
                                    message: 'Debes ingresar la cantidad de Cupof',
                                }
                            })}
                                value={selectedCantidadCupof}
                            >
                                <option value="" disabled>Seleccione la cantidad</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                            <span className={errors.cantidadCupof ? styles.error : styles.hiddenSpan}>{errors.cantidadCupof && errors.cantidadCupof.message}</span>
                        </div>

                        {/* CUPOF Y SITUACION DE REVISTA */}
                        <div className={styles.cupofDinamicosContainer} key={'cupofDinamicosContainerKey'}>
                            {generarCupofsDinamicos()}
                        </div>
                    </div>

                    {/* Area de ASIGNATURA (SOLO DEBE SER HABILITADA PARA CIERTOS CARGOS) */}
                    {selectedCargo == 7 &&
                            <div className={`${styles.fadeIn} ${fadeIn ? styles.asignaturasContainer : ''}`}>
                                <h3 className={styles.asignaturasTitulo}>ASIGNATURAS</h3>
                                {/* CANTIDAD DE ASIGNATURAS */}
                                <div className={styles.asignaturasCantidad}>
                                    <label htmlFor="cantidadAsignaturas">Cantidad de Asignaturas</label>
                                    <select {...register("cantidadAsignaturas", {
                                        required: {
                                            value: true,
                                            message: 'Debes ingresar la cantidad de Asignaturas',
                                        }
                                    })}
                                        value={selectedCantidadAsignaturas}
                                    >
                                        <option value="" disabled>Seleccione la cantidad</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                    <span className={errors.cantidadAsignaturas ? styles.error : styles.hiddenSpan}>{errors.cantidadAsignaturas && errors.cantidadAsignaturas.message}</span>
                                </div>

                                {/* ASIGNATURAS, CURSOS, DIVISION Y HORAS */}
                                <div className={styles.asignaturasDinamicasContainer} key={'asignaturasDinamicasContainerKey'}>
                                    {generarAsignaturasDinamicas()}
                                </div>
                            </div>
                    }

                    <div className={styles.otrosContainer}>
                        {/* Area Otros */}
                        <h3 className={styles.otrosTitulo}>OTROS</h3>
                        <div className={styles.otros}>
                            <label htmlFor="observaciones">Observaciones</label>
                            <input
                                type="text"
                                {...register("observaciones")}
                            />
                        </div>

                    </div>


                    <div className={styles.enviar}>
                        <button type="submit">DAR DE ALTA</button>
                    </div>
                </form>
            </div>
        </>
    )
}
