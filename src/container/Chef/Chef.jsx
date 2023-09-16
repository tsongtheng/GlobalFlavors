import React from "react";

import { SubHeading } from "../../components";
import "./Chef.css";
import { chef, quote, sign } from "../../constants/images";

const Chef = () => (
  <div className="app__chef-bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info app__chef-info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__baskerville">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={quote} alt="quote_image" />
          <p className="p__opensans p__onpensans-chef_quote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
          </p>
        </div>
        <p className="p__opensans p__onpensans-chef_quote">
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Eric Adjepong</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
