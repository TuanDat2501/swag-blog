import React from 'react';
import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { DataChannel } from '@/app/const/interface';
import Image from 'next/image';
import IPlay from '@/icon/IPlay';
import { useMediaQuery } from 'usehooks-ts';
import { useRouter } from 'next/router';
interface Props {

    data: DataChannel
}
const SwiperComponent = ({ data }: Props) => {
    const isMobile = useMediaQuery('(max-width:430px)')
    const router = useRouter()
    const clickVideo = (videoId: string) => {
        router.push('/video?videoId=' + videoId);
    }
    return (
        <div className="swipper-container">
            <h1>{data.name}</h1>
            <Swiper
                slidesPerView={isMobile? 1:3}
                spaceBetween={30}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {data.items.map((video:any,index:number)=>
                <div key={index}>
                    <SwiperSlide className='swiper'>
                    <div className="tm-catalog-item">
                        <div className="position-relative tm-thumbnail-container">
                            <Image width={500} height={500} quality={100} src={video.thumbnailUrl}
                                alt="Image"
                                className="img-fluid tm-catalog-item-img" />
                            <a className="position-absolute tm-img-overlay"
                                onClick={() => clickVideo(video.videoId)}
                                
                                >
                                <IPlay></IPlay>
                            </a>
                        </div>
                        <div className="p-4 tm-bg-gray tm-catalog-item-description">
                            <h3 className="tm-text-primary mb-3 tm-catalog-item-title">{video.title}</h3>
                            <p className="tm-catalog-item-text">{video.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
                </div>
                )}
                
        
            </Swiper>
        </div>
    );
};

export default SwiperComponent;