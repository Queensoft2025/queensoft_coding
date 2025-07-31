import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogData from '../data/blogData';
import './Blog.css';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((post) => post.id === parseInt(id));

  if (!blog) return <h2>Blog not found</h2>;

  return (
    <div className="blog-detail">
      <Link to="/blog" className="back-link">← Back to Blog</Link>
      <img src={blog.image} alt={blog.title} />
      <h1>{blog.title}</h1>
      <p className="date">{blog.date}</p>
      <div className="blog-content">{blog.content}</div>
    </div>
  );
};

export default BlogDetail;
