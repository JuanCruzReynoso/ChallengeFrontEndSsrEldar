import { useState, useEffect } from 'react';
import { User } from '../types/User';
import { mockLogin } from '../services/auth'; 
import { saveToken, removeToken, getToken, saveUserSession, getUserSession, removeUserSession } from '../utils/auth'; 

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const storedUser = getUserSession();
    const token = getToken();
    return !!(storedUser && token); // Inicializa el estado basándose en si hay usuario y token
  });

  const [user, setUser] = useState<Omit<User, 'token'> | null>(null); // Mantiene solo los datos de user sin el token

  // Función para manejar el login
  const login = async (username: string, password: string) => {
    try {
      const loggedUser = await mockLogin(username, password); // Llamo a la API simulada
      saveToken(loggedUser.token); // Guardo el token en las cookies

      // Crea el objeto sin el token
      const userData: Omit<User, 'token'> = {
        id: loggedUser.id,
        username: loggedUser.username,
        role: loggedUser.role,
      };

      setUser(userData); // Guardo los datos del usuario en el estado
      setIsAuthenticated(true);
      saveUserSession(userData); // Guardo solo los datos del usuario (sin el token) en la sesión
    } catch (error) {
      throw new Error('Error en el inicio de sesión: ' + error);
    }
  };

  // Función para manejar el logout
  const logout = () => {
    removeToken(); // Elimino el token de las cookies
    removeUserSession(); // Elimino los datos del usuario de sessionStorage
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const storedUser = getUserSession();
    const token = getToken();

    if (storedUser && token) {
      setUser(storedUser);
      setIsAuthenticated(true);
    } else {
      setUser(null);
      setIsAuthenticated(false);
    } 
  }, []);

  return { isAuthenticated, user, login, logout };
};
