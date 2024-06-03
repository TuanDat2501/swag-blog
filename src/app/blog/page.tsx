'use client'
import React, {useEffect, useState} from 'react';
import './style.scss';
import '../../googleapi';
import axios from "axios";
import {API_KEY, BASE_URL_BLOG, BASE_URL_VIDEO} from "@/app/const/const";
import {Simulate} from "react-dom/test-utils";
import cheerio from "cheerio";
import Image from "next/image";

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
}

const Blog = () => {
    const blogId = "2111955837338522767";
    const [listBlog, setListBlog] = useState<IBlog[]>()
    const [flag, setFlag] = useState(0)
    const [thumb, setThumb] = useState()
    const [dataBlogs, setDataBlogs] = useState<IBlog[]>()
    useEffect(() => {
        axios.get(`${BASE_URL_BLOG}${blogId}/posts?key=${API_KEY}`)
            .then((res) => {
                setFlag(1);
                const data = res.data.items;
                let result = [];
                for (let i = 0; i < data.length; i++) {
                    let temp = {
                        title: "",
                        content: "",
                        publishDate: "",
                        id: "",
                        thumbnailUrl: "",
                        fullContent: "",
                        videoId: "",
                    } as IBlog;
                    const cheerio = require('cheerio');
                    const content = cheerio.load(data[i].content);
                    const idVideo = content("iframe").attr('youtube-src-id');
                    //get subtitle
                    let text;
                    if (content("div.separator").text()) {
                        text = content("div.separator").text();
                    } else {
                        text = content("p").text()
                    }
                    const options = {month: "long", day: "numeric", year: "numeric"} as any;
                    const date = new Date(data[i].published);
                    const americanDate = new Intl.DateTimeFormat("en-US", options).format(date);
                    temp.videoId = idVideo;
                    temp.thumbnailUrl = thumb;
                    temp.title = data[i].title;
                    temp.content = text;
                    temp.publishDate = americanDate;
                    temp.id = data[i].blog.id;
                    temp.fullContent = data[i].content;
                    result.push(temp);
                }
                setListBlog(result);
            })
            .catch((error) => {
                console.log(error);
            }).finally(() => {
        })
    }, []);
    useEffect(() => {
        if (listBlog) {
            const listIdvideo = listBlog.map((value) => value.videoId);
            const strList = listIdvideo.join(',');
            axios.get(`${BASE_URL_VIDEO}videos`, {
                params: {
                    part: "snippet,contentDetails,player",
                    key: API_KEY,
                    id: strList
                }
            }).then((res) => {
                for (let i = 0; i < listBlog.length; i++) {
                    listBlog[i].thumbnailUrl = res.data.items[i].snippet.thumbnails.standard.url;
                }
                setDataBlogs(listBlog);
            }).catch((error) => {
                console.log(error)
            }).finally(() => {
            })
        }
    }, [flag]);
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
                                                                             className="nav-link tm-category-link">Swag
                                    Tech</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row tm-catalog-item-list">
                    {dataBlogs && dataBlogs.map((value, index) =>
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item tm-bg-gray">
                            <div className="position-relative tm-thumbnail-container">
                                <img src={value.thumbnailUrl} alt="Image" className="img-fluid tm-catalog-item-img"/>
                                <a href="video-page.html" className="position-absolute tm-img-overlay">
                                </a>
                            </div>
                            <div className="p-4 tm-catalog-item-description">
                                <div className="content-item">
                                    <h3 className="tm-text-primary mb-3 tm-catalog-item-title">{value.title}</h3>
                                    <p className="tm-catalog-item-text">{value.content}</p>
                                </div>
                                <p>{value.publishDate}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div>
                <ul className="nav tm-paging-links">
                    <li className="nav-item active"><a href="#" className="nav-link tm-paging-link">1</a>
                    </li>
                    <li className="nav-item"><a href="#" className="nav-link tm-paging-link">2</a></li>
                    <li className="nav-item"><a href="#" className="nav-link tm-paging-link">3</a></li>
                    <li className="nav-item"><a href="#" className="nav-link tm-paging-link">4</a></li>
                    <li className="nav-item"><a href="#" className="nav-link tm-paging-link"> &#707;</a></li>
                </ul>
            </div>
        </>
    );
};

export default Blog;