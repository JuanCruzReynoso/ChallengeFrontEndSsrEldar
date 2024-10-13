import React, { useState, useEffect } from 'react';
import { Button, TextField, Box, Dialog, DialogTitle, DialogActions } from '@mui/material';

interface PostFormProps {
  onSubmit: (post: { title: string; body: string }) => void;
  existingPost: { title: string; body: string } | null;
  open: boolean;
  onClose: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ onSubmit, existingPost, open, onClose }) => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [titleError, setTitleError] = useState<boolean>(false);
  const [bodyError, setBodyError] = useState<boolean>(false);

  useEffect(() => {
    if (existingPost) {
      setTitle(existingPost.title);
      setBody(existingPost.body);
    } else {
      setTitle('');
      setBody('');
    }
  }, [existingPost]);

  const handleSubmit = () => {
    setTitleError(false);
    setBodyError(false);

    if (!title) {
      setTitleError(true);
    }
    if (!body) {
      setBodyError(true);
    }

    if (!title || !body) return;

    onSubmit({ title, body });
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDialog-paper': {
          backgroundColor: '#1d1d1d',
          color: 'white',
          minWidth: '400px',
          minHeight: '300px',
        }
      }}
    >
      <DialogTitle sx={{ fontWeight: 'bold', textAlign: 'center', backgroundColor: '#1d1d1d' }}>
        {existingPost ? 'Actualizar Post' : 'Crear Post'}
      </DialogTitle>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', padding: 2, backgroundColor: '#1d1d1d' }}>
        <TextField
          label="Título"
          variant="outlined"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (e.target.value) setTitleError(false);
          }}
          margin="normal"
          sx={{ backgroundColor: '#2c2c2c', color: 'white', borderColor: titleError ? 'red' : 'inherit' }}
          error={titleError}
        />
        <TextField
          label="Contenido"
          variant="outlined"
          multiline
          rows={4}
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
            if (e.target.value) setBodyError(false);
          }}
          margin="normal"
          sx={{ backgroundColor: '#2c2c2c', color: 'white', borderColor: bodyError ? 'red' : 'inherit' }}
          error={bodyError}
        />
      </Box>
      <DialogActions sx={{
        backgroundColor: '#1d1d1d',
        padding: { xs: '16px', sm: '24px' },
        display: 'flex',
        justifyContent: { xs: 'center', sm: 'space-between' },
        gap: '10px',
      }}>
        <Button
          onClick={onClose}
          variant="outlined"
          color="primary"
          sx={{ flex: 1 }}
        >
          Cancelar
        </Button>
        <Button
          variant="outlined"
          color='success'
          onClick={handleSubmit}
          sx={{ flex: 1 }}
        >
          {existingPost ? 'Actualizar' : 'Crear'}
        </Button>
      </DialogActions>

    </Dialog>
  );
};

export default PostForm;
