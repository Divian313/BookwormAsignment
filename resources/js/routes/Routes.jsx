import React from 'react'

import { Route, Switch } from 'react-router-dom'

// import Home from '../pages/Home'
import Home from '../pages/Home/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import About from '../pages/About'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/catalog/:slug' component={Product}/>
            <Route path='/catalog' component={Catalog}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/about' component={About}/>
        </Switch>
    )
}

export default Routes
