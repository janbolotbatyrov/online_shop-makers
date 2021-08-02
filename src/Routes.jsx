import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='' component={Header} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
