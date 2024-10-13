import React from 'react';
import { List, Box } from '@mui/material';
import PostItem from './PostItem';

interface PostListProps {
  posts: { id: number; title: string; body: string }[];
  onEdit: (post: { id: number; title: string; body: string }) => void;
  onDelete: (id: number) => void;
  role: 'admin' | 'user';
  searchQuery?: string;
}

const PostList: React.FC<PostListProps> = ({ posts, onEdit, onDelete, role, searchQuery }) => {
  const filteredPosts = searchQuery
    ? posts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : posts;

  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        maxHeight: '575px',
        overflowY: 'auto',
      }}
    >
      <List>
        {filteredPosts.slice().reverse().map((post) => (
          <PostItem
            key={post.id}
            post={post}
            role={role}
            onEdit={() => onEdit(post)}
            onDelete={() => onDelete(post.id)}
          />
        ))}
      </List>
    </Box>
  );
};

export default PostList;
