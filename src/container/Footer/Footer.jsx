import React from "react";
import { FiFacebook, FiX, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";

import "./Footer.css";
import { globalflavors, spoon } from "../../constants/images";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-344-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={globalflavors} alt="footer_logo" style={{ width: 100 }} />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others.”
        </p>
        <img
          src={spoon}
          alt="footer_logo"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiX />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am-12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am-11:00 pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2023 Gerícht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
