import React from 'react'
import { Link } from 'react-router-dom'
import classes from './NavMenu.module.css'

const NavMenu = () => {
    return (
        <div className={classes.navMenu}>
            <div className="container">
                <div className={classes.navMenuInner}>
                    <ul className={classes.navMenuList}>
                        <li> <Link to='/'>Home</Link> </li>
                        <li> <Link to='/products'>Hot Deals</Link></li>
                        <li> <Link to='/products'>Laptops</Link> </li>
                        <li> <Link to='/products'>Smartphones</Link> </li>
                        <li> <Link to='/products'>Cameras</Link> </li>
                        <li> <Link to='/products'>Accessories</Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavMenu
