import axios from './axios';


export const crearNoticiaRequest = noticia => {
    axios.post('/noticias/crearNoticia', noticia);
}

