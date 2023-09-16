import React from "react";

import { spoon } from "../../constants/images";

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p
      className={
        title === "Awards & recognition" ? "laurels" : "p__baskerville"
      }
    >
      {title}
    </p>
    <img src={spoon} alt="spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
