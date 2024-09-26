import axios from 'axios';

export const registerUser = async (data) => {
    try {
        const response = await axios.post(`/user/register`, data);
        return response.data; 
    } catch (error) {
        console.error("Registration error:", error.response.data);
        throw error.response.data;
    }
};

export const loginUser = async (data) => {
    try {
        const response = await axios.post(`/user/login`, data);
        return response.data; 
    } catch (error) {
        console.error("Login error:", error.response.data);
        throw error.response.data;
    }
};
