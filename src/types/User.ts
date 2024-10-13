export interface User {
  id: number;             // ID único del usuario
  username: string;       // Nombre de usuario
  role: 'admin' | 'user'; // Rol del usuario
  token: string;          // Token de autenticación
}