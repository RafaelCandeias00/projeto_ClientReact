import axios from 'axios';

var api = axios.create({
    /** Acessando API */
    baseURL: 'https://localhost:5001/api',
})

export default api;