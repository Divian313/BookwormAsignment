import React from 'react'

import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/image/logo.png'

const footerAboutLinks = [
    {
        display: "About Bookworm",
        path: "/about"
    },
    {
        display: "Contact",
        path: "/about"
    },
    {
        display: "Work With Us",
        path: "/about"
    },
    {
        display: "News",
        path: "/about"
    },
    {
        display: "Address",
        path: "/about"
    }
]

const footerCustomerLinks = [
    {
        display: "Return Policy",
        path: "/about"
    },
    {
        display: "Refund Policy",
        path: "/about"
    }
]
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className="footer__title">
                            Support call center
                        </div>
                        <div className="footer__content">
                            <p>
                                Order contact <strong>0906868686</strong>
                            </p>
                            <p>
                                For questions about the product <strong>0906868686</strong>
                            </p>
                            <p>
                                Suggestions, Complaints <strong>0906868686</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Infomation
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Customer care
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer__logo" alt="" />
                            </Link>
                        </p>
                        <p>
                        We’re your essential resource for discovering new stories, ideas, and experiences to feed the mind and nourish the soul
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
