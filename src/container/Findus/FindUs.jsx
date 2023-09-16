import React from "react";

import { SubHeading } from "../../components";
import { findus } from "../../constants/images";

const FindUs = () => (
  <div className="app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info" style={{ paddingLeft: "32px" }}>
      <SubHeading title="Contact" />
      <h1 className="headtext__baskerville" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
        <p
          className="p__baskerville"
          style={{ color: "#c69749", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>

      <button className="custom__button" style={{ marginTop: "2rem" }}>
        Visit Us
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
