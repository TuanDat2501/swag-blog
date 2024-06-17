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
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import Loading1 from '../component/Loading1/Loading1';
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
    const [base64File, setBase64File] = useState("")
    const [message, setMessage] = useState("")
    const [isShowToast, setIsShowToast] = useState(true);
    const [isLogin, setIsLogin] = useState(false);
    const [isDisable, setIsDisable] = useState(false);
    const [status, setStatus] = useState<string | null>(null)
    const [progress, setProgress] = useState(0);
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
                setIsLoadingFileIcon(true)
                setFile(text[0]);
                break;
        }
    }
    const uploadVideo = (file: any) => {
        if (file == null) return;
        //setIsDisable(true);
        const storageRef = ref(storage, '/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        /* uploadTask.on('state_changed',
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
                    setIsDisable(false);
                });
            }
        ); */
        /* const fileReader = new FileReader();
        fileReader.onload = ()=>{
            console.log("resu",fileReader.result);
        }
        const blobFile = new Blob */
        reader(file, (err: any, res: any) => {
            console.log(dataURLtoFile(res, file.name)); // Base64 `data:image/...` String result.
            setBase64File(res);
            setIsDisable(false);
        })
    }
    function dataURLtoFile(dataurl: any, filename: any) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[arr.length - 1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }
    function reader(file: any, callback: any) {
        const fr = new FileReader();
        fr.onload = () => callback(null, fr.result);
        fr.onerror = (err) => callback(err);
        fr.readAsDataURL(file);
    }
    useEffect(() => {
        if (file == null) return;
        uploadVideo(file);
    }, [file]);
    const {
        register,
        handleSubmit,
        reset,
        getValues,
        formState: { errors }, // catch error messages
    } = useForm();
    function submitHandler(data: any) {
        if (rule1 && rule2) {
            if (!file && linkYoutube == "") {
                showToast("warning", "You need to upload a video!")
            } else {
                setIsLoadingFileComplete(true);
                let form = new FormData();
                form.append('file', base64File);
                form.append('fileName', file.name);
                form.append('message', name + " " + email + " " + message);
                axios.post('http://localhost:3001/token',
                    form, {
                    headers: {
                        "Content-Type": 'application/x-www-form-urlencoded',
                    }
                }
                ).then(res => {
                    if (res.status == 200) {
                        axios.post("http://localhost:3001/write", {
                            name: getValues("name"),
                            email: getValues("email"),
                            linkUpload: `https://drive.google.com/file/d/${res.data.idVideo}/view`,
                            linkYoutube: getValues("linkYoutube"),
                            message: getValues("message")
                        }).then((res) => {
                            if (res.status == 200) {
                                showToast("success", "You have successfully uploaded the video!")
                            } else {
                                showToast("failed", "Your video upload failed!")
                            }
                            setIsLoadingFileComplete(false)
                        })
                        
                    }
                })
            }
        } else {
            showToast("warning", "You need to accept the rules!")
        }
    }
    useEffect(() => {
        return () => {
            setLinkUpload("");
        }
    }, [])
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
                            <label htmlFor="name">Name (*)</label>
                            <input type="text" id="name"
                                {...register('name', { required: true })}
                                aria-invalid={errors.name ? "true" : "false"}
                            />
                            {errors.name?.type === 'required' && <p className='error' role="alert">*Please enter your name</p>}
                        </div>
                        <div className="input">
                            <label htmlFor="email">Email (*)</label>
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
                                            <ITick width={50} height={50}/>}
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
                                onChange={(e) => setText(e.target.files, 3)}
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
                        <button disabled={isDisable} type="submit" className="btn rounded-0 btn-primary tm-btn-small">
                            {isLoadingFileComplete ? <span><Loading1></Loading1></span> : "submit"}
                            </button>
                    </form>
                    {/* <button className="btn rounded-0 btn-primary tm-btn-small" onClick={submit}>submit</button> */}
                </div>
                {isShowToast && <Toast status={status} text={textToast}></Toast>}
            </div>
        </>
    );
};

export default Video;