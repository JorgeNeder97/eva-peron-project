import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://server.escuelaevaperon.com',
    withCredentials: true,
    headers: {
        'Content-Type': 'multipart/form-data',
    }
});

export default instance;