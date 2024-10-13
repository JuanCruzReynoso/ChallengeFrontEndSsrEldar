import axios from 'axios';

// Obtengo la URL base desde las variables de entorno
const API_URL = import.meta.env.VITE_API_URL;

// Creo una instancia de Axios
const apiClient = axios.create({
  baseURL: API_URL, // Uso la variable de entorno
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para agregar el token a cada solicitud
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Agrego el token al header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
