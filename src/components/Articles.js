import React from 'react';
import './Articles.css';

function Articles() {
  const articles = [
    {
      id: 1,
      title: "The Future of Web Development: Beyond React",
      date: "November 28, 2025",
      excerpt: "Exploring the emerging trends in web development and how new frameworks are reshaping the landscape. From server components to edge computing, we dive deep into what's next for modern web applications. Learn about the paradigm shifts that are making applications faster, more efficient, and easier to maintain.",
      readTime: "8 min read",
      link: "#"
    },
    {
      id: 2,
      title: "Building Scalable Microservices with Kubernetes",
      date: "November 15, 2025",
      excerpt: "A comprehensive guide to designing and deploying microservices architecture using Kubernetes. We'll cover service mesh patterns, auto-scaling strategies, and best practices for monitoring distributed systems. Includes real-world examples and performance optimization techniques that have been battle-tested in production environments.",
      readTime: "12 min read",
      link: "#"
    }
  ];

  return (
    <section className="articles-section">
      <h2 className="section-title">Latest Articles</h2>
      <div className="articles-list">
        {articles.map(article => (
          <article key={article.id} className="article-card">
            <div className="article-header">
              <div className="article-meta">
                <span className="article-date">{article.date}</span>
                <span className="article-divider">•</span>
                <span className="article-read-time">{article.readTime}</span>
              </div>
            </div>
            <h3 className="article-title">{article.title}</h3>
            <p className="article-excerpt">{article.excerpt}</p>
            <a href={article.link} className="article-link">
              Read More →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Articles;
