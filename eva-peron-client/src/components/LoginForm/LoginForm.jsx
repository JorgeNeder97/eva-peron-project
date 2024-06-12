import React, { useEffect } from 'react'
import styles from './LoginForm.module.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const LoginForm = ({ urlToNavigate, loginPage, auth }) => {

    const {iniciarSesion, isAuthenticated} = auth();

    const { register, handleSubmit, formState: {errors} } = useForm();

    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (data) => {
        data.loginPage = loginPage;
        iniciarSesion(data);
    });

    useEffect(() => {
        if(isAuthenticated) navigate(urlToNavigate);
    }, [isAuthenticated]);


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
                />
                <span className={errors.usuario ? styles.error : styles.hiddenSpan}>{errors.usuario && errors.usuario.message}</span>
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
                />
                <span className={errors.contraseña ? styles.error : styles.hiddenSpan}>{errors.contraseña && errors.contraseña.message}</span>
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
