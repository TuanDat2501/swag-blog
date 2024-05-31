'use client'
import React, {useEffect} from 'react';
import './style.scss';
import '../../googleapi';
import axios from "axios";

const Blog = () => {


    return (
        <>
            <div className="header-blog">
                <div className="overlay"></div>
            </div>
            <div className="content-blog">
                <div className="row">
                    <div className="col-12">
                        <h2 className="tm-page-title mb-4">Blogs</h2>
                        <div className="tm-categories-container mb-4 flex">
                            <h3 className="tm-text-primary tm-categories-text">Categories:</h3>
                            <ul className="nav tm-category-list">
                                <li className="nav-item tm-category-item"><a href="#"
                                                                             className="nav-link tm-category-link active">All</a>
                                </li>
                                <li className="nav-item tm-category-item"><a href="#"
                                                                             className="nav-link tm-category-link">Drone
                                    Shots</a></li>
                                <li className="nav-item tm-category-item"><a href="#"
                                                                             className="nav-link tm-category-link">Nature</a>
                                </li>
                                <li className="nav-item tm-category-item"><a href="#"
                                                                             className="nav-link tm-category-link">Actions</a>
                                </li>
                                <li className="nav-item tm-category-item"><a href="#"
                                                                             className="nav-link tm-category-link">Featured</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row tm-catalog-item-list">
                    <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item tm-bg-gray">
                        <div className="position-relative tm-thumbnail-container">
                            <img src="img/tn-01.jpg" alt="Image" className="img-fluid tm-catalog-item-img"/>
                            <a href="video-page.html" className="position-absolute tm-img-overlay">
                            </a>
                        </div>
                        <div className="p-4 tm-catalog-item-description">
                            <div className="content-item">
                                <h3 className="tm-text-primary mb-3 tm-catalog-item-title">Aenean aliquet
                                    sapien</h3>
                                <p className="tm-catalog-item-text">Video thumbnail has a link to another HTML page.
                                    Categories <span className="tm-text-secondary">do not need</span> any JS.
                                    They are just separated HTML pages. Paging is at the bottom to extend the list
                                    as long as you want.
                                    This can be a large catalog.</p>
                            </div>
                            <text>March 15, 2022</text>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                        <div className="position-relative tm-thumbnail-container">
                            <img src="img/tn-02.jpg" alt="Image" className="img-fluid tm-catalog-item-img"/>
                            <a href="video-page.html" className="position-absolute tm-img-overlay">

                            </a>
                        </div>
                        <div className="p-4 tm-catalog-item-description">
                            <div className="content-item">
                                <h3 className="tm-text-primary mb-3 tm-catalog-item-title">Mauris in odio vel
                                    odio</h3>
                                <p className="tm-catalog-item-text">You may need TemplateMo for a quick chat or send
                                    an email if you have any question about this CSS template.
                                    <span className="tm-text-secondary"> for this template.</span>
                                </p>
                            </div>
                            <text>March 15, 2022</text>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                        <div className="position-relative tm-thumbnail-container">
                            <img src="img/tn-03.jpg" alt="Image" className="img-fluid tm-catalog-item-img"/>
                            <a href="video-page.html" className="position-absolute tm-img-overlay">

                            </a>
                        </div>
                        <div className="p-4 tm-catalog-item-description">
                            <h3 className="tm-text-primary mb-3 tm-catalog-item-title">Sagittis sodales
                                enim</h3>
                            <p className="tm-catalog-item-text">You are allowed to use this video catalog for
                                your business websites.
                                Please do not make a re-distribution of our template ZIP file on any template
                                collection website.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                        <div className="position-relative tm-thumbnail-container">
                            <img src="img/tn-04.jpg" alt="Image" className="img-fluid tm-catalog-item-img"/>
                            <a href="video-page.html" className="position-absolute tm-img-overlay">

                            </a>
                        </div>
                        <div className="p-4 tm-catalog-item-description">
                            <h3 className="tm-text-primary mb-3 tm-catalog-item-title">Nam tincidunt
                                consectetur</h3>
                            <p className="tm-catalog-item-text">You can apply this template for your commercial
                                CMS theme. Nam sem leo, imperdiet non lacinia eget, volutpat ac massa. Donec
                                mattis in velit quis commodo. Cras nec rutrum arcu.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                        <div className="position-relative tm-thumbnail-container">
                            <img src="img/tn-05.jpg" alt="Image" className="img-fluid tm-catalog-item-img"/>
                            <a href="video-page.html" className="position-absolute tm-img-overlay">

                            </a>
                        </div>
                        <div className="p-4 tm-catalog-item-description">
                            <h3 className="tm-text-primary mb-3 tm-catalog-item-title">Praesent posuere
                                rhoncus</h3>
                            <p className="tm-catalog-item-text">Duis vulputate nisl metus, eget dapibus nunc
                                ultricies id. Ut augue mauris, varius quis nulla non, sollicitudin consectetur
                                nisl. Donec eget arcu placerat, ullamcorper.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                        <div className="position-relative tm-thumbnail-container">
                            <img src="img/tn-06.jpg" alt="Image" className="img-fluid tm-catalog-item-img"/>
                            <a href="video-page.html" className="position-absolute tm-img-overlay">

                            </a>
                        </div>
                        <div className="p-4 tm-catalog-item-description">
                            <h3 className="tm-text-primary mb-3 tm-catalog-item-title">Turpis massa aliquam</h3>
                            <p className="tm-catalog-item-text">Nunc neque risus, ultrices sed luctus at,
                                iaculis at arcu. Pellentesque rutrum velit nec sapien ullamcorper ultrices.
                                Vestibulum lectus risus, laoreet pretium ipsum</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                        <div className="position-relative tm-thumbnail-container">
                            <img src="img/tn-07.jpg" alt=" imga" className="img-fluid tm-catalog-item-img"/>
                            <a href="video-page.html" className="position-absolute tm-img-overlay">

                            </a>
                        </div>
                        <div className="p-4 tm-catalog-item-description">
                            <h3 className="tm-text-primary mb-3 tm-catalog-item-title">Class aptent taciti
                                sociosqu</h3>
                            <p className="tm-catalog-item-text">Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Phasellus bibendum orci sit amet dignissim rhoncus.
                                Pellentesque pretium faucibus vestibulum.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                        <div className="position-relative tm-thumbnail-container">
                            <img src="img/tn-08.jpg" alt="Image" className="img-fluid tm-catalog-item-img"/>
                            <a href="video-page.html" className="position-absolute tm-img-overlay">

                            </a>
                        </div>
                        <div className="p-4 tm-catalog-item-description">
                            <h3 className="tm-text-primary mb-3 tm-catalog-item-title">Donec ac nisl ul
                                elit</h3>
                            <p className="tm-catalog-item-text">Suspendisse in odio congue, lobortis metus sed,
                                venenatis nisl. In dapibus et massa feugiat facilisis. Maecenas venenatis
                                aliquet nulla, a tincidunt erat suscipit eget.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                        <div className="position-relative tm-thumbnail-container">
                            <img src="img/tn-09.jpg" alt="Image" className="img-fluid tm-catalog-item-img"/>
                            <a href="video-page.html" className="position-absolute tm-img-overlay">

                            </a>
                        </div>
                        <div className="p-4 tm-catalog-item-description">
                            <h3 className="tm-text-primary mb-3 tm-catalog-item-title">Sed mattis nisi erat</h3>
                            <p className="tm-catalog-item-text">Integer ultricies mi eu aliquet cursus. Nam sem
                                leo, imperdiet non lacinia eget, volutpat ac massa. Donec mattis in velit quis
                                commodo. Cras nec rutrum arcu.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ul className="nav tm-paging-links">
                    <li className="nav-item active"><a href="#" className="nav-link tm-paging-link">1</a>
                    </li>
                    <li className="nav-item"><a href="#" className="nav-link tm-paging-link">2</a></li>
                    <li className="nav-item"><a href="#" className="nav-link tm-paging-link">3</a></li>
                    <li className="nav-item"><a href="#" className="nav-link tm-paging-link">4</a></li>
                    <li className="nav-item"><a href="#" className="nav-link tm-paging-link"> &#707;</a></li>
                </ul>
            </div>
        </>
    );
};

export default Blog;