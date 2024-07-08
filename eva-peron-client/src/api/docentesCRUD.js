import axios from './axios';

export const listarDocentesRequest = async () => {
    return await axios.get('/docentes/listarDocentes');
}