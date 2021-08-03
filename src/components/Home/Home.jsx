import React from 'react'
import Header from '../Header/Header'
import NavMenu from '../NavMenu/NavMenu'
import NewProducts from './NewProducts/NewProducts'
import PromotionalProducts from './PromotionalProducts/PromotionalProducts'
import RecommendedProducts from './RecommendedProducts/RecommendedProducts'

const Home = () => {

    return (
        <div>
            <Header />
            <NavMenu />
            <RecommendedProducts />
            <NewProducts />
            <PromotionalProducts />
        </div>
    )
}

export default Home
