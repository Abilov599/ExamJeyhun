import React from "react";
import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <div className="top">
        <div className="container">
          <div className="left-side">
            <h3>Other pages</h3>
            <ul>
              <li>Home</li>
              <hr />
              <li>Gallery</li>
              <hr />
              <li>Shortcodes</li>
              <hr />
              <li>About</li>
              <hr />
              <li>Languages</li>
            </ul>
          </div>
          <div className="right-side">
            <div>
              <img
                src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/54/2014/02/colorlib-logo.png"
                alt=""
              />
            </div>
            <p>
              Awesome and completely free WordPress WooCommerce themes to take
              your ecommerce website to the next level.
            </p>
            <br />
            <p>
              If you are having problems with theme setup, please feel free to
              use Colorlib support forum.
            </p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <ul>
            <li>Home</li>
            <li>Gallery</li>
            <li>Shortcodes</li>
            <li>About</li>
            <li>Languages</li>
          </ul>
          <p>
            Dazzling Demo All rights reserved. Theme by Colorlib Powered by
            WordPress
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
