import React from "react";

import { SubHeading } from "../../components";
import "./Header.css";
import { food1, food2, food3 } from "../../constants/images";

const Header = () => {
  return (
    <div className="app__header section__padding" id="home">
      <div className="app__header_info">
        <SubHeading title="chase the new flavour" />
        <h1 className="app__header-h1">Your Fine Dining Destination</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          egestas turpis quis urna volutpat lacinia at et lorem. Praesent quis
          commodo nunc. Donec dictum finibus aliquam.
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>
      <div className="app__header_img--container">
        <div className="app__header_img">
          <img
            src={food1}
            alt="food 1"
            className="app__header_photo app__header_photo--p1"
            onMou
          />
          <img
            src={food2}
            alt="food 2"
            className="app__header_photo app__header_photo--p2"
          />
          <img
            src={food3}
            alt="food 3"
            className="app__header_photo app__header_photo--p3"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
