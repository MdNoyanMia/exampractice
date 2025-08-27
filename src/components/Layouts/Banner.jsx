import React from 'react'
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

import Slider from "react-slick";
const Banner = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };


    return (
        <>

            <Slider {...settings}>

                <div>
                    <div class="bg-[url(/src/assets/bbenner.png)] h-[600px] bg-center bg-cover  bg-no-repeat" />
                </div>
                <div>
                    <div class="bg-[url(/src/assets/banneee2.jpg)] h-[600px] bg-center bg-cover  bg-no-repeat" />
                </div>
                <div>
                    <div class="bg-[url(/src/assets/banner3.jpg)] h-[600px] bg-center bg-cover  bg-no-repeat" />
                </div>


            </Slider>
        </>
    )
}

export default Banner