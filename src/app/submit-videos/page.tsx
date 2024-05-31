'use client'
import React, {useEffect, useState} from 'react';
import './style.scss';
import IUpload from "@/icon/IUpload";
import ITick from "@/icon/ITick";

const Video = () => {
    useEffect(() => {
        require("../../app/bootstrap.min.css");
    }, []);
    const [file, setFile] = useState<any>();
    const [isLoadingFileIcon, setIsLoadingFileIcon] = useState(false)
    return (
        <>
            <div className="header-submit-video">
                <div className="overlay"></div>
            </div>
            <div className="content-submit-video">
                <div className="title">
                    <h1>Share Your Expertise</h1>
                    <ul>
                        <li>Exposure: Reach a wide audience through our popular network.</li>
                        <li>Recognition: Boost your brand’s visibility by being featured on our video. Your submitted
                            Name or Brand will be credited.
                        </li>
                        <li>Signature: Leave a lasting impression and establish your brand’s signature with global
                            audience.
                        </li>
                    </ul>
                </div>
                <div className="form-submit">
                    <form className="form">
                        <div className="input">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name"/>
                        </div>
                        <div className="input">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email"/>
                        </div>
                        <div className="input">
                            <div className="container-input input-position flex flex-col gap-2 file">
                                <label htmlFor="position">Video</label>
                                <div className="input-file">
                            <span>
                                {!isLoadingFileIcon ? <IUpload width={50} height={50}></IUpload> :
                                    <ITick width={50} height={50}></ITick>}
                                {file ? <p>{file.name}</p> : <p>Choose your video file</p>}
                            </span>
                                    <input id="position" type="file" placeholder="Vị trí bạn quan tâm"/>
                                </div>
                            </div>
                        </div>
                        <div className="rule">
                            <div className="checkbox">
                                <input type="checkbox" id="rule1"/>
                                <label htmlFor="rule1">I have all the rights to submit my video(s)</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" id="rule2"/>
                                <label htmlFor="rule2">I am granting Swag full rights to use them on all of their publishing platforms.</label>
                            </div>
                        </div>
                        <div className="input">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" rows={4} cols={20}/>
                        </div>
                        <button className="btn rounded-0 btn-primary tm-btn-small">submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Video;