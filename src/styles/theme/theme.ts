import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196f3',  // Un tono de azul más brillante
    },
    secondary: {
      main: '#ff4081',  // Un tono de rosa más brillante
    },
    background: {
      default: '#121212',
      paper: '#1d1d1d',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '10px 20px', // Espaciado interno
          '&:hover': {
            backgroundColor: '#1976d2', // Color al pasar el ratón
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Sombra al pasar el ratón
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#2c2c2c', // Fondo oscuro para campos de texto
          borderRadius: '4px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // Sombra para el papel
        },
      },
    },
  },
});

export default theme;
