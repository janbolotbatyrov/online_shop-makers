import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./HeaderMain.module.css";

const HeaderMain = () => {

return (
    <div className={classes.headerMain}>
    <div className="container-xxl">
        <div className={classes.headerMainInner}>
            <Link to='/' className={classes.headerMainLogo}>
                Makers
            </Link>
            <div className={classes.headerMainSearch}>
                <input type="text" placeholder="Search here" />
                <button>Search</button>
            </div>
            <div className={classes.headerMainCarts}>
                <div className={classes.headerMainFavorites}>
                    <i className="far fa-heart"></i>
                    <div>Your Wishlist</div>
                    <span>1</span>
                </div>
                <div className={classes.headerMainCart}>
                    <i className="fas fa-shopping-cart"></i>
                    <div>Your Cart</div> 
                    <span>3</span>
                </div>
                <div className={classes.headerMainBurgerMenu}  >
                    <i className="fas fa-bars"></i>
                    <div>Menu</div>
                </div>
            </div>
        </div>
    </div>
    </div>
);
};

export default HeaderMain;
