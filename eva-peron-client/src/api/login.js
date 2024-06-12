import axios from './axios';


// Enviamos una peticion por post a la ruta donde se inicia sesión.
export const loginRequest = usuario => axios.post('/usuarios/login', usuario);

// Enviamos una peticion por get a la ruta donde verifica el token.
export const verifyTokenRequest = () => axios.get('/usuarios/verify');

// Enviamos una peticion por post a la ruta donde se cierra sesión.
export const logoutRequest = () => axios.post('/usuarios/logout');
