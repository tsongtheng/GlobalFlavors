import React from "react";

import { SubHeading } from "../../components";
import { data, images } from "../../constants";
import "./Laurels.css";

const Laurels = () => (
  <div className="app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__baskerville">Our Laurels</h1>
    </div>
    <div className="app__wrapper_img"></div>
  </div>
);

export default Laurels;
