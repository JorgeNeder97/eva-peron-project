import axios from './axios';


// Enviamos una peticion post a la ruta donde se registra el usuario.
export const registerRequest = usuario => axios.post('/usuarios/register', usuario);

// Enviamos una peticion get a la ruta donde se obtienen los usuarios.
export const listRequest = () => axios.get('/usuarios/list');

// Enviamos una peticion get a la ruta donde nos devuelve el usuario a modificar
export const userToModifyRequest = (id) => axios.get(`/usuarios/userToModify/${id}`);

// Enviamos una peticion patch a la ruta donde se modifica el usuario.
export const modifiyRequest = (usuario, id) => axios.patch(`/usuarios/modify/${id}`, usuario);

// Enviamos una peticion delete a la ruta donde se elimina el usuario.
export const deleteRequest = (data) => axios.delete(`/usuarios/deleteUser/${data.id}`); 