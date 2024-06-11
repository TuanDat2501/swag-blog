'use client'
import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';
import React, { useState } from 'react';
const ContactUs = () => {
    const [name,setName] = useState("")
    const [subject,setSubject] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")
    return (
         <>
            <div className="header-contact-us">
                <div className="overlay"></div>
            </div>
            <div className='content-contact-us'>
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
                                            <span> (389) 181-9630</span></h4>
                                </div>
                    
                                <div className="info">
                                    <i className="far fa-envelope"></i>
                                    <h4 className="d-inline-block">EMAIL :
                                        <br/>
                                            <span>copyright@swagmedia.co</span></h4>
                                </div>
                       
                                <div className="info">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <h4 className="d-inline-block">ADDRESS :<br/>
                                        <span>1820 Front Avenue NE, Albany, Oregon, United States, 97321</span></h4>
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