import React, { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <div className="sidebar-menu" onClick={showSidebar} >
                <div className="menu-bars">
                    menu
            </div>
            </div>


            <div className={sidebar ? "sidebar-container active" : "sidebar-container"}>
                <div className="sidebar-items">
                    <div className="sidebar-toggle" onClick={showSidebar}>
                        X
                </div>

                    <div className="sidebar-menu-wrapper">
                        <Link href="/about">
                            <div className="menu-item-text">About</div>
                        </Link>
                        <Link href="/blog">
                            <div className="menu-item-text">Blog</div>
                        </Link>
                        <Link href="/design-system">
                            <div className="menu-item-text">Design System</div>
                        </Link>

                        <Link href="/services">
                            <div className="menu-item-text">Services</div>
                        </Link>

                        <Link href="/projects">
                            <div className="menu-item-text">Projects</div>
                        </Link>

                        <Link href="/contact">
                            <div className="menu-item-text">Contact</div>
                        </Link>


                        <Link href="learning-space">
                            <div className="menu-item-text">Knowledge Space</div>
                        </Link>
                    </div>

                    <div className="menu-social">
                    <div className="social-item facebook"></div>
                    <div className="social-item instagram"></div>
                    <div className="social-item linkedin"></div>
                    <div className="social-item github"></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Sidebar
