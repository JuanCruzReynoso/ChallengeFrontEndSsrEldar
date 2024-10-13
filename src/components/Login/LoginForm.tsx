import React, { useState } from 'react';
import { useAuthContext } from '../../contexts/useAuthContext';
import { useNavigate } from 'react-router-dom';
import { Box, TextField } from '@mui/material';
import { Login as LoginIcon } from '@mui/icons-material';
import CustomButton from '../common/Button';
import Loader from '../common/Loader';
import ErrorMessage from '../common/AlertMessage';
import Logo from '../../assets/images/eldar-logo.png';

const LoginForm: React.FC = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUsernameError(false);
    setPasswordError(false);

    if (!username) {
      setUsernameError(true);
      setError('Por favor, completa todos los campos.');
      setLoading(false);
      return;
    }

    if (!password) {
      setPasswordError(true);
      setError('Por favor, completa todos los campos.');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setPasswordError(true);
      setError('La contraseña debe tener al menos 6 caracteres.');
      setLoading(false);
      return;
    }

    try {
      await login(username, password);
      navigate('/');
    } catch {
      setError('Credenciales incorrectas.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        width: '100%',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        minHeight: '300px',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <img src={Logo} alt="Logo de Eldar" style={{ width: '150px', marginBottom: '20px' }} />
      </Box>
      <TextField
        label="Usuario"
        variant="outlined"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
          setUsernameError(false);
        }}
        fullWidth
        required
        error={usernameError}
      />
      <TextField
        label="Contraseña"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setPasswordError(false);
        }}
        fullWidth
        required
        error={passwordError}
      />
      {loading ? (
        <Loader />
      ) : (
        <CustomButton type="submit" startIcon={<LoginIcon />} sx={{ width: '100%' }}>
          Iniciar Sesión
        </CustomButton>
      )}
      <Box sx={{ height: '90px' }}>
        {error && <ErrorMessage severity={'error'} message={error} />}
      </Box>
    </Box>
  );
};

export default LoginForm;
