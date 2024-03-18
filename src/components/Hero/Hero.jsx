import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionate Fullstack developer | Transforming Ideas into Seamless and
          Visually Stunning Web Solutions
        </p>
      </div>

      <div className="hero-img">
        <div>
          <img
            src="./assets/images/profile.png"
            alt=""
            style={{ borderRadius: "20%" }}
          />
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/images/react.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/Node-icon.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/html.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/css.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/js.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/ts.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/tailwind.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
