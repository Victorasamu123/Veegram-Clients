"use client"
import Link from "next/link";
import Image from "next/image";
import { GoHome } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { RiMessage3Line } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoCreateOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import profile from "../../../../public/test p.jpg"
import { Noto_Sans } from 'next/font/google'


const notoSans = Noto_Sans({
  subsets:['latin'],
});
export default function SlideBarOne() {
  return (
    <>x
    <div className='w-[17%] h-full mt-6'>
       <div className="w-full pt-10 pl-8">
        <Link href='' className="flex">
        <GoHome className="text-[29px]"/>
        <p className={`${notoSans.className} text-[18px] font-semibold mt-[2px] ml-2`}>Home</p>
        </Link>
       </div>
       <div className="w-full pt-6 pl-8">
         <Link href='' className="flex">
         <IoPeopleOutline className="text-[29px]"/>
          <p className={`${notoSans.className} text-[18px] font-semibold mt-[2px] ml-2`}>Friends</p>
         </Link>
       </div>
       <div className="w-full pt-6 pl-8">
        <Link href="" className="flex">
          <IoSearch className="text-[29px]"/>
          <p className={`${notoSans.className} text-[18px] font-semibold mt-[2px] ml-2`}>Search</p>
        </Link>
       </div>
       <div className="w-full pt-6 pl-8">
        <Link href='' className="flex">
          <MdOutlineVideoLibrary className="text-[29px]"/>
          <p className={`${notoSans.className} text-[18px] font-semibold mt-[2px] ml-2`}>Clips</p>
        </Link>
       </div>
       <div className="w-full pt-6 pl-8">
        <Link href='' className="flex">
        <RiMessage3Line className="text-[29px]"/>
        <p className={`${notoSans.className} text-[18px] font-semibold mt-[2px] ml-2`}>Messages</p>
        </Link>
       </div>
       <div className="w-full pt-6 pl-8">
        <Link href='' className="flex">
        <IoIosNotificationsOutline className="text-[29px]"/>
        <p className={`${notoSans.className} text-[18px] font-semibold mt-[2px] ml-2`}>Notifications</p>
        </Link>
       </div>
       <div className="w-full pt-6 pl-8">
        <Link href='' className="flex">
        <IoCreateOutline className="text-[29px]"/>
        <p className={`${notoSans.className} text-[18px] font-semibold mt-[2px] ml-2`}>Create</p>
        </Link>
       </div>
       <div className="w-full pt-6 pl-8">
        <Link href='' className="flex">
        <Image src={profile} alt="" width={35} className="rounded-[50%]"/>
        <p className={`${notoSans.className} text-[18px] font-semibold mt-[2px] ml-2`}>Profile</p>
        </Link>
       </div>
       <div className="mt-24">
         <div className="w-full pt-6 pl-8">
          <Link href='' className="flex">
          <IoSettingsOutline className="text-[29px]"/>
          <p className={`${notoSans.className} text-[18px] font-semibold mt-[2px] ml-2`}>Settings</p>
          </Link>
         </div>
         <div className="w-full pt-6 pl-8">
          <Link href='' className="flex">
          <MdLogout className="text-[29px]"/>
          <p className="text-[18px] font-semibold mt-[2px] ml-2">Logout</p>
          </Link>
         </div>
       </div>
    </div>
    </>
  )
}
