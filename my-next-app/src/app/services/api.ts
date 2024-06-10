import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const login = async (username: string, password: string) => {
    return api.post('http://localhost:8000/api/users/login/', {
        username,
        password,
    });
};

export const register = async (username: string, password: string, email: string) => {
    return api.post('http://localhost:8000/api/users/register/', {
        username,
        password,
        email,
    });
};