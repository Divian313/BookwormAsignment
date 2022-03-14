import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Carousel from './Carousel/Carousel'
import ProductViewModal from './ProductViewModal'

import Routes from '../routes/Routes'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = () => {
    return (
        <BrowserRouter>
            <Route render={props => (
                <div>
                    <Header/>
                    <div className="container">
                        <div className="main">
                            <Routes/>
                        </div>
                    </div>
                    <Footer/>
                    
                    <ProductViewModal/>
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default Layout
