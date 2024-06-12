'use client'
import React, {useEffect} from 'react';
import './style.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import IVideo from "@/icon/IVideo";
import {usePathname, useRouter} from "next/navigation";
import Image from 'next/image';
const Header = () => {
    const router = useRouter();
    const pathName = usePathname();

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
                                    <button
                                        className="navbar-toggler tm-bg-black py-2 px-3 mr-0 ml-auto collapsed"
                                        type="button"
                                        data-toggle="collapse" data-target="#navbar-nav"
                                        aria-controls="navbar-nav"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span>
                                            <i className="fas fa-bars tm-menu-closed-icon"></i>
                                            <i className="fas fa-times tm-menu-opened-icon"></i>
                                        </span>
                                    </button>
                                    <div className="navbar-collapse tm-nav" id="navbar-nav">
                                        <ul className="navbar-nav text-uppercase">
                                            <li className={pathName === "/" ? "nav-item active" : "nav-item"} onClick={()=>router.push('/')}>
                                                <a className="nav-link tm-nav-link">Videos</a>
                                            </li>
                                            <li className={pathName === "/submit-videos" ? "nav-item active" : "nav-item"} onClick={()=>router.push('/submit-videos')}>
                                                <a className="nav-link tm-nav-link">Submit video</a>
                                            </li>
                                            <li className={pathName === "/blog" ? "nav-item active" : "nav-item"}  onClick={()=>router.push('/blog')}>
                                                <a className="nav-link tm-nav-link">Blog</a>
                                            </li>
                                            <li className={pathName === "/contact-us" ? "nav-item active" : "nav-item"}  onClick={()=>router.push('/blog')}>
                                                <a className="nav-link tm-nav-link">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
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