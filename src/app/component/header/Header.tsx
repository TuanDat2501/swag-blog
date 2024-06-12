'use client'
import React, { useEffect, useState } from 'react';
import './style.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IVideo from "@/icon/IVideo";
import { usePathname, useRouter } from "next/navigation";
import Image from 'next/image';
import { useMediaQuery } from 'usehooks-ts';
const Header = () => {
    const router = useRouter();
    const pathName = usePathname();
    const isMobile = useMediaQuery('max-width:430px')
    const [isOpen, setIsOpen] = useState(false)
    const openMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <div className="absolute tm-site-header">
                <div className="container-fluid relative">
                    <div className="row">
                        <div className="col-7 col-md-4">
                            <a className="text-center tm-logo-container">
                                {/* <IVideo></IVideo>
                                <h1 className="tm-site-name">Swag Catalog</h1> */}
                                <Image src="https://firebasestorage.googleapis.com/v0/b/swag-video-fcf45.appspot.com/o/img%2FUntitled-1.jpg?alt=media&token=0a2332ca-8f93-4108-ad7b-95773bd60248" alt='img' width={100} height={100}></Image>
                            </a>
                        </div>
                        <div className="col-5 col-md-8 ml-auto mr-0">
                            <div className="tm-site-nav">
                                <nav className="navbar navbar-expand-lg mr-0 ml-auto" id="tm-main-nav">
                                    {!isMobile ? <> <button
                                        onClick={openMenu}
                                        className="navbar-toggler tm-bg-black py-2 px-3 mr-0 ml-auto collapsed flex justify-center items-center"
                                        type="button"
                                        data-toggle="collapse" data-target="#navbar-nav"
                                        aria-controls="navbar-nav"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span>

                                            <svg viewBox="0 0 24 24" fill="none" width={30} height={30} xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                        </span>
                                    </button>
                                        {isOpen && <div className="collapsed navbar-collapse tm-nav" id="navbar-nav">
                                            <ul className="navbar-nav text-uppercase">
                                                <li className={pathName === "/" ? "nav-item active" : "nav-item"} onClick={() => router.push('/')}>
                                                    <a className="nav-link tm-nav-link">Videos</a>
                                                </li>
                                                <li className={pathName === "/submit-videos" ? "nav-item active" : "nav-item"} onClick={() => router.push('/submit-videos')}>
                                                    <a className="nav-link tm-nav-link">Submit video</a>
                                                </li>
                                                <li className={pathName === "/blog" ? "nav-item active" : "nav-item"} onClick={() => router.push('/blog')}>
                                                    <a className="nav-link tm-nav-link">Blog</a>
                                                </li>
                                                <li className={pathName === "/contact-us" ? "nav-item active" : "nav-item"} onClick={() => router.push('/contact-us')}>
                                                    <a className="nav-link tm-nav-link">Contact Us</a>
                                                </li>
                                            </ul>
                                        </div>}</> :
                                        <div className="collapsed navbar-collapse tm-nav" id="navbar-nav">
                                            <ul className="navbar-nav text-uppercase">
                                                <li className={pathName === "/" ? "nav-item active" : "nav-item"} onClick={() => router.push('/')}>
                                                    <a className="nav-link tm-nav-link">Videos</a>
                                                </li>
                                                <li className={pathName === "/submit-videos" ? "nav-item active" : "nav-item"} onClick={() => router.push('/submit-videos')}>
                                                    <a className="nav-link tm-nav-link">Submit video</a>
                                                </li>
                                                <li className={pathName === "/blog" ? "nav-item active" : "nav-item"} onClick={() => router.push('/blog')}>
                                                    <a className="nav-link tm-nav-link">Blog</a>
                                                </li>
                                                <li className={pathName === "/contact-us" ? "nav-item active" : "nav-item"} onClick={() => router.push('/contact-us')}>
                                                    <a className="nav-link tm-nav-link">Contact Us</a>
                                                </li>
                                            </ul>
                                        </div>}
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;