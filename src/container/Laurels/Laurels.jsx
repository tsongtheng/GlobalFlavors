import React from "react";

import { SubHeading } from "../../components";
import { data, images } from "../../constants";
import "./Laurels.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
  return (
    <div className="app__laurels_awards-card">
      <img src={imgUrl} alt="award" />
      <div className="app__laurels_awards-card_content">
        <p className="p__baskerville" style={{ color: "#C69749" }}>
          {title}
        </p>
        <p className="p__opensans">{subtitle}</p>
      </div>
    </div>
  );
};

const Laurels = () => (
  <div className="app__wrapper-laurels section__padding" id="awards">
    <div className="app__laurels-logo">
      <img src={images.logo} alt="laurels" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__baskerville">Our Laurels</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>
    <div className="app__laurels_img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
