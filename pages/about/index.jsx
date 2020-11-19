import Link from 'next/link'
import React from 'react'
import JellyFish from '../../src/components/JellyFish/JellyFish'
import Layout from '../../src/components/Layout/Layout'

const About = () => {
    return (
        <Layout>
            <section className="aboutpage">
                <div className="aboutpage__wrapper">
                    <div className="about--header">
                        <div className="about--header__wrapper">
                            <h1>I craft
                                <div>
                                    <span>Applications</span> | <span>Solutions</span> | <span> Strategies</span>
                                    {/* | <span> Stories</span>  */}

                                </div>
                            </h1>
                            <h1>That connect people and businesses with seamless interactivity and memorable experience</h1>
                        </div>
                    </div>
                    <div className="about--declaration">
                        <div className="about--declaration__wrapper">
                            <div className="declaration-item">
                                <div className="declaration--content">
                                    <h1>I am <span className="lower-a">a</span> <span className="tech-con">Technology Product Consultant</span> with Experience in a wide range of <Link href="/learning-space">Disciplines</Link> </h1>
                                    <h2>
                                        I help businesses create strategies and develop Products that add value interms of <span>revenue</span> and <span>efficieny</span>. My primary focus of expertise lies in user experience design, product research, product innovation, and product development. I utilize my knowledge of design and programming to incorporate a business solution. Among other things, my core skill sets are big picture thinking, pattern recognition, strategic planning, problem-solving, and the ability to turn ideas into real products. I enjoy the process of finding a solution to business-specific problems and design a solution pipeline.
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

                    <div className="about--content ">
                        <div className="about--content__wrapper">
                            <div className="about-design-system">

                            </div>
                        </div>
                    </div>
                    <div className="about--content">
                        <div className="about--content__wrapper">
                            <div className="about-service">

                            </div>
                        </div>
                    </div>
                    <div className="about--content">
                        <div className="about--content__wrapper">
                            <div className="about-contact">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default About
