import React from 'react';
import './Blog.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 20 simple and quick desserts for kids",
      date: "May 30, 2025",
      image: "./images/dietin1.png"
    },
    {
      id: 2,
      title: "Top 20 simple and quick desserts for kids",
      date: "May 30, 2025",
      image: "./images/dietin1.png"
    },
    {
      id: 3,
      title: "Top Foods for Weight Loss",
      date: "January 3, 2023",
      image: "./images/dietin1.png"
    },
    {
      id: 4,
      title: "Best PCOS Meal Plan for Busy Women",
      date: "August 26, 2021",
      image: "./images/dietin1.png"
    },
    {
      id: 5,
      title: "\"What's a Balanced Plate?\"",
      date: "August 26, 2021",
      image: "./images/dietin1.png"
    },
    {
      id: 6,
      title: "7 delicious cheesecake recipes you can prepare",
      date: "August 26, 2021",
      image: "./images/dietin1.png"
    },
    {
      id: 7,
      title: "5 great pizza restaurants you should visit this city",
      date: "August 26, 2021",
      image: "./images/dietin1.png"
    },
    {
      id: 8,
      title: "Read This Controversial Article And Find Out More About organic",
      date: "August 26, 2021",
      image: "./images/dietin1.png"
    },
    {
      id: 9,
      title: "Marriage And organic Have More In Common Than You Think",
      date: "August 26, 2021",
      image: "./images/dietin1.png"
    },
    {
      id: 10,
      title: "3 Ways Create Better organic With The Help Of Your Dog",
      date: "August 26, 2021",
      image: "./images/dietin1.png"
    },
    {
      id: 11,
      title: "The Truth Is You Are Not The Only Person Concerned About organic",
      date: "August 26, 2021",
      image: "./images/dietin1.png"
    },
    {
      id: 12,
      title: "Empty Vessels Bake the Most Noise",
      date: "August 26, 2021",
      image: "./images/dietin1.png"
    }
  ];

  return (
    <div className="blog-page bg-light">
      <Header />

      <section className="hero-section text-center py-5 bg-white">
        <div className="container">
          <h1 className="display-4 fw-bold text-primary">Our Blog & Articles</h1>
          <p className="lead text-muted">
            We consider all the drivers of change gives you the components you need to change to create a truly happens.
          </p>
        </div>
      </section>

      <section className="blog-grid py-5">
        <div className="container">
          <div className="row g-4">
            {blogPosts.map((post) => (
              <div className="col-12 col-sm-6 col-lg-3" key={post.id}>
                <div className="card h-100 shadow-sm blog-card">
                  <img src={post.image} className="card-img-top" alt={post.title} />
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text text-muted small">{post.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
