import axios from './axios';


// Enviamos una peticion post a la ruta donde se registra el usuario.
export const registerRequest = async (usuario) => {
    return await axios.post('/usuarios/register', usuario, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

// Enviamos una peticion get a la ruta donde se obtienen los usuarios.
export const listRequest = async () => {
    return await axios.get('/usuarios/list');
}

// Enviamos una peticion get a la ruta donde nos devuelve el usuario a modificar
export const userToModifyRequest = async (id) => {
    return await axios.get(`/usuarios/userToModify/${id}`);
}

// Enviamos una peticion patch a la ruta donde se modifica el usuario.
export const modifiyRequest = async (usuario, id) => {
    return await axios.patch(`/usuarios/modify/${id}`, usuario, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

// Enviamos una peticion delete a la ruta donde se elimina el usuario.
export const deleteRequest = async (data) => {
    return await axios.delete(`/usuarios/deleteUser/${data.id}`); 
}