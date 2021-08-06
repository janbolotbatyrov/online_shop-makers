import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="container-xxl">
        <div className={classes.footerInner}>
          <div className={classes.footerAbout}>
            <h3>About us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut.
            </p>
            <ul class={classes.footerLinks}>
              <li>
                <a href="#">
                  <i className="fa fa-map-marker"></i>1734 Stonecoal Road
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-phone"></i>+021-95-51-84
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-envelope-o"></i>email@email.com
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.footerCategories}>
            <h3>Categories</h3>
            <ul class={classes.footerLinks}>
              <li>
                <a href="#">Hot deals</a>
              </li>
              <li>
                <a href="#">Laptops</a>
              </li>
              <li>
                <a href="#">Smartphones</a>
              </li>
              <li>
                <a href="#">Cameras</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
            </ul>
          </div>
          <div className={classes.footerInformation}>
            <h3>Information</h3>
            <ul class={classes.footerLinks}>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Orders and Returns</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div className={classes.footerService}>
            <h3>Service</h3>
            <ul class={classes.footerLinks}>
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">View Cart</a>
              </li>
              <li>
                <a href="#">Wishlist</a>
              </li>
              <li>
                <a href="#">Track My Order</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
