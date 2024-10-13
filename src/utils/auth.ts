import Cookies from 'js-cookie';
import { encryptData, decryptData } from './encryption'; 
import { User } from '../types/User';

const TOKEN_KEY = 'token';
const USER_SESSION_KEY = 'userSession';

// Función para encriptar el token y guardarlo en una cookie
export const saveToken = (token: string) => {
  const encryptedToken = encryptData(token);
  Cookies.set(TOKEN_KEY, encryptedToken, { expires: 7, secure: true, sameSite: 'Strict' });
};

// Función para recuperar el token y desencriptarlo
export const getToken = (): string | undefined => {
  const token = Cookies.get(TOKEN_KEY);
  return token ? decryptData(token) : undefined;
};

// Función para eliminar el token
export const removeToken = () => {
  Cookies.remove(TOKEN_KEY);
};

// Función para guardar los datos del usuario (sin el token)
export const saveUserSession = (user: Omit<User, 'token'>) => { // Cambia a Omit para asegurarte de que no tenga el token
  const userData = JSON.stringify(user);
  const encryptedData = encryptData(userData); 
  sessionStorage.setItem(USER_SESSION_KEY, encryptedData);
};

// Función para recuperar y desencriptar los datos del usuario
export const getUserSession = (): Omit<User, 'token'> | null => {
  const userData = sessionStorage.getItem(USER_SESSION_KEY);
  if (userData) {
    const decryptedData = decryptData(userData); 
    return JSON.parse(decryptedData) as Omit<User, 'token'>; // Asegúrate de que sea del tipo Omit<User, 'token'>
  }
  return null;
};

// Función para eliminar los datos del usuario
export const removeUserSession = () => {
  sessionStorage.removeItem(USER_SESSION_KEY);
};
