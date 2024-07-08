import React, { useEffect, useState } from 'react'
import { AsesoriaPedagogicaContext } from './AsesoriaPedagogicaContext';
import { asesoriaPedagogicaLoginRequest, verifyTokenRequest } from '../../api/login';
import Cookies from 'js-cookie';


export const AsesoriaPedagogicaProvider = ({ children }) => {

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
            const res = await asesoriaPedagogicaLoginRequest(usuario);
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
        const asesoriaPedagogicaToken = Cookies.get('asesoriaPedagogicaToken');
        const docenteToken = Cookies.get('docenteToken');

        const checkLogin = async (token) => {
            try {
                const res = await verifyTokenRequest(token);
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

        if (asesoriaPedagogicaToken) checkLogin(asesoriaPedagogicaToken);
        else if(docenteToken) checkLogin(docenteToken);
        else {
            setIsAuthenticated(false);
            setUsuario(null);
            setLoading(false);
        }
    }, []);

    // useEffect(() => {
    //     console.log(usuario);
    // }, [usuario]);


    return (
        <AsesoriaPedagogicaContext.Provider value={{
            iniciarSesion,
            usuario,
            accesos,
            isAuthenticated,
            loading,
            errores,
            setErrores,
        }}>
            {children}
        </AsesoriaPedagogicaContext.Provider>
    )
}
