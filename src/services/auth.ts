import { mockUsers } from '../mocks/users';
import { User } from '../types/User';

export const mockLogin = async (username: string, password: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUsers.find(u => u.username === username && u.password === password);
      
      if (user) {
        // Crea una instancia de User usando las propiedades públicas
        const userInstance: User = {
          id: user.id,
          username: user.username,
          role: user.role,
          token: user.token
        };
        resolve(userInstance); // Resuelve con la instancia de User
      } else {
        reject('Credenciales incorrectas');
      }
    }, 1000);
  });
};

export const mockValidateToken = (token: string): User | null => {
  const user = mockUsers.find(u => u.token === token);
  if (user) {
    // Crea y retorna una instancia de User sin el password
    return {
      id: user.id,
      username: user.username,
      role: user.role,
      token: user.token
    };
  }
  return null;
};
