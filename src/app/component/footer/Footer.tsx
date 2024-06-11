'use client'
import React, {useEffect} from 'react';
import './style.scss';
const Footer = () => {
    return (
        <div className="main-footer">
            <div className="row mt-5 pt-3">
                <div className="col-xl-6 col-lg-12 mb-4">
                    <div className="tm-bg-gray p-5 h-100">
                        <h3 className="tm-text-primary mb-3">Do you want to get our latest updates?</h3>
                        <p className="mb-5">Please subscribe our newsletter for upcoming new videos and latest
                            information
                            about our
                            work. Thank you.</p>
                        <form action="" method="GET" className="tm-subscribe-form">
                            <input type="text" name="email" placeholder="Your Email..." required/>
                            <button type="submit" className="btn rounded-0 btn-primary tm-btn-small">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mb-4">
                    <div className="p-5 tm-bg-gray">
                        <h3 className="tm-text-primary mb-4">Quick Links</h3>
                        <ul className="list-unstyled tm-footer-links">
                            <li><a href="/landing">Videos</a></li>
                            <li><a href="/submit-videos">Submit video</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/contact-us">Contact Us</a></li>
                    
                        </ul>
                    </div>
                </div>
            
            </div>
            <footer className="row pt-5">
                <div className="col-12">
                    <p className="text-right">Copyright 2020 The Video Catalog Company
                        - Designed by <a rel="nofollow" target="_parent">Swag Media</a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;