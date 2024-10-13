import React from 'react';
import { Dialog, DialogTitle, DialogActions, Button, Typography } from '@mui/material';

interface ConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ open, onClose, onConfirm }) => {
  // Maneja el evento de teclado para detectar la tecla Enter
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Evitar el comportamiento predeterminado
      onConfirm(); // Llamar a la función de confirmación
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      onKeyDown={handleKeyDown} // Agregar el evento para detectar la tecla Enter
      sx={{
        '& .MuiDialog-paper': {
          backgroundColor: '#1e1e1e',
          color: 'white',
        }
      }}
    >
      <DialogTitle sx={{ fontWeight: 'bold', textAlign: 'center', backgroundColor: '#1d1d1d' }}>
        Confirmación
      </DialogTitle>
      <Typography sx={{ padding: '16px', textAlign: 'center', backgroundColor: '#1d1d1d' }}>
        ¿Estás seguro de que deseas eliminar este post?
      </Typography>
      <DialogActions sx={{
        backgroundColor: '#1d1d1d',
        padding: { xs: '16px', sm: '24px' },
        display: 'flex',
        justifyContent: { xs: 'center', sm: 'space-between' },
        gap: '10px'
      }}>
        <Button
          onClick={onClose}
          variant='outlined'
          color="primary"
          sx={{ flex: 1 }}
        >
          Cancelar
        </Button>
        <Button
          onClick={onConfirm}
          variant='outlined'
          color="error"
          sx={{ flex: 1 }}
        >
          Eliminar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
