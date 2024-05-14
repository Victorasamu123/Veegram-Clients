"use client"
import Image from "next/image"
import logo from "../../../public/svgexport-24.svg"
import testp from "../../../public/test p.jpg"
import { AiOutlineSearch } from "react-icons/ai"
import { FaCaretDown } from "react-icons/fa";
import { IoPersonAddOutline } from "react-icons/io5";
import { RiMessage3Line } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import SlideBarOne from "./sidebar/page"

export default function HomePage () {

    return(
   <>
     <section className="w-full h-full">
     <nav>
      <header className="w-full sticky top-0 bg-[#FFF7F2]">
        <div className="flex justify-between items-center mt-6 pr-8">
          <div className="ml-12 flex">
            <Image src={logo} alt="" width={120}/>
          <div className="flex items-center justify-center ml-24 bg-[#E8E8E8] pl-2 pr-2 h-[40px] rounded-lg">
            <input type="text" placeholder="Search"  className="bg-[#E8E8E8] focus:outline-none pr-8"/>
            <AiOutlineSearch className="flex items-center justify-center text-[20px]"/>
          </div>
          </div>
          <div className="flex justify-center items-center">
          <IoPersonAddOutline className="text-[26px] mr-4 cursor-pointer"/>
          <RiMessage3Line  className="text-[29px] mr-4 cursor-pointer"/>
          <IoMdNotificationsOutline className="text-[29px] mr-4 cursor-pointer"/>
          <Image src={testp} alt="" width={35} className="rounded-[50%] mr-1 cursor-pointer"/>
          <FaCaretDown className="cursor-pointer"/>
          </div>
        </div>
      </header>
      </nav>
      <div className="flex">
          <SlideBarOne/>
      </div>
     </section>
   </>
    )
} 