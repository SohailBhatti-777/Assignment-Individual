import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* <img src="/assests/images/img-slide.png" alt="HTML5 Icon" /> */}

        <h1>BEST ONLINE LEARNING SYSTEM</h1>
        <p>
          Exceptuer sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt.
        </p>
        <button className="read-more">READ MORE</button>
      </div>
    </section>
  );
};

export default HeroSection;
