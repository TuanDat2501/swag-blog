'use client'
import React, { useEffect, useState } from 'react';
import './style.scss';
import IUpload from "@/icon/IUpload";
import ITick from "@/icon/ITick";
import Toast from "@/app/component/toast/Toast";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    uploadBytesResumable,
    listAll,
    list,
} from "firebase/storage";
import { storage } from "@/app/firebase";
import { v4 } from "uuid";
import axios from "axios";
import { Simulate } from "react-dom/test-utils";
import { useForm } from "react-hook-form";
import { Progress } from 'antd';
const Video = () => {

    useEffect(() => {
        require("../../app/bootstrap.min.css");
    }, []);
    const [file, setFile] = useState<any>();
    const [isLoadingFileIcon, setIsLoadingFileIcon] = useState(false)
    const [isLoadingFileComplete, setIsLoadingFileComplete] = useState(false)
    const [name, setName] = useState("")
    const [rule1, setRule1] = useState(false)
    const [rule2, setRule2] = useState(false)
    const [email, setEmail] = useState("")
    const [linkUpload, setLinkUpload] = useState("")
    const [linkYoutube, setLinkYoutube] = useState("")
    const [message, setMessage] = useState("")
    const [isShowToast, setIsShowToast] = useState(true);
    const [status, setStatus] = useState<string | null>(null)
    const [progress,setProgress] = useState(0);
    const [textToast, setTextToast] = useState("")
    const showToast = (status: string, text: string) => {
        setStatus(status);
        setTextToast(text);
        setIsShowToast(true);
        const x = setTimeout(() => {
            setIsShowToast(false);
            clearTimeout(x);
        }, 3000)
    }

    const setText = (text: any, flag: number) => {
        switch (flag) {
            case 1:
                setName(text);
                break;
            case 2:
                setEmail(text);
                break;
            case 3:
                setLinkYoutube(text);
                break;
            case 4:
                setMessage(text);
                break;
            case 5:
                setFile(text[0]);
                break;
        }
    }
    const uploadVideo = (file: any) => {
        if (file == null) return;
        const storageRef = ref(storage, '/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
                setIsLoadingFileIcon(true);
            },
            (error) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;
                    // ...
                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setLinkUpload(downloadURL);
                    setIsLoadingFileIcon(true);
                    setIsLoadingFileComplete(true);
                });
            }
        );
    }
    /*  const submit = async () => {
         const auth = new google.auth.GoogleAuth({
             credentials: {
                 client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL_ID,
                 client_id: process.env.NEXT_PUBLIC_CLIENT_ID_SHEET,
                 private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY?.replace(/\\n/g, '\n'),
             },
             scopes: [
                 'https://www.googleapis.com/auth/drive',
                 'https://www.googleapis.com/auth/drive.file',
                 'https://www.googleapis.com/auth/spreadsheets',
             ],
         });
     
         const sheets = google.sheets({
             auth,
             version: 'v4',
         });
         const {name,email,linkUpload,linkYoutube,message}=req.body
         const response = sheets.spreadsheets.values.append({
             spreadsheetId: "1FGkk4LScYui8RuiGCgGMt-GREZuG9SDgKwhwyXaaFXc",
             range: 'Page1!A2:E2',
             valueInputOption: 'RAW',
             requestBody: {
                 values: [[name||"",email||"",linkUpload||"",linkYoutube||"",message||""]],
                 
             },
         });
     } */
    /* const submit = async () => {

        if (name) {
            if (email) {
                if(linkUpload || linkYoutube){
                    if(rule1 && rule2){
                        axios.post("https://data-blog-zkom.onrender.com/video",{
                            id:randomStr(5),
                            name:name,
                            email:email,
                            urlVideo:linkUpload,
                            urlYoutube:linkYoutube,
                            message:message
                        }).then((res)=>{
                            if(res.status == 201){
                                showToast("success", "You have successfully uploaded the video!")
                            }else {
                                showToast("failed", "Your video upload failed!")
                            }
                        })
                    }else {
                        showToast("warning", "You need to accept the rules!")
                    }
                }else {
                    showToast("warning", "You need to upload a video!")
                }
            } else {
                showToast("warning", "You need to enter your email!")
            }
        } else {
            showToast("warning", "You need to enter your full name!")
        }

    } */
    useEffect(() => {
        if (file == null) return;
        uploadVideo(file);
    }, [file]);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }, // catch error messages
    } = useForm();
    function submitHandler(data: any) {
        if (rule1 && rule2) {
            if(linkUpload == "" && linkYoutube == ""){
                showToast("warning", "You need to upload a video!")
            }else{
                fetch('https://data-swag.onrender.com/write', {
                    method: 'POST',
                    body: JSON.stringify({ ...data, linkUpload: linkUpload }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then(res => {
                    if (res.status == 200) {
                        showToast("success", "You have successfully uploaded the video!")
                        reset();
                    }else{
                        showToast("failed", "Your video upload failed!")
                    }
                });
            }
        }else{
            showToast("warning", "You need to accept the rules!")
        }
    }
    useEffect(()=>{
        return ()=>{
            setLinkUpload(""); 
        }
    },[])
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
                    <form className="form" onSubmit={handleSubmit(submitHandler)}>
                        <div className="input">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name"
                                {...register('name', { required: true })}
                                aria-invalid={errors.name ? "true" : "false"}
                            />
                            {errors.name?.type === 'required' && <p className='error' role="alert">*Please enter your name</p>}
                        </div>
                        <div className="input">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email"
                                {...register('email', { required: true })}
                            />
                            {errors.email?.type === 'required' && <p className='error' role="alert">*Please enter your email</p>}
                        </div>
                        <div className="input">
                            <div className="container-input input-position flex flex-col gap-2 file">
                                <label htmlFor="position">Video</label>
                                <div className="input-file">
                                    <span className='icon-loading'>
                                        {!isLoadingFileIcon ? <IUpload width={50} height={50}></IUpload> :
                                            <Progress className='progress' size={50} type="circle" percent={progress}/>}
                                        {file ? <p>{file.name}</p> : <p>Choose your video file</p>}
                                    </span>
                                    <input id="position" type="file" placeholder="Vị trí bạn quan tâm"
                                        onChange={(e) => setText(e.target.files, 5)} />
                                </div>
                            </div>
                        </div>
                        <div className="input">
                            <label htmlFor="link">Or Link Youtube</label>
                            <input type="text" id="link"
                                {...register('linkYoutube')}
                            />
                        </div>
                        <div className="rule">
                            <div className="checkbox">
                                <input type="checkbox" id="rule1" onChange={() => setRule1(!rule1)} />
                                <label htmlFor="rule1">I have all the rights to submit my video(s)</label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" id="rule2" onChange={() => setRule2(!rule2)} />
                                <label htmlFor="rule2">I am granting Swag full rights to use them on all of their
                                    publishing platforms.</label>
                            </div>
                        </div>
                        <div className="input">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows={4} cols={20}
                                {...register('message')} />
                        </div>
                        <button type="submit" className="btn rounded-0 btn-primary tm-btn-small">submit</button>
                    </form>
                    {/* <button className="btn rounded-0 btn-primary tm-btn-small" onClick={submit}>submit</button> */}
                </div>
                {isShowToast && <Toast status={status} text={textToast}></Toast>}
            </div>
        </>
    );
};

export default Video;