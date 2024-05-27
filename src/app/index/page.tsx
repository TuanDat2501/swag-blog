import React from 'react';
import './style.scss';

const Home = () => {
    return (
        <>
            <div className="tm-page-wrap mx-auto">
                <div className="position-relative">
                    <div className="position-absolute tm-site-header">
                        <div className="container-fluid position-relative">
                            <div className="row">
                                <div className="col-7 col-md-4">
                                    <a href="index.html" className="tm-bg-black text-center tm-logo-container">
                                        <i className="fas fa-video tm-site-logo mb-3"></i>
                                        <h1 className="tm-site-name">Video Catalog</h1>
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
                                            <div className="collapse navbar-collapse tm-nav" id="navbar-nav">
                                                <ul className="navbar-nav text-uppercase">
                                                    <li className="nav-item active">
                                                        <a className="nav-link tm-nav-link" href="#">Videos <span
                                                            className="sr-only">(current)</span></a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link tm-nav-link" href="about.html">About</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link tm-nav-link"
                                                           href="contact.html">Contact</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tm-welcome-container text-center text-white">
                        <div className="tm-welcome-container-inner">
                            <p className="tm-welcome-text mb-1 text-white">Video Catalog is brought to you by
                                TemplateMo.</p>
                            <p className="tm-welcome-text mb-5 text-white">This is a full-width video banner.</p>
                            <a href="#content" className="btn tm-btn-animate tm-btn-cta tm-icon-down">
                                <span>Discover</span>
                            </a>
                        </div>
                    </div>

                    <div id="tm-video-container">
                        <video autoPlay muted loop id="tm-video">
                            <source src="video/sunset-timelapse-video.mp4" type="video/mp4"/>
                            <source src="video/wheat-field.mp4" type="video/mp4"/>
                        </video>
                    </div>

                    <i id="tm-video-control-button" className="fas fa-pause"></i>
                </div>

                <div className="container-fluid">
                    <div id="content" className="mx-auto tm-content-container">
                        <main>
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="tm-page-title mb-4">Our Video Catalog</h2>
                                    <div className="tm-categories-container mb-5">
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
                                <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                                    <div className="position-relative tm-thumbnail-container">
                                        <img src="/img/tn-01.jpg" alt="Image" className="img-fluid tm-catalog-item-img"/>
                                        <a href="video-page.html" className="position-absolute tm-img-overlay">
                                            <i className="fas fa-play tm-overlay-icon"></i>
                                        </a>
                                    </div>
                                    <div className="p-4 tm-bg-gray tm-catalog-item-description">
                                        <h3 className="tm-text-primary mb-3 tm-catalog-item-title">Aenean aliquet
                                            sapien</h3>
                                        <p className="tm-catalog-item-text">Video thumbnail has a link to another HTML
                                            page.
                                            Categories <span className="tm-text-secondary">do not need</span> any JS.
                                            They are just separated HTML pages. Paging is at the bottom to extend the
                                            list as long as you want.
                                            This can be a large catalog.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                                    <div className="position-relative tm-thumbnail-container">
                                        <img src="/img/tn-02.jpg" alt="Image" className="img-fluid tm-catalog-item-img"/>
                                        <a href="video-page.html" className="position-absolute tm-img-overlay">
                                            <i className="fas fa-play tm-overlay-icon"></i>
                                        </a>
                                    </div>
                                    <div className="p-4 tm-bg-gray tm-catalog-item-description">
                                        <h3 className="tm-text-primary mb-3 tm-catalog-item-title">Mauris in odio vel
                                            odio</h3>
                                        <p className="tm-catalog-item-text">You may need TemplateMo for a quick chat or
                                            send an email if you have any question about this CSS template.
                                            <span className="tm-text-secondary">font-family: 'Source Sans Pro', sans-serif; for this template.</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                                    <div className="position-relative tm-thumbnail-container">
                                        <img src="/img/tn-03.jpg" alt="Image" className="img-fluid tm-catalog-item-img"/>
                                        <a href="video-page.html" className="position-absolute tm-img-overlay">
                                            <i className="fas fa-play tm-overlay-icon"></i>
                                        </a>
                                    </div>
                                    <div className="p-4 tm-bg-gray tm-catalog-item-description">
                                        <h3 className="tm-text-primary mb-3 tm-catalog-item-title">Sagittis sodales
                                            enim</h3>
                                        <p className="tm-catalog-item-text">You are allowed to use this video catalog
                                            for your business websites.
                                            Please do not make a re-distribution of our template ZIP file on any
                                            template collection website.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                                    <div className="position-relative tm-thumbnail-container">
                                        <img src="/img/tn-04.jpg" alt="Image" className="img-fluid tm-catalog-item-img"/>
                                        <a href="video-page.html" className="position-absolute tm-img-overlay">
                                            <i className="fas fa-play tm-overlay-icon"></i>
                                        </a>
                                    </div>
                                    <div className="p-4 tm-bg-gray tm-catalog-item-description">
                                        <h3 className="tm-text-primary mb-3 tm-catalog-item-title">Nam tincidunt
                                            consectetur</h3>
                                        <p className="tm-catalog-item-text">You can apply this template for your
                                            commercial CMS theme. Nam sem leo, imperdiet non lacinia eget, volutpat ac
                                            massa. Donec mattis in velit quis commodo. Cras nec rutrum arcu.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                                    <div className="position-relative tm-thumbnail-container">
                                        <img src="/img/tn-05.jpg" alt="Image" className="img-fluid tm-catalog-item-img"/>
                                        <a href="video-page.html" className="position-absolute tm-img-overlay">
                                            <i className="fas fa-play tm-overlay-icon"></i>
                                        </a>
                                    </div>
                                    <div className="p-4 tm-bg-gray tm-catalog-item-description">
                                        <h3 className="tm-text-primary mb-3 tm-catalog-item-title">Praesent posuere
                                            rhoncus</h3>
                                        <p className="tm-catalog-item-text">Duis vulputate nisl metus, eget dapibus nunc
                                            ultricies id. Ut augue mauris, varius quis nulla non, sollicitudin
                                            consectetur nisl. Donec eget arcu placerat, ullamcorper.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                                    <div className="position-relative tm-thumbnail-container">
                                        <img src="/img/tn-06.jpg" alt="Image" className="img-fluid tm-catalog-item-img"/>
                                        <a href="video-page.html" className="position-absolute tm-img-overlay">
                                            <i className="fas fa-play tm-overlay-icon"></i>
                                        </a>
                                    </div>
                                    <div className="p-4 tm-bg-gray tm-catalog-item-description">
                                        <h3 className="tm-text-primary mb-3 tm-catalog-item-title">Turpis massa
                                            aliquam</h3>
                                        <p className="tm-catalog-item-text">Nunc neque risus, ultrices sed luctus at,
                                            iaculis at arcu. Pellentesque rutrum velit nec sapien ullamcorper ultrices.
                                            Vestibulum lectus risus, laoreet pretium ipsum</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                                    <div className="position-relative tm-thumbnail-container">
                                        <img src="/img/tn-07.jpg" alt="Image" className="img-fluid tm-catalog-item-img"/>
                                        <a href="video-page.html" className="position-absolute tm-img-overlay">
                                            <i className="fas fa-play tm-overlay-icon"></i>
                                        </a>
                                    </div>
                                    <div className="p-4 tm-bg-gray tm-catalog-item-description">
                                        <h3 className="tm-text-primary mb-3 tm-catalog-item-title">className aptent
                                            taciti sociosqu</h3>
                                        <p className="tm-catalog-item-text">Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit. Phasellus bibendum orci sit amet dignissim rhoncus.
                                            Pellentesque pretium faucibus vestibulum.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                                    <div className="position-relative tm-thumbnail-container">
                                        <img src="/img/tn-08.jpg" alt="Image" className="img-fluid tm-catalog-item-img"/>
                                        <a href="video-page.html" className="position-absolute tm-img-overlay">
                                            <i className="fas fa-play tm-overlay-icon"></i>
                                        </a>
                                    </div>
                                    <div className="p-4 tm-bg-gray tm-catalog-item-description">
                                        <h3 className="tm-text-primary mb-3 tm-catalog-item-title">Donec ac nisl ul
                                            elit</h3>
                                        <p className="tm-catalog-item-text">Suspendisse in odio congue, lobortis metus
                                            sed, venenatis nisl. In dapibus et massa feugiat facilisis. Maecenas
                                            venenatis aliquet nulla, a tincidunt erat suscipit eget.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                                    <div className="position-relative tm-thumbnail-container">
                                        <img src="/img/tn-09.jpg" alt="Image" className="img-fluid tm-catalog-item-img"/>
                                        <a href="video-page.html" className="position-absolute tm-img-overlay">
                                            <i className="fas fa-play tm-overlay-icon"></i>
                                        </a>
                                    </div>
                                    <div className="p-4 tm-bg-gray tm-catalog-item-description">
                                        <h3 className="tm-text-primary mb-3 tm-catalog-item-title">Sed mattis nisi
                                            erat</h3>
                                        <p className="tm-catalog-item-text">Integer ultricies mi eu aliquet cursus. Nam
                                            sem leo, imperdiet non lacinia eget, volutpat ac massa. Donec mattis in
                                            velit quis commodo. Cras nec rutrum arcu.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <ul className="nav tm-paging-links">
                                    <li className="nav-item active"><a href="#"
                                                                       className="nav-link tm-paging-link">1</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link tm-paging-link">2</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link tm-paging-link">3</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link tm-paging-link">4</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link tm-paging-link"></a></li>
                                </ul>
                            </div>
                        </main>
                        <div className="row mt-5 pt-3">
                            <div className="col-xl-6 col-lg-12 mb-4">
                                <div className="tm-bg-gray p-5 h-100">
                                    <h3 className="tm-text-primary mb-3">Do you want to get our latest updates?</h3>
                                    <p className="mb-5">Please subscribe our newsletter for upcoming new videos and
                                        latest information about our
                                        work. Thank you.</p>
                                    <form action="" method="GET" className="tm-subscribe-form">
                                        <input type="text" name="email" placeholder="Your Email..." required/>
                                        <button type="submit"
                                                className="btn rounded-0 btn-primary tm-btn-small">Subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 mb-4">
                                <div className="p-5 tm-bg-gray">
                                    <h3 className="tm-text-primary mb-4">Quick Links</h3>
                                    <ul className="list-unstyled tm-footer-links">
                                        <li><a href="#">Duis bibendum</a></li>
                                        <li><a href="#">Purus non dignissim</a></li>
                                        <li><a href="#">Sapien metus gravida</a></li>
                                        <li><a href="#">Eget consequat</a></li>
                                        <li><a href="#">Praesent eu pulvinar</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 mb-4">
                                <div className="p-5 tm-bg-gray h-100">
                                    <h3 className="tm-text-primary mb-4">Our Pages</h3>
                                    <ul className="list-unstyled tm-footer-links">
                                        <li><a href="#">Our Videos</a></li>
                                        <li><a href="#">License Terms</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">Privacy Policies</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <footer className="row pt-5">
                            <div className="col-12">
                                <p className="text-right">Copyright 2020 The Video Catalog Company

                                    - Designed by <a href="https://templatemo.com" rel="nofollow"
                                                     target="_parent">TemplateMo</a></p>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;