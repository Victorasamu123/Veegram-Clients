import slideTwo from "../public/images/slideTwo.png"
import slideOne from "../public/images/slide1.webp"
import slideThree from "../public/images/slideThree.png"
import slideFour from "../public/images/slideFour.png"
import slideFive from "../public/images/slideFive.gif"
import slideSix from "../public/images/slideSix.webp"
import { StaticImageData } from "next/image"

export interface Slide {
    id:number,
    altHeader:string,
    altText:string,
    imageUrl:StaticImageData,
    isFeatured:boolean
}

const slides :Slide[]=[
    {id:1, altHeader:"", altText:"hello",imageUrl:slideOne, isFeatured:false},
    {id:2, altHeader:"", altText:"hello",imageUrl:slideTwo, isFeatured:false},
    {id:3, altHeader:"", altText:"hello",imageUrl:slideThree, isFeatured:false},
    {id:4, altHeader:"", altText:"hello",imageUrl:slideFour, isFeatured:false},
    {id:5, altHeader:"", altText:"hello",imageUrl:slideFive, isFeatured:false},
    {id:6, altHeader:"", altText:"hello",imageUrl:slideSix, isFeatured:false},
];



export default slides;