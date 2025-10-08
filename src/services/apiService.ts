import axios, { AxiosError } from 'axios';

const apiService = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Interceptor de respuesta para tipar errores globalmente
// const err = error as AxiosError<{ message: string }>;
apiService.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error as AxiosError);
    }
    return Promise.reject(error);
  },
);

export { apiService };
