import axios from './axios';


// Enviamos una peticion por post a la ruta donde se inicia sesión.
export const loginRequest = async (usuario) => {
    return await axios.post('/usuarios/login', usuario, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

// Enviamos una peticion por get a la ruta donde verifica el token.
export const verifyTokenRequest = async () => {
    return await axios.get('/usuarios/verify');
}

// Enviamos una peticion por post a la ruta donde se cierra sesión.
export const logoutRequest = async () => {
    return await axios.post('/usuarios/logout');
}