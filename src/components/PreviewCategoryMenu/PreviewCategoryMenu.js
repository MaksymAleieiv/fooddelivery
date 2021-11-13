import React from 'react'
import Arrow from '../../assets/Arrow.svg'
import { Link } from 'react-router-dom'
import './PreviewCategoryMenu.scss'
import ProductItem from '../ProductItem/ProductItem'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

SwiperCore.use([Pagination, Navigation]);

function PreviewCategoryMenu({categoryTop}) {
    const swiperRef = React.useRef()

    return (
        <div className='top-category-menu'>
            <div className='top-category-header'>
                <h3 className='category-name'>
                    {categoryTop.name}
                </h3>
                <div className='top-category-pagination-control-container'>
                    <div className='top-category-pagination-control'>
                        <img src={Arrow} className={`mirroredArrow swiper-button-prev-${categoryTop.name}`} alt=''/>
                        <div className={`control-text control-text-${categoryTop.name}`}></div>
                        <img src={Arrow} className={`swiper-button-next-${categoryTop.name}`} alt=''/>
                    </div>
                    <Link to='/'>
                        <div className='category-link'>
                            Check menu
                        </div>
                    </Link>
                </div>
            </div>
            <div style={{position: 'relative'}}>
                <div className='slider-container__left'></div>
                <Swiper ref={swiperRef} slidesPerView={'auto'} spaceBetween={30} className="mySwiper" 
                    pagination={{
                        el : `.control-text-${categoryTop.name}`,
                        type: 'custom',
                        renderCustom: function (SwiperCore, current, total) { return(current + '/' + total) }
                    }}
                    navigation={{
                        nextEl: `.swiper-button-next-${categoryTop.name}`,
                        prevEl: `.swiper-button-prev-${categoryTop.name}`
                    }}
                >
                    {categoryTop.products.map(product => (
                        <SwiperSlide>
                            <ProductItem product={product} key={'prod' + product.id}/>   
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='slider-container__right'></div>
            </div>
        </div>
    )
}

export default PreviewCategoryMenu