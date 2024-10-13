import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import usePosts from '../hooks/usePosts';
import PostList from '../components/common/PostList';
import Header from '../components/common/Header';
import ErrorMessage from '../components/common/AlertMessage';
import Loader from '../components/common/Loader';
import SearchBar from '../components/common/SearchBar';

const UserFeed: React.FC = () => {
  const { posts, loading, error } = usePosts();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Filtra las publicaciones basadas en la búsqueda
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ padding: '20px', backgroundColor: 'background.default', color: 'text.primary', minHeight: '100vh' }}>
      <Header />
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        User Feed
      </Typography>

      <Box sx={{ 
          display: 'flex', 
          justifyContent: 'flex-start', 
          alignItems: 'center', 
          marginBottom: '20px', 
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <SearchBar 
          value={searchQuery} 
          onChange={handleSearchChange} 
          placeholder="Buscar publicaciones" 
        />
      </Box>

      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage severity={'error'} message={error} />
      ) : filteredPosts.length > 0 ? (
        <PostList posts={filteredPosts} onEdit={() => { }} onDelete={() => { }} role="user" />
      ) : (
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
          No se encontraron publicaciones que coincidan con tu búsqueda.
        </Typography>
      )}
    </Box>
  );
};

export default UserFeed;
