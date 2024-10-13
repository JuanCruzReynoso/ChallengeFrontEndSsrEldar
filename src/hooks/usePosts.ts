import { useEffect, useState } from 'react';
import { getPosts, createPost, deletePost, updatePost } from '../services/jsonPlaceHolder';
import { Post } from '../types/Post';

const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const data = await getPosts();
      setPosts(data);
    } catch (error) {
      setError(`Error al obtener los posts: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePost = async (newPost: { title: string, body: string }) => {
    try {
      const createdPost = await createPost({ ...newPost, userId: 1 });
      setPosts((prevPosts) => [...prevPosts, createdPost]);
    } catch (error) {
      setError(`Error al crear el post: ${error}`);
    }
  };

  const handleDeletePost = async (id: number) => {
    try {
      await deletePost(id);
      setPosts((prevPosts) => prevPosts.filter(post => post.id !== id));
    } catch (error) {
      setError(`Error al eliminar el post: ${error}`);
    }
  };

  const handleUpdatePost = async (id: number, updatedPost: { title: string; body: string }) => {
    try {
      const updatedData = await updatePost(id, updatedPost);
      setPosts((prevPosts) => prevPosts.map(post => (post.id === id ? updatedData : post)));
    } catch (error) {
      setError(`Error al actualizar el post: ${error}`);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, loading, error, handleCreatePost, handleDeletePost, handleUpdatePost };
};

export default usePosts;
