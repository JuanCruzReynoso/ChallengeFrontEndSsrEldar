import apiClient from './axiosConfig';

// CRUD para posts

// Obtener todos los posts
export const getPosts = async () => {
  try {
    const response = await apiClient.get('/posts');
    return response.data;
  } catch (error) {
    console.error('Error al obtener los posts:', error);
    throw error;
  }
};

// Crear un nuevo post
export const createPost = async (newPost: { title: string; body: string; userId: number }) => {
  try {
    const response = await apiClient.post('/posts', newPost);
    return response.data;
  } catch (error) {
    console.error('Error al crear el post:', error);
    throw error;
  }
};

// Actualizar un post
export const updatePost = async (id: number, updatedPost: { title: string; body: string }) => {
  try {
    const response = await apiClient.put(`/posts/${id}`, updatedPost);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el post:', error);
    throw error;
  }
};

// Eliminar un post
export const deletePost = async (id: number) => {
  try {
    const response = await apiClient.delete(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar el post:', error);
    throw error;
  }
};
