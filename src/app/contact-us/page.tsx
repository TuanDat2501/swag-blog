import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';
import React from 'react';
const ContactUs = () => {

    return (
         <>
            <div className="header-contact-us">
                <div className="overlay"></div>
            </div>
            <div className='content-contact-us'>
                {/* <div className="container">

                    <h1 className="brand"><span>Phoenix Web Design</span></h1>

                    <div className="wrapper">

        
                        <div className="company-info">
                            <h3>Phoenix Web Design</h3>

                            <ul>
                                <li><i className="fa fa-road"></i> 44 Main Street</li>
                                <li><i className="fa fa-phone"></i> (555) 555-5555</li>
                                <li><i className="fa fa-envelope"></i> test@phoenix.com</li>
                            </ul>
                        </div>
                    
                        <div className="contact">
                            <h3>E-mail Us</h3>

                            <form id="contact-form">

                                <p>
                                    <label>Name</label>
                                    <input type="text" name="name" id="name" required/>
                                </p>

                                <p>
                                    <label>Company</label>
                                    <input type="text" name="company" id="company"/>
                                </p>

                                <p>
                                    <label>E-mail Address</label>
                                    <input type="email" name="email" id="email" required/>
                                </p>

                                <p>
                                    <label>Phone Number</label>
                                    <input type="text" name="phone" id="phone"/>
                                </p>

                                <p className="full">
                                    <label>Message</label>
                                    <textarea name="message" rows={5} id="message"></textarea>
                                </p>

                                <p className="full">
                                    <button type="submit">Submit</button>
                                </p>

                            </form>
                        </div>
                    </div>
                </div> */}
                <section className="contact" id="contact">
                <div className="container">
                    <div className="heading text-center">
                        <h2>Contact
                            <span> Us </span></h2>
                        <p>It is very important for the customer to follow the coaching process, but I will give it this time
                            <br/>They happened with some great labor and pain.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="title">
                                <h3>Contact detail</h3>
                                <p>It is very important for the customer to follow the coaching process, but I will give it this time</p>
                            </div>
                            <div className="content">
                            
                                <div className="info">
                                    <i className="fas fa-mobile-alt"></i>
                                    <h4 className="d-inline-block">PHONE :
                                        <br/>
                                            <span>+12457836913 , +12457836913</span></h4>
                                </div>
                    
                                <div className="info">
                                    <i className="far fa-envelope"></i>
                                    <h4 className="d-inline-block">EMAIL :
                                        <br/>
                                            <span>example@info.com</span></h4>
                                </div>
                       
                                <div className="info">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <h4 className="d-inline-block">ADDRESS :<br/>
                                        <span>6743 last street , Abcd, Xyz</span></h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-7">

                            <form>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control" placeholder="Name"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="email" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" placeholder="Subject"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" rows={5} id="comment" placeholder="Message"></textarea>
                                </div>
                                <button className="btn btn-block" type="submit">Send Now!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </> 
    

    );
};

export default ContactUs;