import axios from './axios';


//      ---------------GENERAL---------------

export const verifyTokenRequest = async () => {
    return await axios.get('/usuarios/verify');
}

//      -------------------------------------




//      ---------------RECTORÍA---------------

export const rectoriaLoginRequest = async (usuario) => {
    return await axios.post('/rectoria/login', usuario, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}




export const logoutRectoriaRequest = async () => {
    return await axios.post('/usuarios/logout');
}

//      --------------------------------------




//      --------------SECRETARÍA--------------

export const secretariaLoginRequest = async (usuario) => {
    return await axios.post('/secretaria/login', usuario, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}


export const verifySecretariaTokenRequest = async () => {
    return await axios.get('/secretaria/verify');
}


export const logoutSecretariaRequest = async () => {
    return await axios.post('/secretaria/logout');
}

//      ----------------------------------------




//      ------------SECCCIÓN ALUMNOS------------


export const seccionAlumnosLoginRequest = async (usuario) => {
    return await axios.post('/seccionAlumnos/login', usuario, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}


export const logoutSeccionAlumnosRequest = async () => {
    return await axios.post('/seccionAlumnos/logout');
}

//      ----------------------------------------




//      -----------ASESORÍA PEDAGÓGICA-----------

export const asesoriaPedagogicaLoginRequest = async (usuario) => {
    return await axios.post('/asesoriaPedagogica/login', usuario, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}


export const logoutAsesoriaPedagogicaRequest = async () => {
    return await axios.post('/asesoriaPedagogica/logout');
}

//      -----------------------------------------