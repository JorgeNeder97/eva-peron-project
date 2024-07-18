import axios from './axios';

export const listarDocentesRequest = async () => {
    return await axios.get('secretaria/docentes/listarDocentes');
}

// Este request se usa en el formulario de alta de docentes
export const listarCursosRequest = async () => {
    return await axios.get('secretaria/cursos/listarCursos');
}

export const altaDocenteRequest = async (docente) => {
    return await axios.post('/secretaria/docentes/altaDocente', docente, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

export const docenteParaModificarRequest = async (id) => {
    return await axios.get(`/secretaria/docentes/docenteParaModificar/${id}`);
}

export const modificarDocenteRequest = async (docente, id) => {
    return await axios.patch(`/secretaria/docentes/modificarDocente/${id}`, docente, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}