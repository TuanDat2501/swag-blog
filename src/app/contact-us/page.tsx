'use client'
import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Toast from '../component/toast/Toast';
import IMobile from '@/icon/IMobile';
import IEmail from '@/icon/IEmail';
import IAddress from '@/icon/IAddress';
const ContactUs = () => {
    const [name, setName] = useState("")
    const [subject, setSubject] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [isShowToast, setIsShowToast] = useState(true);
    const [status, setStatus] = useState<string | null>(null)
    const [textToast, setTextToast] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const setText = (text: any, flag: number) => {
        switch (flag) {
            case 1:
                setName(text.target.value);
                break;
            case 2:
                setSubject(text.target.value);
                break;
            case 3:
                setEmail(text.target.value);
                break;
            case 4:
                setMessage(text.target.value);
                break;
        }
    }
    const showToast = (status: string, text: string) => {
        setIsLoading(false);
        setStatus(status);
        setTextToast(text);
        setIsShowToast(true);
        const x = setTimeout(() => {
            setIsShowToast(false);
            clearTimeout(x);
        }, 3000)
    }
    const sendEmail = (e: any) => {
        setIsLoading(true);
        if (name) {
            if (email) {
                        e.preventDefault();
                        emailjs.send("service_bu4qdm8", "template_dreebfa", {
                            to_name: name,
                            from_name: email,
                            message: message,
                            subject: subject,
                        } as any, {
                            publicKey: 'dpxBwH5fLwc07_x8B',
                        })
                            .then(
                                () => {
                                    showToast("success", "You have successfully submitted!")
                                    console.log('SUCCESS!');
                                },
                                (error:any) => {
                                    showToast("failed", "Your sending failed!")
                                    console.log('FAILED...', error.text);
                                },
                            );
            } else {
                showToast("warning", "You need to enter your email!")
            }
        } else {
            showToast("warning", "You need to enter your full name!")
        }

    };4
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
                                <br />They happened with some great labor and pain.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <div className="title">
                                    <h3>Contact detail</h3>
                                    <p>It is very important for the customer to follow the coaching process, but I will give it this time</p>
                                </div>
                                <div className="content">
                                    <div className="info">
                                        <IMobile></IMobile>
                                        <h4 className="d-inline-block">PHONE :
                                            <br />
                                            <span> (389) 181-9630</span></h4>
                                    </div>

                                    <div className="info">
                                        <IEmail></IEmail>
                                        <h4 className="d-inline-block">EMAIL :
                                            <br />
                                            <span>copyright@swagmedia.co</span></h4>
                                    </div>

                                    <div className="info">
                                        <IAddress></IAddress>
                                        <h4 className="d-inline-block">ADDRESS :<br />
                                            <span>1820 Front Avenue NE, Albany, Oregon, United States, 97321</span></h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-7">

                                <form >
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" placeholder="Name*" onChange={(e)=>setText(e,1)}/>
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="email" className="form-control" placeholder="Email*" onChange={(e)=>setText(e,2)}/>
                                        </div>
                                        <div className="col-sm-12">
                                            <input type="text" className="form-control" placeholder="Subject" onChange={(e)=>setText(e,3)}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" rows={5} id="comment" placeholder="Message" onChange={(e)=>setText(e,4)}></textarea>
                                    </div>
                                </form>
                                    <button className="btn btn-block" type="submit" onClick={sendEmail}>Send Now!</button>
                                {isShowToast && <Toast status={status} text={textToast}></Toast>}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>


    );
};

export default ContactUs;