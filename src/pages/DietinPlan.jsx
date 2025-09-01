import React from "react";
import "./DietInPlan.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DietInPlan() {
  return (
    <div className="diet-in-plan">
      <Header />
      {/* Hero Section */}
      <section className="hero d-flex align-items-center text-center text-white">
        <div className="container">
          <h1>“You don’t need to eat less. You need to eat right.”</h1>
          <p className="lead mt-3">
            Welcome to <strong>HEAL ROOT DIET CLINIC</strong> — Where Food Meets Feeling
          </p>
          <a href="#contact" className="btn1 btn-success btn-lg mt-4">
            📞 Book a Free Call
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about py-5">
        <div className="container">
          <p className="lead text-center mb-4">
            We’re not here to tell you to count every almond or eat foods you’ve never heard of.  
            We bring you back to you — through food that heals, nourishes, and understands your life.  
            Because health isn’t just about what’s on your plate, it’s about what’s in your heart.
          </p>
          <p className="text-center">
            You’re not lazy — you’re tired, confused, maybe your clothes feel tighter,  
            maybe you wake up like you didn’t sleep. Maybe food feels like a fight.  
            But it doesn’t have to stay this way. Let’s write a new story — where your body becomes your home again.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="services py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">What We Do</h2>
          <div className="row">
            <div className="col-md-3 text-center mb-4">
              <div className="card p-4 shadow-sm service-card h-100">
                <div className="display-4">💬</div>
                <h5 className="mt-3">1:1 Dietician Counselling</h5>
                <p>No judgment. No calorie counting. Just custom plans that fit your life.</p>
              </div>
            </div>
            <div className="col-md-3 text-center mb-4">
              <div className="card p-4 shadow-sm service-card h-100">
                <div className="display-4">🌱</div>
                <h5 className="mt-3">Healing from the Root</h5>
                <p>PCOS? Gut issues? Hormonal drama? We dig deep to heal.</p>
              </div>
            </div>
            <div className="col-md-3 text-center mb-4">
              <div className="card p-4 shadow-sm service-card h-100">
                <div className="display-4">🍲</div>
                <h5 className="mt-3">Real Food. Real Plans.</h5>
                <p>Simple recipes your mom could cook — no overly fancy stuff.</p>
              </div>
            </div>
            <div className="col-md-3 text-center mb-4">
              <div className="card p-4 shadow-sm service-card h-100">
                <div className="display-4">🛋</div>
                <h5 className="mt-3">Programs from Bed</h5>
                <p>Online programs you can do at your own pace, in your comfort.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process py-5">
        <div className="container">
          <h2 className="text-center mb-5">So, What Happens Now?</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="card p-4 shadow-sm border-0 rounded-3 h-100">
                <div className="display-4">📞</div>
                <h5>You Book a Free Call</h5>
                <p>We talk and understand everything you’ve been holding in.</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="card p-4 shadow-sm border-0 rounded-3 h-100">
                <div className="display-4">📝</div>
                <h5>We Create Your Plan</h5>
                <p>Completely custom — from your life, not from Google.</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="card p-4 shadow-sm border-0 rounded-3 h-100">
                <div className="display-4">🤝</div>
                <h5>We Walk Together</h5>
                <p>We check in, adjust, and grow — slowly & kindly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Freebies */}
      <section className="freebies py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Something For You, Even If You’re Not Ready Yet</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="card shadow-sm p-4 border-0 rounded-3 h-100">
                <div className="display-4">📘</div>
                <h5>Food, But Make It Feel Like Home</h5>
                <p>A free guide to make everyday meals feel like love.</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="card shadow-sm p-4 border-0 rounded-3 h-100">
                <div className="display-4">🥗</div>
                <h5>Anti-Bloat Meal Plan</h5>
                <p>5 days of food that won’t fight back.</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="card shadow-sm p-4 border-0 rounded-3 h-100">
                <div className="display-4">🧠</div>
                <h5>What’s Your Eating Personality?</h5>
                <p>Understand how your mind & food connect.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact py-5 bg-dark text-white">
        <div className="container text-center">
          <h2 className="mb-4">Let’s Stay in Touch</h2>
          <p className="mb-5">We’re here to help — no pressure, ever.</p>
          <p>📧 Email: <a href="mailto:marketing@mealogy.in" className="text-white text-decoration-none">marketing@mealogy.in</a></p>
          <p>📍 Location: Your City, Country</p>
          <p>📱 WhatsApp: <a href="https://wa.me/+919779007629" className="text-white text-decoration-none">Chat Now</a></p>
          <p>📷 Instagram: <a href="https://www.instagram.com/reel/DKjtyTmpM_K/?igsh=MWJrYWxsaTdyZXV5dA==" className="text-white text-decoration-none">DietIn Instagram</a></p>
        </div>
        <div className="text-center">
          <a className="btn1 btn-outline-light text-decoration-none" href="/imagePdf">Know more about our services</a>
        </div>
      </section>
     <Footer />
    </div>
    
  );
}
