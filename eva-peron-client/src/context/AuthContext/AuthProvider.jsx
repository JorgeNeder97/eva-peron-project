import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext';
import { loginRequest, verifyTokenRequest } from '../../api/login';
import Cookies from 'js-cookie';


export const AuthProvider = ({ children }) => {

    // Estado del usuario.
    const [usuario, setUsuario] = useState(null);

    // Estado de la carga de los datos para el checkLogin.
    const [loading, setLoading] = useState(true);

    // Estado para verificar si esta autenticado el usuario.
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [accesos, setAccesos] = useState(null);

    // Envia los datos al backend e inicia al usuario en sesión.
    const iniciarSesion = async (usuario) => {
        try {
            const res = await loginRequest(usuario);
            setUsuario(res.data);
            setAccesos(res.data.token);
            setIsAuthenticated(true);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const cookies = Cookies.get();

        const checkLogin = async (token) => {
            try {
                const res = await verifyTokenRequest(token);
                if (!res.data) {
                    setUsuario(null);
                    setLoading(false);
                    console.log('No paso la verificación');
                    return;
                }
    
                setUsuario(res.data);
                setIsAuthenticated(true);
                setLoading(false);
                console.log('Lo seteó bien');
                return;
            } catch (error) {
                setUsuario(null);
                setIsAuthenticated(false);
                setLoading(false);
                console.log('saltó el catch');
                console.log(error);
            }
        }

        if (cookies.rectoriaToken) checkLogin(cookies.rectoriaToken);
        else if (cookies.seccionAlumnosToken) checkLogin(cookies.seccionAlumnosToken);
        else if (cookies.secretariaToken) checkLogin(cookies.secretariaToken);
        else if (cookies.personalToken) checkLogin(cookies.personalToken);
        else if (cookies.asesoriaPedagogicaToken) checkLogin(cookies.asesoriaPedagogicaToken);
        else if (cookies.alumnoToken) checkLogin(cookies.alumnoToken);
        else if (cookies.docenteToken) checkLogin(cookies.docenteToken);
        else {
            setIsAuthenticated(false);
            setUsuario(null);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        console.log(usuario);
    }, [usuario]);


    return (
        <AuthContext.Provider value={{
            iniciarSesion,
            usuario,
            accesos,
            isAuthenticated,
            loading,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
