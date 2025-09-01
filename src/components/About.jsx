import React from "react";
import "../style/About.css";

const About = ({title}) => {
  return (
    <>
    <h1 className="text-center">{title}</h1>
    <section className="container about-section">
      <div className="about-text">
        <h2>Welcome to the Dietin Family!</h2>
        <p>
          We make healthy eating simple, flexible, and enjoyable — so it fits into your life, not the other way around.
        </p>
        <p>
          Dietin was born from a simple belief: healthy eating shouldn’t feel like a struggle. We saw how busy lives often led to skipped meals, quick fixes, and choices that left people feeling unsatisfied or guilty. So we set out to reimagine what it means to eat well — and to make it possible for anyone, anywhere, no matter how hectic the day.
        </p>
        <p>
          Over time, what began as wholesome, thoughtfully designed meals grew into a broader vision. Today, Dietin is more than just food — it’s an ecosystem that adapts to your lifestyle. From curated meal plans that bring structure and balance, to tailored programs that stay with you over time, to quick, accessible options that fit into even the busiest schedules — everything we do is built around one idea: <strong>health made effortless.</strong>
        </p>
        <p>
          What makes us different is the way we blend nutrition, taste, and accessibility. Each step of our journey has been guided by the belief that wellness should feel natural, enjoyable, and part of everyday life — not a chore or an afterthought.
        </p>
        <p>
          Our story is still being written, but our purpose remains the same: <strong>to create a healthier community, one choice, one meal, and one person at a time.</strong>
        </p>
      </div>

      <div className="about-image">
        <img src="/images/dietinchef.png" alt="Dietin Chef" />
        
      </div>
      <img src="/images/veg.png" alt="Vegetables" className="bg-leaf1" />
    </section>
    </>
  );
};

export default About;
