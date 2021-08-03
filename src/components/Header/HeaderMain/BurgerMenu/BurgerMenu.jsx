import React from 'react'
import { Link } from 'react-router-dom'
import classes from './BurgerMenu.module.css'

const BurgerMenu = (props) => {

    function handleClick(){
        props.setOpen(false)
    }

    return (
        <div className={classes.burgerMenu}>
            <div className={classes.burgerMenuInner}>
                <ul className={classes.burgerMenuList}>
                    <li>
                        <Link to='/' className={classes.burgerMenuLink, classes.active} >Home</Link>             
                    </li>
                    <li>
                        <Link to='/hot_products' className={classes.burgerMenuLink}>Hot Products</Link>
                    </li>
                    <li>
                        <Link to='/laptost' className={classes.burgerMenuLink}>Laptops </Link>
                    </li>
                    <li>
                        <Link to='/smartphone' className={classes.burgerMenuLink}>Smartphones</Link>
                    </li>
                    <li>
                        <Link to='/cameras' className={classes.burgerMenuLink}>Cameras</Link>                 
                    </li>
                    <li>
                        <Link to='/accerssories' className={classes.burgerMenuLink}>Accerssories</Link>
                    </li>
                </ul>
                <div className={classes.burgerMenuClose} onClick={handleClick}>
                    <i className="fas fa-times"></i>
                </div>
            </div>
        </div>
    )
}

export default BurgerMenu
