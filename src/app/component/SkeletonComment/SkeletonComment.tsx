'use client'
import React, {useState} from 'react';
import {Skeleton } from 'antd';
type SizeType = 'default' | 'small' | 'large';
type AvatarShapeType = 'circle' | 'square';

const SkeletonComment = () => {
    const [size, setSize] = useState<SizeType>('default');
    const [avatarShape, setAvatarShape] = useState<AvatarShapeType>('circle');
    return (
        <div style={{display: 'flex', flexDirection: 'column',gap: '1em'}}>
            <Skeleton.Avatar active size={size} shape={avatarShape} />
            <Skeleton active />
        </div>
    );
};

export default SkeletonComment;