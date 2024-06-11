'use client'
import React, {useEffect, useLayoutEffect, useState} from 'react';
import './style.scss';
import {useSearchParams} from "next/navigation";
import axios from "axios";
import {API_KEY, BASE_URL_BLOG} from "@/app/const/const";
import parse from "html-react-parser";
import {convertDate} from "@/app/const/helper";
import Image from "next/image";
import SkeletonComment from "@/app/component/SkeletonComment/SkeletonComment";
import SkeletonItem from "@/app/component/SkeletonItem/SkeletonItem";
import 'bootstrap/dist/css/bootstrap.css';



const BlogId = () => {
    const param = useSearchParams();
    const postId=param.get('p')
    const blogId = param.get('b');
    const [dataBlog, setDataBlog] = useState<any>()
    const [comments, setComments] = useState<any>(null)
    useEffect(() => {
        axios.get(`${BASE_URL_BLOG}${blogId}/posts/${postId}?key=${API_KEY}`)
            .then((res) => {
                setDataBlog(res.data);
            }).catch((error)=>{
            console.log(error);
        }).finally(()=>{

        })
    }, [blogId, param, postId]);
    useEffect(() => {
        console.log(dataBlog?.replies.selfLink)
        axios.get(`${dataBlog?.replies.selfLink}?key=${API_KEY}`)
            .then((res)=>{
                setComments(res.data);
            })
            .catch((error)=>{
                console.log(error)
            })
            .finally(()=>{

            })
    }, [dataBlog]);
    return (
        <>
            <div className="header-blog">
                <div className="overlay"></div>
            </div>
            <div className="content-blog">
                {dataBlog ? <>
                    <h1 className="blog-title">
                        {dataBlog.title}
                    </h1>
                    <div className="published">
                        <p>Published : {convertDate(dataBlog.published)}</p>
                        <p>Updated : {convertDate(dataBlog.updated)} </p>
                    </div>
                    <div className="content">
                        {parse(dataBlog.content)}
                    </div>
                </>:<div className="skeleton">
                    <SkeletonItem></SkeletonItem>
                </div>}
                <div className="comments">
                    <div className="comments-title">
                        <h3>Comment ({comments?.items ? comments.items?.length : "0"})</h3>
                    </div>
                    <div className="comments-list">
                        {
                            comments ? comments.items?.map((comment:any) =>
                                <div className="comment" key={comment.id}>
                                    <div className="avatar">
                                        <Image width={200} height={200} quality={100}
                                               src={`https:${comment.author.image.url}`} alt="avatar"></Image>
                                        <strong className="author"> {comment.author.displayName}</strong>
                                        <p className="date">{convertDate(comment.published)}</p>
                                    </div>
                                    <div className="comment-content">
                                        <p>{comment.content}</p>
                                    </div>
                                </div>
                            ):
                                <SkeletonComment></SkeletonComment>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogId;