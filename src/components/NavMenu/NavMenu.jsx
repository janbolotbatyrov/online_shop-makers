import React from 'react'
import classes from './NavMenu.module.css'

const NavMenu = () => {
    return (
        <div className={classes.navMenu}>
            <div className="container">
                <div className={classes.navMenuInner}>
                    <ul className={classes.navMenuList}>
                        <li>Home</li>
                        <li>Hot Deals</li>
                        <li>Laptops</li>
                        <li>Smartphones</li>
                        <li>Cameras</li>
                        <li>Accessories</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavMenu
