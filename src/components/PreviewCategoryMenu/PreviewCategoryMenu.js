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
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const productsLength = categoryTop.products.length
    const swiperRef = React.useRef()

    const jumpToPrevPage = () => {
        setCurrentIndex(p => p > 0 ? p - 1 : p)
    }

    const jumpToNextPage = () => {
        setCurrentIndex(p => p < productsLength ? p + 1 : p)
    }

    const afterChange = (e) => {
        let newIndex = e.activeIndex + 1
        setCurrentIndex(newIndex > productsLength ? productsLength : newIndex);
    }

    return (
        <div className='top-category-menu'>
            <div className='top-category-header'>
                <h3 className='category-name'>
                    {categoryTop.name}
                </h3>
                <div className='top-category-pagination-control-container'>
                    <div className='top-category-pagination-control'>
                        <img src={Arrow} className={`mirroredArrow swiper-button-prev-${categoryTop.name}`} style={currentIndex === 0 ? {visibility: 'hidden'} : {}} alt='' onClick={jumpToPrevPage}/>
                        <div className='control-text'>{currentIndex + 1}/{productsLength}</div>
                        <img src={Arrow} className={'swiper-button-next-' + categoryTop.name} style={currentIndex >= productsLength - 1 ? {visibility: 'hidden'} : {}} alt='' onClick={jumpToNextPage}/>
                    </div>
                    <Link to='/'>
                        <div className='category-link'>
                            Look at the menu
                        </div>
                    </Link>
                </div>
            </div>
            <div style={{position: 'relative'}}>
                <div className='slider-container__left'></div>
                <Swiper ref={swiperRef} slidesPerView={'auto'} navigation={{nextEl: '.swiper-button-next-' + categoryTop.name, prevEl: '.swiper-button-prev-' + categoryTop.name }}
                spaceBetween={30} pagination={{ 'clickable': true }} onSlideChange={afterChange} className="mySwiper">
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