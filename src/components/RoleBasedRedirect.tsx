import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/useAuthContext';

const RoleBasedRedirect: React.FC = () => {
  const { user } = useAuthContext(); // Obtiene los datos del usuario del contexto de autenticación
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      // Redirigir según el rol del usuario
      if (user.role === 'admin') {
        navigate('/admin');
      } else if (user.role === 'user') {
        navigate('/user');
      }
    }
  }, [user, navigate]);

  return null;
};

export default RoleBasedRedirect;
