import React from 'react';
import './Blog.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "creamy mushroom sandwich",
      date: "",
      image: "./images/creamy mushroom sandwich.jpg"
    },
    {
      id: 2,
      title: "greek goddess bowl",
      date: "",
      image: "./images/greek goddess bowl.jpg"
    },
    {
      id: 3,
      title: "smokey chicken bowl",
      date: "",
      image: "./images/smokey chicken bowl.jpg"
    },
    {
      id: 4,
      title: "thai curry bowl",
      date: "",
      image: "./images/thai curry bowl.jpg"
    },
    {
      id: 5,
      title: "the herbivore blisswich",
      date: "",
      image: "./images/the herbivore blisswich.jpg"
    },
    {
      id: 6,
      title: "buddha bowl",
      date: "",
      image: "./images/buddha bowl.jpg"
    },
    {
      id: 7,
      title: "creamy channa bowl",
      date: "",
      image: "./images/creamy channa bowl.jpg"
    },
    {
      id: 8,
      title: "Millet bowl",
      date: "",
      image: "./images/Millet bowl.jpg"
    },
    {
      id: 9,
      title: "rajma bowl",
      date: "",
      image: "./images/rajma bowl.jpg"
    },
    {
      id: 10,
      title: "Teriyaki Chicken",
      date: "",
      image: "./images/Teriyaki Chicken.jpg"
    },
    {
      id: 11,
      title: "egg curry bowl",
      date: "",
      image: "./images/egg curry bowl.jpg"
    },
    {
      id: 12,
      title: "falafel wrap",
      date: "",
      image: "./images/falafel wrap.jpg"
    },
    {
      id: 11,
      title: "french toast",
      date: "",
      image: "./images/french toast.jpg"
    },
    {
      id: 11,
      title: "paneer curry bowl",
      date: "",
      image: "./images/paneer curry bowl.jpg"
    },
    {
      id: 11,
      title: "paneer tikka wrap",
      date: "",
      image: "./images/paneer tikka wrap.jpg"
    },
    {
      id: 11,
      title: "tofu wrap",
      date: "",
      image: "./images/tofu wrap.jpg"
    },
    {
      id: 11,
      title: "Caesar salad",
      date: "",
      image: "./images/Caesar salad.jpg"
    },
     {
      id: 11,
      title: "chicken tikka salad",
      date: "",
      image: "./images/chicken tikka salad.jpg"
    },
     {
      id: 11,
      title: "chicken tikka wrap",
      date: "",
      image: "./images/chicken tikka wrap.jpg"
    },
     {
      id: 11,
      title: "egg salad",
      date: "",
      image: "./images/egg salad.jpg"
    },
     {
      id: 11,
      title: "egg wrap",
      date: "",
      image: "./images/egg wrap.jpg"
    },
     {
      id: 11,
      title: "Pindi chole wrap",
      date: "",
      image: "./images/Pindi chole wrap.jpg"
    },
    {
      id: 11,
      title: "paneer salad",
      date: "",
      image: "./images/paneer salad.jpg"
    },
    {
      id: 11,
      title: "Zucchini noodles",
      date: "",
      image: "./images/Zucchini noodles.jpg"
    },
  ];

  return (
    <div className="blog-page bg-light">
      <Header />

      <section className="hero-section text-center py-5 bg-white">
        <div className="container">
          <h1 className="display-4 fw-bold color-green">MENU</h1>
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
