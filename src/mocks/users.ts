import { User } from '../types/User';

// Interfaz interna para el mock que incluye el password solo para validación interna
interface MockUser extends User {
  password: string;
}

export const mockUsers: MockUser[] = [
  {
    id: 1,
    username: 'admin',
    role: 'admin',
    password: 'admin123',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.admin.s3cr3t'
  },
  {
    id: 2,
    username: 'user',
    role: 'user',
    password: 'user123',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.user.s3cr3t'
  }
];
