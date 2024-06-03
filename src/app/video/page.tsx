'use client'
import React, {useEffect, useState} from 'react';
import './style.scss';
import {useSearchParams} from "next/navigation";
import axios from "axios";
import {API_KEY, BASE_URL_VIDEO} from "@/app/const/const";
import parse from  "html-react-parser";
import moment from "moment/moment";
interface IItemVideo {
    videoId: string|null;
    title: string;
    description: string;
    iframeVideo:string;
    publishedAt:string;
    channelTitle:string;

}

const Video = () => {
    const params = useSearchParams();
    const [itemVideo, setItemVideo] = useState<IItemVideo>()
    useEffect(() => {
        axios.get(`${BASE_URL_VIDEO}videos`, {
            params: {
                part: "snippet,contentDetails,player",
                key: API_KEY,
                id: params.get('videoId')
            }
        }).then((res) => {
            const item = res.data.items[0];
            const options = { month: "long", day: "numeric", year: "numeric" } as any;
            const date = new Date(item.snippet.publishedAt);
            const americanDate = new Intl.DateTimeFormat("en-US", options).format(date);
            let temp={
                videoId:item.id,
                iframeVideo:item.player.embedHtml,
                description:item.snippet.description,
                title:item.snippet.title,
                publishedAt:americanDate,
                channelTitle:item.snippet.channelTitle,
            } as IItemVideo;
            setItemVideo(temp);
        }).catch((error) => {
            console.log(error)
        }).finally(() => {

        })
    }, [params]);

    return (
        <>
            <div className="header-video">
                <div className="overlay"></div>
            </div>
            <div className="content-video">
                <div className="content-video-title">
                    <h1><strong>{itemVideo?.title}</strong></h1>
                </div>
                <div className="content-video-date">
                    <p>{itemVideo?.publishedAt}</p>
                </div>
                <div className="content-video-channel-title">
                    <p>Channel : <strong>{itemVideo?.channelTitle}</strong></p>
                </div>
                <div className="content-video-player">
                    {itemVideo && parse(itemVideo?.iframeVideo)}
                </div>
                <div className="content-video-description">
                    <p>{itemVideo?.description}</p>
                </div>
            </div>
        </>
    )
        ;
};

export default Video;