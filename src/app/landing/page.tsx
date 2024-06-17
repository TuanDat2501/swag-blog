'use client'
import React, { useEffect, useLayoutEffect, useState } from 'react';
import './style.scss';
import IPlay from "@/icon/IPlay";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import Image from "next/image";

import SkeletonItem from "@/app/component/SkeletonItem/SkeletonItem";
import { DataChannel } from "@/app/const/interface";
import { BASE_URL_VIDEO, DATA_CHANNEL } from "@/app/const/const";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SwiperComponent from '../component/swiperSlide/SwiperComponent';
interface IItemVideo {
    videoId: string;
    thumbnailUrl: string;
    title: string;
    description: string;
}

const Landing = () => {
    const [subs, setSubs] = useState(0)
    const [views, setViews] = useState(0)
    const [videos, setVideos] = useState(0)
    const router = useRouter();
    const [nextPageToken, setNextPageToken] = useState("")
    const searchParam = useSearchParams();
    const channelId = searchParam.get('c');
    const [listIdVideo, setListIdVideo] = useState("");
    const [listItemVideo, setlistItemVideo] = useState<IItemVideo[]>()
    const data_channel = DATA_CHANNEL;
    const [dataChannelState, setDataChannelState] = useState<DataChannel | null>()

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
                            count = count + 10;
                            setVideos(count)
                            break;
                        default:
                    }
                }
            }, ms);
        });
        return count;
    }

    const clickVideo = (videoId: string) => {
        router.push('/video?videoId=' + videoId);
    }
    const nextPage = (pageToken: string) => {
        dataChannelState && getData(pageToken, dataChannelState);
    }
    const changeCategory = (item: any) => {
        router.push(`?c=${item.channelId}`)
        setDataChannelState(item);
    }
    const getData = (pageToken: string, item: DataChannel) => {

        axios.get(`${BASE_URL_VIDEO}activities`, {
            params: {
                maxResults: 15,
                channelId: item.channelId,
                part: "snippet,contentDetails",
                key: item.api_key,
                pageToken: pageToken
            }
        }).then((res) => {
            const listItems = res.data.items
            setNextPageToken(res.data.nextPageToken);
            let arr = [];
            let temp: IItemVideo[] = [];
            for (let i = 0; i < listItems.length; i++) {
                //arr.push(listItems[i].contentDetails.upload.videoId);
                if (listItems[i].snippet.type == "upload") {
                    const a: IItemVideo = {
                        videoId: listItems[i].contentDetails.upload?.videoId ? listItems[i].contentDetails.upload.videoId : listItems[i].contentDetails.playlistItem.resourceId.videoId,
                        thumbnailUrl: listItems[i].snippet.thumbnails.standard.url,
                        title: listItems[i].snippet.title,
                        description: listItems[i].snippet.description
                    }

                    temp.push(a);
                }
            }

            setlistItemVideo(temp);
            item.items = temp;

            //getInfoVideo(joinArr);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
        })
    }
    useEffect(() => {
        let data;
        if (channelId) {
            data = data_channel.find((item) => item.channelId == channelId) as DataChannel;
        } else {
            data = {
                name: "We luck",
                api_key: "AIzaSyBnTJYeJFCcwmKiC8dDWPce6WuiTKA2pR4",
                channelId: "UC3dW5i2TdXzcXBUEYpl8pgQ",
                blogId: "2336283564104274815",
                items:[]
            }
        }
        waitUntil(1.2, 200, 1);
        waitUntil(3.5, 50, 2);
        waitUntil(2000, 1, 3);
        getData("", data as DataChannel);
    }, [channelId, data_channel]);
    useLayoutEffect(() => {
        setDataChannelState({
            name: "We luck",
            api_key: "AIzaSyBnTJYeJFCcwmKiC8dDWPce6WuiTKA2pR4",
            channelId: "UC3dW5i2TdXzcXBUEYpl8pgQ",
            blogId: "2336283564104274815",
            items: []
        })
    }, [])
    useEffect(() => {
        for (let i = 0; i < data_channel.length; i++) {
            getData("", data_channel[i])
        }
        console.log(data_channel);
    }, [data_channel]);
    /* const slowVideo = ()=>{
        const video = document.querySelector('#tm-video');
        video.
    } */
    return (
        <>
            <div className="main-index">
                <div className="tm-welcome-container text-center text-white">
                    <div className="tm-welcome-container-inner">
                        {/*   <p className="tm-welcome-text mb-1 text-white">Video Catalog is brought to you by
                            TemplateMo.</p>
                        <p className="tm-welcome-text mb-5 text-white">This is a full-width video banner.</p> */}
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
                                <div className="e-con-number">{videos}+</div>
                                <div className="e-con-text">Videos</div>
                            </div>
                            <div className="e-con-item">
                                <div className="e-con-number">2016</div>
                                <div className="e-con-text">Since</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tm-video-container">
                    <div className="overlay"></div>
                    <video autoPlay muted loop id="tm-video">
                        <source  src="./video/video.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="container-fluid">
                <div id="content" className="mx-auto tm-content-container">
                    <main>
                        {/* <div className="row">
                            <div className="col-12">
                                <h2 className="tm-page-title mb-4">Our Video Catalog</h2>
                                <div className="tm-categories-container mb-5">
                                    <h3 className="tm-text-primary tm-categories-text">Categories:</h3>
                                    <ul className="nav tm-category-list">
                                        {data_channel.map((item, index: number) => <li key={index}
                                            className="nav-item tm-category-item">
                                            <div className={channelId == item.channelId ? "nav-link tm-category-link active cursor-pointer" : "nav-link tm-category-link cursor-pointer"}
                                                onClick={() => changeCategory(item)}>{item.name}</div>
                                        </li>)}
                                    </ul>
                                </div>
                            </div>
                        </div> */}

                        <div className="row tm-catalog-item-list">
                            {data_channel.map((item, index) =>
                                <SwiperComponent key={index} data={item}></SwiperComponent>
                            )}

                            {/* {listItemVideo ? listItemVideo.map((video,index:number) =>
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                                        <div className="position-relative tm-thumbnail-container">
                                            <Image width={500} height={500} quality={100} src={video.thumbnailUrl}
                                                   alt="Image"
                                                   className="img-fluid tm-catalog-item-img"/>
                                            <a className="position-absolute tm-img-overlay"
                                               onClick={() => clickVideo(video.videoId)}>
                                                <IPlay></IPlay>
                                            </a>
                                        </div>
                                        <div className="p-4 tm-bg-gray tm-catalog-item-description">
                                            <h3 className="tm-text-primary mb-3 tm-catalog-item-title">{video.title}</h3>
                                            <p className="tm-catalog-item-text">{video.description}</p>
                                        </div>
                                    </div>

                            ) : 
                            <div className='flex gap-3'>
                                <SkeletonItem></SkeletonItem>
                                <SkeletonItem></SkeletonItem>
                                <SkeletonItem></SkeletonItem>
                            </div>} */}

                        </div>
                       {/*  <div>
                            <ul className="nav tm-paging-links">
                                <li className="nav-item active"><a className="nav-link tm-paging-link">&#x3c;</a>
                                </li>
                                <li className="nav-item"><a className="nav-link tm-paging-link"
                                    onClick={() => nextPage(nextPageToken)}> &#x3e;</a>
                                </li>
                            </ul>
                        </div> */}
                    </main>
                </div>
            </div>
        </>
    );
};

export default Landing;