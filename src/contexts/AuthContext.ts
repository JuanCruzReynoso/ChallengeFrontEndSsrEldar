import { createContext } from 'react';
import { User } from '../types/User';


interface AuthContextType {
  isAuthenticated: boolean;
  user: Omit<User, 'token'> | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;
