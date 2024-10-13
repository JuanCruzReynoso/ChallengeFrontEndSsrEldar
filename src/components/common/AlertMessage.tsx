import React, { useEffect } from 'react';
import Alert from '@mui/material/Alert';

interface AlertMessageProps {
  message: string;
  severity: 'error' | 'success' | 'info' | 'warning';
  duration?: number;
}

const AlertMessage: React.FC<AlertMessageProps> = ({ message, severity, duration }) => {
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  return (
    <Alert severity={severity} sx={{ margin: '20px 0', width: '100%', minHeight: '50px' }}>
      {message}
    </Alert>
  );
};

export default AlertMessage;
