import React from 'react'
import Header from '../Header/Header'
import NavMenu from '../NavMenu/NavMenu'
import NewProducts from './NewProducts/NewProducts'
import RecommendedProducts from './RecommendedProducts/RecommendedProducts'

const Home = () => {

    return (
        <div>
            <Header />
            <NavMenu />
            <RecommendedProducts />
            <NewProducts />
        </div>
    )
}

export default Home
