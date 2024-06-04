import React from 'react';
import {Skeleton} from "antd";
import './style.scss';
const SkeletonItem = () => {
    return (
        <div className="skeleton-item">
            <Skeleton.Image active style={{width:"100%",height:"100%"}}/>
            <Skeleton active />
        </div>
    );
};

export default SkeletonItem;