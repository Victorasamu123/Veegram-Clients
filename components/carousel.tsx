import {useState,useRef,useEffect} from 'react'
import Image from 'next/image';
import Slider from "react-slick"
import slideOne from "../public/images/slide1.webp"
import slideTwo from "../public/images/slideTwo.png"
import slideThree from "../public/images/slideThree.png"
import slideFour from "../public/images/slideFour.png"
import slideFive from "../public/images/slideFive.gif"
import slideSix from "../public/images/slideSix.webp"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { LazyLoadTypes } from 'react-slick';
const Carousels : React.FC= () => {
  const settings = {
    className: "",
    dots: true,
    lazyLoad: "progressive" as LazyLoadTypes ,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    adaptiveHeight: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <>
     <div className='slider-container'>
      <Slider {...settings}>
        <div>
          <Image src={slideOne} alt='jfjfj' width={400} height={400}/>
        </div>
        <div>
          <Image src={slideOne} alt='jfjfj' width={400} height={400}/>
        </div>
        <div>
          <Image src={slideOne} alt='jfjfj' width={400} height={400}/>
        </div>
        <div>
          <Image src={slideOne} alt='jfjfj' width={400} height={400}/>
        </div>
      </Slider>
     </div>
    </>
  )
}

export default Carousels;