import React from "react";

import "./AboutUs.css";
import { G, spoon } from "../../constants/images";

const AboutUs = () => (
  <div className="app__aboutus app__bg section__padding" id="about">
    <div className="app__aboutus-overlay">
      <img src={G} alt="g letter" />
    </div>

    <div className="app__aboutus-content">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__baskerville">About Us</h1>
        <img src={spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          egestas turpis quis urna volutpat lacinia at et lorem. Praesent quis
          commodo nunc. Donec dictum finibus aliquam.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__baskerville">Our History</h1>
        <img src={spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          egestas turpis quis urna volutpat lacinia at et lorem. Praesent quis
          commodo nunc. Donec dictum finibus aliquam.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
