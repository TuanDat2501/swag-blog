'use client'
import React, { useEffect, useState } from 'react';
import './style.scss';
import axios from "axios";

import Image from "next/image";

import { useRouter, useSearchParams } from "next/navigation";
import SkeletonItem from "@/app/component/SkeletonItem/SkeletonItem";
import { DataChannel } from "@/app/const/interface";
import { BASE_URL_BLOG, BASE_URL_VIDEO, DATA_CHANNEL } from "@/app/const/const";
import { generateArr } from '../const/helper';
import Loading from '../component/Loading/Loading';

interface IBlog {
    id: string;
    title: string;
    subTitle: string;
    imageUrl: string;
    content: string;
    publishDate: string;
    thumbnailUrl: any;
    videoId: string;
    fullContent: string;
    author: {
        avatarUrl: string;
        displayName: string;
    }
}

const Blog = () => {
    const router = useRouter();
    const searchParams = useSearchParams()
    const blogId = searchParams.get('blogId') || "2336283564104274815";
    const channel = searchParams.get('channel');
    console.log(channel);
    const [listBlog, setListBlog] = useState<IBlog[] | null>()
    const data_channel = DATA_CHANNEL;
    const [dataBlogs, setDataBlogs] = useState<any[] | null>()
    const [linkPosts, setLinkPosts] = useState("");
    const [nextPageToken, setNextPageToken] = useState("");
    const [isLoadingPage, setIsLoadingPage] = useState(false);
    const viewBlog = (postId: string) => {
        router.push(`/blog/blogId?p=${postId}&b=${dataChannelState.blogId}`);
    }
    const [totalItem, setTotalItem] = useState(0);
    const [dataChannelState, setDataChannelState] = useState<DataChannel>({
        name: "We luck",
        api_key: "AIzaSyBnTJYeJFCcwmKiC8dDWPce6WuiTKA2pR4",
        channelId: "UC3dW5i2TdXzcXBUEYpl8pgQ",
        blogId: "2336283564104274815"
    })
    const changeCategory = (item: any) => {
        setDataBlogs(null);
        setListBlog(null);
        //setDataChannelState(item);
        router.push(`?blogId=${item.blogId}&channel=${item.name}`)
    }
    const changePage = (nextPageToken: string) => {
        let data = data_channel.find((value) => value.blogId == blogId);
        let thumb = "";
        setIsLoadingPage(true)
        axios(`${linkPosts}?key=${data?.api_key}&pageToken=${nextPageToken}`)
            .then(res => {
                setIsLoadingPage(false)
                const data = res.data.items;
                if (res.data.nextPageToken) {
                    setNextPageToken(res.data.nextPageToken);
                } else {
                    setNextPageToken("");
                }


                let result = [];
                for (let i = 0; i < data.length; i++) {
                    if (data[i]) {
                        let temp = {
                            title: "",
                            content: "",
                            publishDate: "",
                            id: "",
                            thumbnailUrl: "",
                            fullContent: "",
                            videoId: "",
                            author: {
                                avatarUrl: "",
                                displayName: "",
                            }
                        } as IBlog;
                        const cheerio = require('cheerio');
                        const content = cheerio.load(data[i].content);
                        const idVideo = content("iframe").attr('youtube-src-id');
                        if (idVideo) {
                            temp.videoId = idVideo;
                        } else {
                            temp.videoId = content("img").attr('src') || "";
                        }
                        //get subtitle
                        let text;
                        if (content("div.separator").text()) {
                            text = content("div.separator").text();
                        } else {
                            text = content("p").text()
                        }
                        const options = { month: "long", day: "numeric", year: "numeric" } as any;
                        const date = new Date(data[i].published);
                        const americanDate = new Intl.DateTimeFormat("en-US", options).format(date);

                        if (thumb != "") {
                            temp.thumbnailUrl = thumb;
                        } else {
                            temp.thumbnailUrl = "";
                        }
                        temp.title = data[i].title;
                        temp.content = text;
                        temp.publishDate = americanDate;
                        temp.id = data[i].id;
                        temp.fullContent = data[i].content;
                        temp.author.avatarUrl = data[i].author.image.url;
                        temp.author.displayName = data[i].author.displayName;
                        result.push(temp);
                    }
                }
                const arr = listBlog?.concat(result)

                setListBlog(arr);
            })

    }
    useEffect(() => {
        let data = data_channel.find((value) => value.blogId == blogId);
        let thumb = "";
        data && axios.get(`${BASE_URL_BLOG}${blogId}?key=${data.api_key}`)
            .then((res) => {
                setTotalItem(res.data.posts.totalItems);
                setLinkPosts(res.data.posts.selfLink);
                axios.get(`${res.data.posts.selfLink}?key=${data.api_key}&maxResults=9`).then(res => {
                    const data = res.data.items;
                    if (res.data.nextPageToken) {
                        setNextPageToken(res.data.nextPageToken);
                    } if (res.data.nextPageToken) {
                        setNextPageToken(res.data.nextPageToken);
                    }
                    let result = [];
                    for (let i = 0; i < data.length; i++) {
                        if (data[i]) {
                            let temp = {
                                title: "",
                                content: "",
                                publishDate: "",
                                id: "",
                                thumbnailUrl: "",
                                fullContent: "",
                                videoId: "",
                                author: {
                                    avatarUrl: "",
                                    displayName: "",
                                }
                            } as IBlog;
                            const cheerio = require('cheerio');
                            const content = cheerio.load(data[i].content);
                            const idVideo = content("iframe").attr('youtube-src-id');
                            if (idVideo) {
                                temp.videoId = idVideo;
                            } else {
                                temp.videoId = content("img").attr('src') || "";
                            }
                            //get subtitle
                            let text;
                            if (content("div.separator").text()) {
                                text = content("div.separator").text();
                            } else {
                                text = content("p").text()
                            }
                            const options = { month: "long", day: "numeric", year: "numeric" } as any;
                            const date = new Date(data[i].published);
                            const americanDate = new Intl.DateTimeFormat("en-US", options).format(date);

                            if (thumb != "") {
                                temp.thumbnailUrl = thumb;
                            } else {
                                temp.thumbnailUrl = "";
                            }
                            temp.title = data[i].title;
                            temp.content = text;
                            temp.publishDate = americanDate;
                            temp.id = data[i].id;
                            temp.fullContent = data[i].content;
                            temp.author.avatarUrl = data[i].author.image.url;
                            temp.author.displayName = data[i].author.displayName;
                            result.push(temp);
                        }
                    }
                    setListBlog(result);
                }).catch((error) => {
                    console.log(error);
                }).finally(() => {
                })

            })
            .catch((error) => {
                console.log(error);
            }).finally(() => {
            })
    }, [blogId, data_channel]);
    useEffect(() => {
        if (listBlog) {
            const listIdvideo = listBlog.map((value) => value.videoId);
            const strList = listIdvideo.join(',');
            axios.get(`${BASE_URL_VIDEO}videos`, {
                params: {
                    part: "snippet,contentDetails,player",
                    key: dataChannelState.api_key,
                    id: strList
                }
            }).then((res) => {
                for (let i = 0; i < listBlog.length; i++) {
                    const thumb = res.data.items.find((item: any) => listBlog[i].videoId == item.id);
                    if (thumb) {
                        listBlog[i].thumbnailUrl = thumb.snippet?.thumbnails.standard.url;

                    } else {
                        listBlog[i].thumbnailUrl = listBlog[i].videoId;
                    }
                }
                setDataBlogs(listBlog);
            }).catch((error) => {
                console.log(error)
            }).finally(() => {
            })
        }
    }, [dataChannelState, listBlog]);

    useEffect(() => {
        require('../bootstrap.min.css')
    }, []);
    return (
        <>
            <div className="header-blog">
                <div className="overlay"></div>
            </div>
            <div className="content-blog">
                <div className="row">
                    <div className="col-12">
                        <h2 className="tm-page-title mb-4">Blogs</h2>
                        <div className="tm-categories-container mb-4 flex">
                            <h3 className="tm-text-primary tm-categories-text">Categories:</h3>
                            <ul className="nav tm-category-list flex gap-5">
                                {data_channel.map((item, index: number) => <li key={index}
                                    className={channel == item.name ? "nav-item tm-category-item active" : "nav-item tm-category-item"}>
                                    <a className="nav-link tm-category-link cursor-pointer"
                                        onClick={() => changeCategory(item)}>{item.name}</a>
                                </li>)}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row tm-catalog-item-list">
                    {dataBlogs ? dataBlogs.map((value, index) =>
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item tm-bg-gray">
                            <div className="position-relative tm-thumbnail-container"
                                onClick={() => viewBlog(value?.id)}>
                                <Image width={200} height={200} quality={100} src={value?.thumbnailUrl} alt="Image"
                                    className="img-fluid tm-catalog-item-img" />
                                <a className="position-absolute tm-img-overlay">
                                </a>
                            </div>
                            <div className="p-4 tm-catalog-item-description">
                                <div className="content-item">
                                    <h3 className="tm-text-primary mb-3 tm-catalog-item-title">{value?.title}</h3>
                                    <p className="tm-catalog-item-text">{value?.content}</p>
                                </div>
                                <p>{value?.publishDate}</p>
                                <div className="author">
                                    <div className="avatar">
                                        <Image width={200} height={200} quality={100} src={value?.author.avatarUrl}
                                            alt="avarta" />
                                        <p>{value?.author.displayName}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : <>
                        <SkeletonItem></SkeletonItem>
                        <SkeletonItem></SkeletonItem>
                        <SkeletonItem></SkeletonItem>
                    </>}

                </div>
                <div>
                    {nextPageToken !== "" && <ul className="nav tm-paging-links flex">
                        {isLoadingPage ? <Loading></Loading> : <li className="nav-item"><a onClick={() => changePage(nextPageToken)} className="nav-link tm-paging-link"> See more</a></li>}
                    </ul>}

                </div>
            </div>

        </>
    );
};

export default Blog;
