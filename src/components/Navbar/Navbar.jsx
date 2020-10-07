import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-wrapper">
                <Link href="/">
                    <div className="navbar-item logo-box">
                        <div className="logo"></div>
                    </div>
                </Link>
                <div className="navbar-item menu">
                    <Link href="/about">
                        <div className="menu-item">About</div>
                    </Link>
                    <Link href="/blog">
                        <div className="menu-item">Blog</div>
                    </Link>
                    <Link href="/design-system">
                        <div className="menu-item">Design System</div>
                    </Link>

                    <Link href="/services">
                        <div className="menu-item">Services</div>
                    </Link>

                    <Link href="/projects">
                        <div className="menu-item">Projects</div>
                    </Link>

                    <Link href="/contact">
                        <div className="menu-item">Contact</div>
                    </Link>


                    <Link href="learning-space">
                        <div className="menu-item">Learning Space</div>
                    </Link>


                </div>
                <div className="navbar-item social">
                    <div className="social-item facebook"></div>
                    <div className="social-item instagram"></div>
                    <div className="social-item linkedin"></div>
                    <div className="social-item github"></div>
                </div>

                <div className="sidebar">
                    menu
                </div>
            </div>
        </div>
    )
}

export default Navbar
