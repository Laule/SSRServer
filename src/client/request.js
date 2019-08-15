import axios from 'axios';

const instance = axios.create({
    baseURL: '/',
    params: {
        token: '123456'
    }
});

export default instance;