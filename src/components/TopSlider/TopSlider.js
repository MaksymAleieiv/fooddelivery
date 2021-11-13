import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay,Pagination,Navigation } from 'swiper';
import TopSliderSlide from './TopSliderSlide/TopSliderSlide';

SwiperCore.use([Autoplay,Pagination,Navigation]);


function TopSlider() {
    return (
        <div className='pad' style={{height: 350, width: '100%'}}>
            <Swiper pagination={{"dynamicBullets": true}} slidesPerView={1} autoplay={{"delay": 5000, "disableOnInteraction": false}} loop={true} className="mySwiperTop">
                <SwiperSlide><TopSliderSlide/></SwiperSlide>
                <SwiperSlide><TopSliderSlide/></SwiperSlide>
                <SwiperSlide><TopSliderSlide/></SwiperSlide>
                <SwiperSlide><TopSliderSlide/></SwiperSlide>
                <SwiperSlide><TopSliderSlide/></SwiperSlide>
                <SwiperSlide><TopSliderSlide/></SwiperSlide>
                <SwiperSlide><TopSliderSlide/></SwiperSlide>
        </Swiper>
      </div>
    )
}

export default TopSlider
