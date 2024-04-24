import {useState,useRef,useEffect} from 'react'
import Image, { StaticImageData } from 'next/image';
import { Slide } from './slides';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
interface Slidess {
   slides:Slide[]
}
const Carousels: React.FC<Slidess> = ({slides}) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const carouselRef = useRef<HTMLDivElement | null>(null);

    const handleNext = ()=>{
      setActiveSlide((prevActiveSlide)=>(prevActiveSlide === slides.length -1 ? 0: prevActiveSlide + 1));
    };

    const handlePrevious = () =>{
      setActiveSlide((prevActiveSlide) => (prevActiveSlide === 0 ? slides.length -1 :prevActiveSlide -1));
    };

    useEffect(() => {
      const intervalId = setInterval(()=> handleNext(), 5000);
      return () => clearInterval(intervalId);
    }, [])
    
  return (
    <>
     <div className='relative overflow-hidden'>
      <div className='flex space-x-4 transition duration-700 ease-in-out'>
      {slides.map((slide,index)=>(
        <div key={slide.id || index} className={`relative w-full ${activeSlide === index ? 'block' : 'hidden'}`}>
          <Image src={slide.imageUrl} alt={slide.altText} width={200} height={200}/>
        </div>
      ))

      }
      </div>
     </div>
    </>
  )
}

export default Carousels;