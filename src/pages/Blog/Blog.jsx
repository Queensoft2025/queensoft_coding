import React from "react";
import "./Blog.css";

const blogPosts = [
  {
    title: "Top 10 Digital Marketing Trends in 2025",
    image: "/images/blog1.jpg", // Replace with your image path
    date: "June 12, 2025",
    excerpt: "Discover the most impactful digital marketing trends shaping the future of business success.",
  },
  {
    title: "How to Build a Brand Identity Online",
    image: "/images/blog2.jpg",
    date: "June 5, 2025",
    excerpt: "Learn step-by-step how to build a strong brand presence that connects with your audience.",
  },
  {
    title: "Why Your Business Needs a Website Now",
    image: "/images/blog3.jpg",
    date: "May 28, 2025",
    excerpt: "In a digital-first world, here’s why having a website is more important than ever.",
  },
];

const Blog = () => {
  return (
    <div className="blog-container">
      <h2 className="blog-title">📖 Trending Blog Posts</h2>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p className="blog-date">{post.date}</p>
              <p>{post.excerpt}</p>
              <button className="read-more">Read More →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
