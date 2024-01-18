import React from "react";
import ownersImg from "../images/MarioAdrian.jpg";

const About = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <div className="banner-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a passionate family with Italian origins and a dream of bringing a little bit of Italy to Chicago. We take pride in our inventive recipes and high quality organic ingredients.
          </p>
          </div>
          <div className="about-img">
           <img src={ownersImg} alt="" />
          </div>
        </div>

      </section>
    </header>
  );
};

export default About;
