import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import usePosts from '../hooks/usePosts';
import PostList from '../components/common/PostList';
import PostForm from '../components/AdminDashBoard/PostForm';
import Header from '../components/common/Header';
import Loader from '../components/common/Loader';
import ErrorMessage from '../components/common/AlertMessage';
import Button from '../components/common/Button';
import ConfirmationDialog from '../components/AdminDashBoard/ConfirmationDialog';
import AlertMessage from '../components/common/AlertMessage';
import AddIcon from '@mui/icons-material/Add';
import SearchBar from '../components/common/SearchBar';

const AdminDashboard: React.FC = () => {
  const { posts, loading, error, handleCreatePost, handleDeletePost, handleUpdatePost } = usePosts();
  const [selectedPost, setSelectedPost] = useState<{ id: number; title: string; body: string } | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleEditPost = (post: { id: number; title: string; body: string }) => {
    setSelectedPost(post);
    setShowForm(true);
  };

  const handleCreateNewPost = () => {
    setSelectedPost(null);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    setSelectedPost(posts.find(post => post.id === id) || null);
    setShowConfirmDialog(true);
  };

  const confirmDelete = async () => {
    if (selectedPost) {
      await handleDeletePost(selectedPost.id);
      setAlertMessage('Post eliminado exitosamente.');
    }
    setShowConfirmDialog(false);
  };

  const handlePostCreation = async (post: { title: string; body: string }) => {
    try {
      await handleCreatePost(post);
      setAlertMessage('Post creado exitosamente.');
    } catch {
      setAlertMessage('Error al crear el post.');
    }
  };

  const handlePostUpdate = async (id: number, post: { title: string; body: string }) => {
    try {
      await handleUpdatePost(id, post);
      setAlertMessage('Post actualizado exitosamente.');
    } catch {
      setAlertMessage('Error al actualizar el post.');
    }
  };

  // Elimina el mensaje de alerta después de 3 segundos
  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage(null);
      }, 3000);
      return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
    }
  }, [alertMessage]);

  // Filtra las publicaciones basadas en la búsqueda
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ padding: '20px', backgroundColor: 'background.default', color: 'text.primary', minHeight: '100vh' }}>
      <Header />
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        Admin Dashboard
      </Typography>

      <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '20px', 
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <SearchBar 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
        <Button 
          variant="outlined" 
          color="success"
          onClick={handleCreateNewPost} 
          startIcon={<AddIcon />}
        >
          Crear Nuevo Post
        </Button>
      </Box>

      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage severity={'error'} message={error} />
      ) : (
        <>
          {alertMessage && <AlertMessage severity="success" message={alertMessage} />}
          {showForm && (
            <PostForm
              onSubmit={selectedPost ? (post) => handlePostUpdate(selectedPost.id, post) : handlePostCreation}
              existingPost={selectedPost}
              open={showForm}
              onClose={() => setShowForm(false)}
            />
          )}
          {filteredPosts.length > 0 ? (
            <PostList posts={filteredPosts} onEdit={handleEditPost} onDelete={handleDelete} role="admin" />
          ) : (
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
              No se encontraron publicaciones que coincidan con tu búsqueda.
            </Typography>
          )}
        </>
      )}

      <ConfirmationDialog 
        open={showConfirmDialog} 
        onClose={() => setShowConfirmDialog(false)} 
        onConfirm={confirmDelete} 
      />
    </Box>
  );
};

export default AdminDashboard;
