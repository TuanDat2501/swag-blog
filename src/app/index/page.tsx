'use client'
import React, {useEffect, useState} from 'react';
import './style.scss';
import IPlay from "@/icon/IPlay";
import {useRouter} from "next/navigation";
import axios from "axios";
import {API_KEY, BASE_URL_VIDEO} from "@/app/const/const";

interface IItemVideo {
    videoId: string;
    thumbnailUrl: string;
    title: string;
    description: string;
}

const Index = () => {
    const [subs, setSubs] = useState(0)
    const [views, setViews] = useState(0)
    const [videos, setVideos] = useState(0)
    const router = useRouter();
    const channelId = "UCB1mpBAGHpUHBs17UZZVeDw";
    const [listIdVideo, setListIdVideo] = useState("");
    const [listItemVideo, setlistItemVideo] = useState<IItemVideo[]>()

    async function waitUntil(limit: number, ms: number, flag: number) {
        var count = 0;
        await new Promise(resolve => {
            const interval = setInterval(() => {
                if (count < limit) {

                    switch (flag) {
                        case 1:
                            count = count + 0.200;
                            var n = count.toFixed(2);
                            setSubs(Number(n));
                            break;
                        case 2:
                            count = count + 0.1;
                            var n = count.toFixed(1);
                            setViews(Number(n))
                            break;
                        case 3:
                            count++;
                            setVideos(count)
                            break;
                        default:
                    }
                }
            }, ms);
        });
        return count;
    }
    const clickVideo = (videoId:string)=>{
        router.push('/video?videoId='+videoId);
    }
    useEffect(() => {
        require("../../app/bootstrap.min.css");
        waitUntil(1.2, 200, 1);
        waitUntil(3.5, 50, 2);
        waitUntil(300, 5, 3);
        axios.get(`${BASE_URL_VIDEO}activities`, {
            params: {
                maxResults: 25,
                channelId: channelId,
                part: "snippet,contentDetails",
                key: API_KEY,
            }
        }).then((res) => {
            const listItems = res.data.items
            let arr = [];
            let temp:IItemVideo[]=[];
            for (let i = 0; i < listItems.length; i++) {
                if (listItems[i].snippet.type === "upload") {
                    arr.push(listItems[i].contentDetails.upload.videoId);
                    const a :IItemVideo={
                        videoId:listItems[i].contentDetails.upload.videoId,
                        thumbnailUrl: listItems[i].snippet.thumbnails.standard.url,
                        title:listItems[i].snippet.title,
                        description:listItems[i].snippet.description
                    }
                    temp.push(a);
                }
            }
            const joinArr = arr.join(',');
            setlistItemVideo(temp);
            //getInfoVideo(joinArr);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
        })
    }, []);

    return (
        <>
            <div className="main-index">
                <div className="tm-welcome-container text-center text-white">
                    <div className="tm-welcome-container-inner">
                        <p className="tm-welcome-text mb-1 text-white">Video Catalog is brought to you by
                            TemplateMo.</p>
                        <p className="tm-welcome-text mb-5 text-white">This is a full-width video banner.</p>
                        {/* <a href="#" className="btn tm-btn-animate tm-btn-cta tm-icon-down">
                            <span>Discover</span>
                        </a>*/}
                        <div className="e-con">
                            <div className="e-con-item">
                                <div className="e-con-number">{subs}+</div>
                                <div className="e-con-text">Million Subscribers</div>
                            </div>
                            <div className="e-con-item">
                                <div className="e-con-number">{views}+</div>
                                <div className="e-con-text">Million Views</div>
                            </div>
                            <div className="e-con-item">
                                <div className="e-con-number">{videos}</div>
                                <div className="e-con-text">Videos</div>
                            </div>
                            <div className="e-con-item">
                                <div className="e-con-number">2024</div>
                                <div className="e-con-text">Since</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tm-video-container">
                    <video autoPlay muted loop id="tm-video">
                        <source src="/video/wheat-field.mp4" type="video/mp4"/>
                    </video>
                </div>
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
                                                                                     className="nav-link tm-category-link">Mouse
                                            Farm</a></li>
                                        <li className="nav-item tm-category-item"><a href="#"
                                                                                     className="nav-link tm-category-link">Nova
                                            Trend</a>
                                        </li>
                                        <li className="nav-item tm-category-item"><a href="#"
                                                                                     className="nav-link tm-category-link">We
                                            Win New</a>
                                        </li>
                                        <li className="nav-item tm-category-item"><a href="#"
                                                                                     className="nav-link tm-category-link">Swag
                                            Lab</a>
                                        </li>
                                        <li className="nav-item tm-category-item"><a href="#"
                                                                                     className="nav-link tm-category-link">Swag Tech</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="row tm-catalog-item-list">
                            {listItemVideo?.map((video) =>
                                <>
                                    <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                                        <div className="position-relative tm-thumbnail-container">
                                            <img src={video.thumbnailUrl} alt="Image"
                                                 className="img-fluid tm-catalog-item-img"/>
                                            <a className="position-absolute tm-img-overlay" onClick={()=>clickVideo(video.videoId)}>
                                                <IPlay></IPlay>
                                            </a>
                                        </div>
                                        <div className="p-4 tm-bg-gray tm-catalog-item-description">
                                            <h3 className="tm-text-primary mb-3 tm-catalog-item-title">{video.title}</h3>
                                            <p className="tm-catalog-item-text">{video.description}</p>
                                        </div>
                                    </div>
                                </>
                            )}

                        </div>
                        <div>
                            <ul className="nav tm-paging-links">
                                <li className="nav-item active"><a href="#" className="nav-link tm-paging-link">1</a>
                                </li>
                                <li className="nav-item"><a href="#" className="nav-link tm-paging-link">2</a></li>
                                <li className="nav-item"><a href="#" className="nav-link tm-paging-link">3</a></li>
                                <li className="nav-item"><a href="#" className="nav-link tm-paging-link">4</a></li>
                                <li className="nav-item"><a href="#" className="nav-link tm-paging-link"> &#707;</a>
                                </li>
                            </ul>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default Index;