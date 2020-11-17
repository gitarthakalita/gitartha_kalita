import React from 'react'
import JellyFish from '../../src/components/JellyFish/JellyFish'
import Layout from '../../src/components/Layout/Layout'

const About = () => {
    return (
        <Layout>
            <div className="aboutpage">
                <div className="aboutpage__wrapper">
                    <div className="about--header">
                        <div className="about--header__wrapper">
                            <h1>I craft
                                <div>
                                    <span>Applications</span> | <span>Solutions</span> | <span> Stories</span> | <span> Strategies</span>
                                </div>
                            </h1>
                            <h1>That connect people and businesses with seamless interactivity and memorable experience</h1>
                        </div>
                    </div>
                    <div className="about--declaration">
                        <div className="about--declaration__wrapper">
                            <div className="declaration-item">
                                <div className="declaration--content">
                                    <h1>I am <span className="lower-a">a</span> <span className="tech-con">Technology Product Consultant</span> with Experience in a wide range of Disciplines </h1>
                                    <h2>
                                        I help businesses create strategies and develop Products that add value interms of <span>revenue</span> and <span>efficieny</span>
                                    </h2>
                                    {/* <div className="about-index">
                                    </div> */}
                                </div>
                            </div>
                            <div className="declaration-item jelly-bro">
                                <JellyFish />
                            </div>
                        </div>


                    </div>

                    .about
                </div>
            </div>
        </Layout>
    )
}

export default About
