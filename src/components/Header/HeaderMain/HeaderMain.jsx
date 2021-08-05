import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../../../context/ProductContext";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import classes from "./HeaderMain.module.css";

const HeaderMain = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className={classes.headerMain}>
            <div className="container-xxl">
                <div className={classes.headerMainInner}>
                    <Link to='/' className={classes.headerMainLogo}>
                        Logo
                    </Link>
                    <div className={classes.headerMainSearch}>
                        <input type="text" placeholder="Search here"  />
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
                        <div className={classes.headerMainBurgerMenu} onClick={() => setOpen(!open)}>
                            <i className="fas fa-bars"></i>
                            <div>Menu</div>
                        </div>
                    </div>
                </div>
            </div>
            {open ? <BurgerMenu setOpen={setOpen} /> : null}
        </div>
    );
};

export default HeaderMain;
