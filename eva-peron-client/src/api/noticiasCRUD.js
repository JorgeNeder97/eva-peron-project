import axios from './axios';


export const crearNoticiaRequest = async (noticia) => {
    return await axios.post('/noticias/crearNoticia', noticia, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

