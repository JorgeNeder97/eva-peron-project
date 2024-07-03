import axios from './axios';


export const crearNoticiaRequest = async (noticia) => {
    return await axios.post('/noticias/crearNoticia', noticia, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

export const listarNoticiasRequest = async () => {
    return await axios.get('/noticias/list');
}

export const noticiaParaModificarRequest = async (id) => {
    return await axios.get(`/noticias/noticiaParaModificar/${id}`);
}

export const modifiyRequest = async (noticia, id) => {
    return await axios.patch(`/noticias/modify/${id}`, noticia, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    });
}

export const deleteRequest = async (data) => {
    return await axios.delete(`/noticias/delete/${data.id}`);
}