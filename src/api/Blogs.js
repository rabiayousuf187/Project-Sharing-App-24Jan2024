import axios from 'axios';

const getAllBlogs = async () => {
  try {
    const response = await axios.get('/blogs');
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getBlogById = async (blogId) => {
  try {
    const response = await axios.get(`/blogs/${blogId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createproject = async (blogData) => {
  try {
    const response = await axios.post('/blogs', blogData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateBlog = async (blogId, blogData) => {
  try {
    const response = await axios.put(`/blogs/${blogId}`, blogData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteBlog = async (blogId) => {
  try {
    const response = await axios.delete(`/blogs/${blogId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getBlogsByUser = async (userId) => {
  try {
    const response = await axios.get(`/blogs/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export {
  getAllBlogs,
  getBlogById,
  createproject,
  updateBlog,
  deleteBlog,
  getBlogsByUser,
};

// import { blogApi } from '../api'