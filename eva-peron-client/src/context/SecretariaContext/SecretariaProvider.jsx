import React, { useEffect, useState } from 'react'
import { SecretariaContext } from './SecretariaContext';
import { secretariaLoginRequest, verifySecretariaTokenRequest } from '../../api/login';
import Cookies from 'js-cookie';


export const SecretariaProvider = ({ children }) => {

    // Estado del usuario.
    const [usuario, setUsuario] = useState(null);

    // Estado de la carga de los datos para el checkLogin.
    const [loading, setLoading] = useState(true);

    // Estado para verificar si esta autenticado el usuario.
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [accesos, setAccesos] = useState(null);

    const [errores, setErrores] = useState(null);

    // Envia los datos al backend e inicia al usuario en sesión.
    const iniciarSesion = async (usuario) => {
        try {
            const res = await secretariaLoginRequest(usuario);
            if (res.data.errors) {
                setUsuario(null);
                setAccesos(null);
                setIsAuthenticated(false);
                setErrores(res.data.errors);
            } else if(res.data.token) {
                setUsuario(res.data);
                setAccesos(res.data.token);
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const secretariaToken = Cookies.get('secretariaToken');
        const personalToken = Cookies.get('personalToken');

        const checkLogin = async (token) => {
            try {
                const res = await verifySecretariaTokenRequest(token);
                if (!res.data) {
                    setUsuario(null);
                    setLoading(false);
                    return;
                }
    
                setUsuario(res.data);
                setIsAuthenticated(true);
                setLoading(false);
                return;
            } catch (error) {
                setUsuario(null);
                setIsAuthenticated(false);
                setLoading(false);
                console.log(error);
            }
        }

        if (personalToken) checkLogin(personalToken);
        else if (secretariaToken) checkLogin(secretariaToken);
        else {
            setIsAuthenticated(false);
            setUsuario(null);
            setLoading(false);
        }
    }, []);


    return (
        <SecretariaContext.Provider value={{
            iniciarSesion,
            usuario,
            accesos,
            isAuthenticated,
            loading,
            errores,
            setErrores,
        }}>
            {children}
        </SecretariaContext.Provider>
    )
}
