'use client'
import React, {useEffect, useState} from 'react';
import './style.scss';
import {useSearchParams} from "next/navigation";
import axios from "axios";
import {API_KEY, BASE_URL_BLOG, BASE_URL_VIDEO, BASE_URL_VIDEO1} from "@/app/const/const";
import parse from  "html-react-parser";
import moment from "moment/moment";
import Image from "next/image";
import {convertDate} from "@/app/const/helper";
import SkeletonComment from "@/app/component/SkeletonComment/SkeletonComment";

interface IItemVideo {
    videoId: string|null;
    title: string;
    description: string;
    iframeVideo:string;
    publishedAt:string;
    channelTitle:string;

}

const Video = () => {
    const searchParams = useSearchParams();
    const videoId=  searchParams.get('videoId');
    const [itemVideo, setItemVideo] = useState<IItemVideo>()
    const [comments, setComments] = useState<any>(null)
    const channelId = "UCB1mpBAGHpUHBs17UZZVeDw";
    useEffect(() => {
        require('../bootstrap.min.css')
    }, []);
    useEffect(() => {
        axios.get(`${BASE_URL_VIDEO}videos`, {
            params: {
                part: "snippet,contentDetails,player",
                key: API_KEY,
                id: videoId
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
    }, [searchParams, videoId]);
    useEffect(() => {
        axios.get(`${BASE_URL_VIDEO1}/commentThreads`,{
            params:{
                part: "snippet,replies",
                key: API_KEY,
                videoId: videoId
            }
        })
            .then((res)=>{
                setComments(res.data);
            })
            .catch((error)=>{
                console.log(error);
                setComments([]);
            })
            .finally(()=>{

            })
        return () => {
            setComments(null);
        }
    }, [itemVideo, searchParams, videoId]);
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
                <div className="comments">
                    <div className="comments-title">
                        <h3>Comment ({comments?.items ? comments.items?.length : "0"})</h3>
                    </div>
                    <div className="comments-list">
                        {
                            comments ? comments.items?.map((comment: any) =>
                                    <div className="comment" key={comment.id}>
                                        <div className="avatar">
                                            <Image width={200} height={200} quality={100}
                                                   src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="avatar"></Image>
                                            <strong className="author"> {comment.snippet.topLevelComment.snippet.authorDisplayName}</strong>
                                            <p className="date">{convertDate(comment.snippet.topLevelComment.snippet.publishedAt)}</p>
                                        </div>
                                        <div className="comment-content">
                                            <p>{comment.snippet.topLevelComment.snippet.textOriginal}</p>
                                        </div>
                                        {comment.snippet.totalReplyCount > 0 &&
                                            comment.replies.comments.map((replies: any,index:number) =>
                                                <div className="replies" key={index}>
                                                    <div className="avatar">
                                                        <Image width={200} height={200} quality={100}
                                                               src={replies.snippet.authorProfileImageUrl}
                                                               alt="avatar"></Image>
                                                        <strong
                                                            className="author"> {replies.snippet.authorDisplayName}</strong>
                                                        <p className="date">{convertDate(replies.snippet.publishedAt)}</p>
                                                    </div>
                                                    <div className="comment-content">
                                                        <p>{replies.snippet.textOriginal}</p>
                                                    </div>
                                                </div>
                                            )
                                        }

                                    </div>
                                ) :
                                <SkeletonComment></SkeletonComment>
                        }
                    </div>
                </div>
            </div>
        </>
    )
        ;
};

export default Video;