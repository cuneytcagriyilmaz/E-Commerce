 
import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://workintech-fe-ecommerce.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.request.use((config) => {
    console.log('Request:', config);
    return config;
}, (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
    console.log('Response:', response);
    return response;
}, (error) => {
    console.error('Response error:', error);
    return Promise.reject(error);
});

export default instance;
