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
                                        <p>
                                            I help businesses create strategies and develop Products that add value interms of <span>Revenue</span> and <span>Efficieny</span>. My primary focus of expertise lies in:
                                            <ul>
                                                <li>User Experience Design</li>
                                                <li>Product Research</li>
                                                <li>Product Innovation and</li>
                                                <li>Product Development </li>
                                            </ul>
                                          I utilize my knowledge of Design and Programming to incorporate a business solution.
                                        </p>
                                        <p>Among other things, my core skill sets are big picture thinking, pattern recognition, strategic planning, problem-solving, and the ability to turn ideas into real products.</p>
                                    </h2>

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
                                <div className="item image"></div>
                                <div className="item content">
                                    <h1>
                                        User Experience  Design Process
                                    </h1>
                                    <p>
                                        Having a design process in place provides me a Framework on how I tackle problems by breaking it down into a series of interconnected systems. <Link href="/design-process">Learn More</Link>  about both my UX Design Process and Application Development Process.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <hr /> */}

                    <div className="about--content">
                        <div className="about--content__wrapper">
                            <div className="about-service">
                                <div className="item service-card"></div>
                                <div className="item content"></div>

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
