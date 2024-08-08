import axios from './axios';


export const crearNoticiaRequest = async (noticia) => {
    return await axios.post('/api/noticias/crearNoticia', noticia, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

export const listarNoticiasRequest = async () => {
    return await axios.get('/api/noticias/list');
}

export const listarNoticiaRequest = async (id) => {
    return await axios.get(`/api/noticias/list/${id}`);
}

export const lastestListRequest = async () => {
    return await axios.get('/api/noticias/lastestList')
}

export const noticiaParaModificarRequest = async (id) => {
    return await axios.get(`/api/noticias/noticiaParaModificar/${id}`);
}

export const modifiyRequest = async (noticia, id) => {
    return await axios.patch(`/api/noticias/modify/${id}`, noticia, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    });
}

export const deleteRequest = async (data) => {
    return await axios.delete(`/api/noticias/delete/${data.id}`);
}