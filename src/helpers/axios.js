import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import envs from '.././Config/env';

let headers = {};

const axiosInstance = axios.create({
  // baseURL: envs.BACKEND_URL,
  baseURL: 'https://ff6b-197-239-10-25.ngrok-free.app/api/',
  headers,
});
console.log(envs.BACKEND_URL);
axiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
