'use client'
import React, {useEffect} from 'react';
import './style.scss';
import { useSearchParams} from "next/navigation";
import axios from "axios";
import {API_KEY, BASE_URL} from "@/app/const/const";
interface IItemVideo {
    videoId: string;
    thumbnailUrl: string;
    title: string;
    description: string;
}
const Video = () => {
    const params = useSearchParams();
    const getInfoVideo = (listIdVideo1: string) => {
        axios.get(`${BASE_URL}videos`, {
            params: {
                part: "snippet,contentDetails,player",
                key: API_KEY,
                id: listIdVideo1
            }
        }).then((res) => {
            let temp:IItemVideo[]=[];
            for (let i = 0; i < res.data.items.length; i++) {
                const a :IItemVideo={
                    videoId:"abc",
                    thumbnailUrl: res.data.items[i].snippet.thumbnails.standard.url,
                    title:res.data.items[i].snippet.localized.title,
                    description:res.data.items[i].snippet.localized.description
                }
                temp.push(a);
            }
            setlistItemVideo(temp);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {

        })
    }
    useEffect(() => {
        console.log(params.get('videoId'));
    }, []);
    return (
        <>
            <div className="header-video">
                <div className="overlay"></div>
            </div>
            <div className="content-video">
                <div className="content-video-title">

                </div>
            </div>
        </>
    );
};

export default Video;