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
                <Link href="blog">
                <div className="menu-item">Blog</div>
                </Link>
                <Link href="case-study">
                <div className="menu-item">Case Study</div>
                </Link>
                <div className="menu-item">Design System</div>
                <div className="menu-item">Services</div>
                <div className="menu-item">Projects</div>
                <div className="menu-item">Contact</div>
                
            </div>
            <div className="navbar-item social">
                <div className="social-item facebook"></div>
                <div className="social-item instagram"></div>
                <div className="social-item linkedin"></div>
                <div className="social-item github"></div>
            </div>
            </div>
        </div>
    )
}

export default Navbar
 