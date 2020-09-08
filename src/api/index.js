import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const client = axios.create({
    baseURL : API_BASE_URL,
    headers : {
        'Content-Type' : 'application/json',
    }
})

export const fetchTasks = () => {
    return client.get('/tasks');
}