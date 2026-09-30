import React from "react";
import bannerImage from "../assets/banner-stack.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h1>
          Build Your Ideal
          <span>Development Stack</span>
        </h1>

        <p>
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that
          fits your next project.
        </p>

        <div className="hero-buttons">
          <a className="primary-button" href="#technologies">
            Explore Technologies
          </a>
          <a className="secondary-button" href="#about">
            Learn More
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={bannerImage} alt="Development technology stack" />
      </div>
    </section>
  );
}

export default Hero;
