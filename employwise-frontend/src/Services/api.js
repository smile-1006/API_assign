import axios from 'axios';

const BASE_URL = 'https://reqres.in/api';

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, { email, password });
        return response.data.token;
    } catch (error) {
        throw error.response?.data?.error || 'Login failed!';
    }
};

export const getUsers = async (page = 1) => {
    try {
        const response = await axios.get(`${BASE_URL}/users?page=${page}`);
        return response.data;
    } catch (error) {
        throw error.response?.data?.error || 'Failed to fetch users!';
    }
};

export const updateUser = async (id, userData) => {
    try {
        await axios.put(`${BASE_URL}/users/${id}`, userData);
    } catch (error) {
        throw error.response?.data?.error || 'Update failed!';
    }
};

export const deleteUser = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/users/${id}`);
    } catch (error) {
        throw error.response?.data?.error || 'Delete failed!';
    }
};
