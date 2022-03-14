import React from 'react'
import Helmet from '../components/Helmet'


const About = () => {

    return (
        <Helmet title="About">

            <div className="wrapperabout">
                <div className="mainabout">
                    <div className="headabout content1about">
                        <h1>Welcome to Bookworm</h1> <br></br><br></br>
                        <d>"Bookworm is an independent New York bookstore and language school with location in Manhattan and Brooklyn. We specialize in travel books and language classes."</d>

                    </div>
                    <div className="contentabout content2about">
                        <h2>Our Story</h2> <br></br><br></br>
                        The name Bookworm was taken from the original name for New York International Airport, which was renamed JFK in December 1963.
                        <br></br> <br></br>
                        Our Manhattan store has just moved to the West Village. Our new location is 170 7th Avenue South, at the corner of Perry Street.
                        <br></br> <br></br>
                        From March 2008 through May 2016, the store was located in the Flatiron District.
                    </div>
                    <div className="contentabout content3about">
                        <h2>Our Vision</h2>
                        <br></br><br></br>
                        One of the last travel bookstores in the country, our Manhattan store carries a range of guidebooks (all 10% off) to suit the needs and tastes of every traveler and budget.<br></br> <br></br>
                        We believe that a ovel or travelogue can be just as valuable a key to a place as any guidebook, and our well-read, well-traveled staff is happy to make reading recommendations for any traveler, book lover, or gift giver.

                    </div>
                </div>
            </div>


        </Helmet >
    )
}

export default About
