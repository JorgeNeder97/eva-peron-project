import axios from './axios';



// Enviamos una peticion por post a la ruta donde se inicia sesion.
export const loginRequest = usuario => axios.post(`usuarios/login`, usuario);

export const verifyTokenRequest = () => axios.get('/usuarios/verify');
