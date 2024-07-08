import axios from './axios';


// Enviamos una peticion por post a la ruta donde se inicia sesión.
export const rectoriaLoginRequest = async (usuario) => {
    return await axios.post('/rectoria/login', usuario, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

export const seccionAlumnosLoginRequest = async (usuario) => {
    return await axios.post('/seccionAlumnos/login', usuario, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

export const secretariaLoginRequest = async (usuario) => {
    return await axios.post('/secretaria/login', usuario, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

export const asesoriaPedagogicaLoginRequest = async (usuario) => {
    return await axios.post('/asesoriaPedagogica/login', usuario, {
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