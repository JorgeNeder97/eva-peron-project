import React, { useEffect } from 'react'
import styles from './LoginForm.module.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Cookies from 'js-cookie';

export const LoginForm = ({ urlToNavigate, loginPage, auth, urlAlter }) => {

    const { iniciarSesion, isAuthenticated, errores, setErrores, usuario } = auth();

    const { register, handleSubmit, formState: { errors }, clearErrors } = useForm();

    const [cargando, setCargando] = useState(true);

    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (data) => {
        data.loginPage = loginPage;
        iniciarSesion(data);
    });

    useEffect(() => {
        const secretariaToken = Cookies.get('secretariaToken');
        const rectoriaToken = Cookies.get('rectoriaToken');
        const seccionAlumnosToken = Cookies.get('seccionAlumnosToken');
        const asesoriaPedagogicaToken = Cookies.get('asesoriaPedagogicaToken');
        const personalToken = Cookies.get('personalToken');

        if (isAuthenticated) {
            if (secretariaToken || rectoriaToken || seccionAlumnosToken || asesoriaPedagogicaToken) {
                navigate(urlToNavigate);
            } else if (personalToken) {
                navigate(urlAlter);
            }
        }
    }, [isAuthenticated, navigate, urlToNavigate, urlAlter]);

    useEffect(() => {
        if (errores != null) setCargando(false);
    }, [errores]);

    // Ahora funciona pero me sigue tirando el error del required de contraseña del frontend cuando trato de ingresar la primera vez una contraseña
    const handleInputChange = (campo) => {
        if(errors[campo]) clearErrors(campo)
        if(errores) setErrores(null);
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.groupToWrite} id="accesoUsuarios">
                <label htmlFor="accesoUsuarios" className={styles.label}>Acceso de usuarios</label>
                <input
                    type="text"
                    placeholder="Usuario"
                    className={styles.input}
                    {...register("usuario", {
                        required: {
                            value: true,
                            message: 'Debes ingresar un usuario',
                        },
                        minLength: {
                            value: 8,
                            message: 'Debe ingresar un usuario válido',
                        },
                        maxLength: {
                            value: 8,
                            message: 'Debe ingresar un usuario válido',
                        }
                    })}
                    onInput={() => handleInputChange("usuario")}
                />
                <div className={styles.errorsSpot}>
                    <span className={errors.usuario ? styles.error : styles.hiddenSpan}>{errors.usuario && errors.usuario.message}</span>
                    {cargando ? <span className={styles.hiddenSpan}></span> : <span className={errores && errores.usuario ? styles.error : styles.hiddenSpan}>{errores && errores.usuario && errores.usuario.msg}</span>}
                </div>

                <input
                    type="password"
                    placeholder="Contraseña"
                    className={styles.input}
                    {...register("contraseña", {
                        required: {
                            value: true,
                            message: 'Debe ingresar una contraseña',
                        },
                        minLength: {
                            value: 6,
                            message: 'Debe ingresar una contraseña válida',
                        }
                    })}
                    onInput={() => handleInputChange("contraseña")}
                />
                <div className={styles.errorsSpot}>
                    <span className={errors.contraseña ? styles.error : styles.hiddenSpan}>{errors.contraseña && errors.contraseña.message}</span>
                    {cargando ? <span className={styles.hiddenSpan}></span> : <span className={errores && errores.contraseña ? styles.error : styles.hiddenSpan}>{errores && errores.contraseña && errores.contraseña.msg}</span>}
                </div>
            </div>
            <div className={styles.groupToCheck}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    {...register("recuerdame")}
                />
                <label htmlFor="remember">Recuerdame</label>
            </div>
            <button className={styles.submitButton} type="submit">Iniciar Sesión</button>
        </form>
    )
}
