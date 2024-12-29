import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/api', // Replace with your API URL
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // Enable Cookies for API Requests
})