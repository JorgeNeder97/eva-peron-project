import axios from './axios';


//      ---------------GENERAL---------------

export const verifyTokenRequest = async () => {
    return await axios.get('/api/usuarios/verify');
}

//      -------------------------------------




//      ---------------RECTORÍA---------------

export const rectoriaLoginRequest = async (usuario) => {
    return await axios.post('/api/rectoria/login', usuario, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}




export const logoutRectoriaRequest = async () => {
    return await axios.post('/api/usuarios/logout');
}

//      --------------------------------------




//      --------------SECRETARÍA--------------

export const secretariaLoginRequest = async (usuario) => {
    return await axios.post('/api/secretaria/login', usuario, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}


export const verifySecretariaTokenRequest = async () => {
    return await axios.get('/api/secretaria/verify');
}


export const logoutSecretariaRequest = async () => {
    return await axios.post('/api/secretaria/logout');
}

//      ----------------------------------------




//      ------------SECCCIÓN ALUMNOS------------


export const seccionAlumnosLoginRequest = async (usuario) => {
    return await axios.post('/api/seccionAlumnos/login', usuario, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}


export const logoutSeccionAlumnosRequest = async () => {
    return await axios.post('/api/seccionAlumnos/logout');
}

//      ----------------------------------------




//      -----------ASESORÍA PEDAGÓGICA-----------

export const asesoriaPedagogicaLoginRequest = async (usuario) => {
    return await axios.post('/api/asesoriaPedagogica/login', usuario, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}


export const logoutAsesoriaPedagogicaRequest = async () => {
    return await axios.post('/api/asesoriaPedagogica/logout');
}

//      -----------------------------------------