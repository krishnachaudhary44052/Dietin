import React from "react";
import "../style/BlogSection.css";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Chandigarh’s Kidney Trouble: Don’t Let Nephropathy Sneak Up on You",
      excerpt:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even",
      date: "May 30, 2025",
      image:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      title: "PCOS/PCOD: The Hormonal Hiccup That’s Messing with India’s Ovaries",
      excerpt: "",
      date: "May 30, 2025",
      image:
        "https://vegecravings.com/wp-content/uploads/2017/03/veg-hakka-noodles-recipe-with-step-by-step-instructions.jpg",
    },
    {
      id: 3,
      title: "Chandigarh’s Kidney Trouble: Don’t Let Nephropathy Sneak Up on You",
      excerpt: "",
      date: "January 3, 2023",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Diabetes in India: The Sweet Problem That’s Not So Sweet!",
      excerpt: "",
      date: "August 26, 2021",
      image:
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      title: "Best PCOS Meal Plan for Busy Women",
      excerpt: "",
      date: "August 26, 2021",
      image:
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section className="blog-section py-5 bg-white">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
          <h2 className="fw-bold text-dark-blue display-6">Our Blog & Articles</h2>
          <a href="#" className="btn btn-warning fw-semibold">
            Read All Articles →
          </a>
        </div>

        <div className="row g-4">
          {/* Large Card on the Left */}
          <div className="col-lg-6 col-12">
            <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="img-fluid large-img"
              />
              <div className="card-body">
                <h5 className="card-title text-dark-blue">{blogPosts[0].title}</h5>
                <p className="card-text text-secondary">{blogPosts[0].excerpt}</p>
                <p className="text-muted small m-0">{blogPosts[0].date}</p>
              </div>
            </div>
          </div>

          {/* Grid of 4 Cards on the Right */}
          <div className="col-lg-6 col-12">
            <div className="row g-4">
              {blogPosts.slice(1).map((post) => (
                <div className="col-sm-6 col-12" key={post.id}>
                  <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="img-fluid small-img"
                    />
                    <div className="card-body">
                      <h6 className="card-title text-dark-blue">{post.title}</h6>
                      <p className="text-muted small m-0">{post.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogSection;