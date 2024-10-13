import React from 'react';
import { Box, Typography } from '@mui/material';
import LoginForm from '../components/Login/LoginForm';

const Login: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'background.default',
        padding: '20px',
      }}
    >
      {/* Mensaje de bienvenida con animación */}
      <Typography
        variant="h5"
        sx={{
          textAlign: 'center',
          marginBottom: '20px',
          fontWeight: 'bold',
          opacity: 0, // Inicia invisible
          transform: 'translateY(-20px)', // Inicia desplazado hacia arriba
          animation: 'fadeInMoveDown 1.5s ease forwards', // Aparece con movimiento
        }}
      >
        Bienvenido a mi solución del challenge frontend ssr
        <Box component="span" sx={{ animation: 'blink 1s step-end infinite' }}>.</Box>
      </Typography>

      <LoginForm />

      <Typography
        variant="body2"
        sx={{
          textAlign: 'center',
          marginTop: '40px',
          color: 'text.secondary',
        }}
      >
        Desarrollado por Juan Cruz Reynoso
      </Typography>
    </Box>
  );
};

export default Login;
