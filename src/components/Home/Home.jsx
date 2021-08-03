import React, { useState } from 'react'
import Header from '../Header/Header'
import BurgerMenu from './BurgerMenu/BurgerMenu'

const Home = () => {

    const handleClick = () => {

    }

    return (
        <div>
            <Header />
            <BurgerMenu handleClick={handleClick} />
            {/* {burgerMenu ? <BurgerMenu SetburgerMenu={burgerMenu} /> 
                : null
            } */}
        </div>
    )
}

export default Home
