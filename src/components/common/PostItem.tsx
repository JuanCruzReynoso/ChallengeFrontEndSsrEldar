import React from 'react';
import { ListItem, ListItemText, Box } from '@mui/material';
import Button from '../common/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface PostItemProps {
  post: { id: number; title: string; body: string };
  role: 'admin' | 'user';
  onEdit: () => void;
  onDelete: () => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, role, onEdit, onDelete }) => {
  return (
    <ListItem
      sx={{
        display: 'flex',
        justifyContent: 'space-between', // Cambiado a 'center'
        alignItems: 'center', // Asegura que los elementos estén centrados verticalmente
        backgroundColor: 'background.paper',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.02)',
        },
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: '10px', sm: '0' },
      }}
    >
      <ListItemText
        primary={post.title}
        secondary={post.body}
        primaryTypographyProps={{
          variant: 'h6',
          color: 'text.primary',
          sx: { fontSize: { xs: '1.2rem', sm: '1.5rem' } },
        }}
        secondaryTypographyProps={{
          variant: 'body2',
          color: 'text.secondary',
          sx: { fontSize: { xs: '0.9rem', sm: '1rem' } },
        }}
      />
      {role === 'admin' && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: '10px',
            marginTop: { xs: '10px', sm: '0' },
            justifyContent: 'center', // Centrar botones
            alignItems: 'center', // Centrar verticalmente
            width: { xs: '100%', sm: 'auto' },
          }}
        >
          <Button
            onClick={onEdit}
            variant="outlined"
            startIcon={<EditIcon />}
            sx={{ flexGrow: 1 }}
          >
            Editar
          </Button>
          <Button
            onClick={onDelete}
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            sx={{ flexGrow: 1 }}
          >
            Eliminar
          </Button>
        </Box>
      )}
    </ListItem>
  );
};

export default PostItem;
