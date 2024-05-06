import { useState, useRef, useEffect } from 'react'
import Image from 'next/image';
import Slider from "react-slick"
import slideOne from "../public/images/slide1.webp"
import slideTwo from "../public/images/slideTwo.png"
import slideThree from "../public/images/slideThree.png"
import slideFour from "../public/images/slideFour.png"
import slideFive from "../public/images/slideFive.gif"
import slideSix from "../public/images/slideSix.webp"
import { Slide } from './slides';
interface Slides {
  slides: Slide[]
}

const Carousels: React.FC<Slides> = ({ slides }) => {

  return (
    <>
      <div className='border w-96 flex overflow-x-scroll'>
        {
          slides.map((slide, index) => (
            <div className='flex-shrink-0 border mr-4'>
              <Image src={slide.imageUrl} className='w-full object-cover' alt={slide.altHeader} />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Carousels;