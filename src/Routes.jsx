import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Add from './components/Admin/Add/Add'
import Edit from './components/Admin/Edit/Edit'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import NavMenu from './components/NavMenu/NavMenu'
import ProductDetail from './components/ProductDetail/ProductDetail'
import ProductsList from './components/ProductsList/ProductsList'

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <NavMenu />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/products' component={ProductsList} />
                <Route exact path='/add' component={Add} />
                <Route exact path='/edit' component={Edit} />
                <Route exact path='/detail/:id' component={ProductDetail} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default Routes
