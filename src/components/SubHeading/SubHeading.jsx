import React from "react";

import { images } from "../../constants";

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p
      className={
        title === "Awards & recognition" ? "laurels" : "p__baskerville"
      }
    >
      {title}
    </p>
    <img src={images.spoon} alt="spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
