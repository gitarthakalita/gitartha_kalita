import React from 'react';
import Link from 'next/link';
import Sidebar from './Sidebar';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-wrapper">
                <Link href="/">
                    <div className="navbar-item logo-box">
                        <div className="logo"></div><sub>v1.0</sub>
                    </div>
                </Link>
                <div className="navbar-item menu">
                    <Link href="/about">
                        <div className="menu-item">What I Do</div>
                    </Link>
                  
                    <Link href="/design-process">
                        <div className="menu-item">Design Process</div>
                    </Link>

                    <Link href="/services">
                        <div className="menu-item">Services</div>
                    </Link>

                    <Link href="/projects">
                        <div className="menu-item">Projects</div>
                    </Link>

                    <Link href="/blog">
                        <div className="menu-item">Blog</div>
                    </Link>

                    <Link href="/contact">
                        <div className="menu-item">Contact</div>
                    </Link>


                    <Link href="/knowledge-space">
                        <div className="menu-item">Knowledge Space</div>
                    </Link>


                </div>
                <div className="navbar-item social">
                    <div className="social-item facebook"></div>
                    <div className="social-item instagram"></div>
                    <div className="social-item linkedin"></div>
                    <div className="social-item github"></div>
                </div>

                <div className="sidebar">
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default Navbar
