"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "../../../../public/svgexport-24.svg"
import google from "../../../../public/google.png"
import apple from "../../../../public/apple.png"
import facebook from "../../../../public/facebook.png"
import { useRouter } from "next/navigation"

export default function Signin() {
  return (
    <>
     <div className="w-[100vw] h-[100vh] bg-[#E8E8E8] flex justify-center items-center">
      <div className="bg-[#FFF7F2] h-[94%] w-[40%] rounded-3xl shadow-lg">
      <div className="mt-[10%] ml-[8%]">
        <Image src={logo} alt="" width={150}/>
       </div>
       <h2 className="text-[32px] font-apple font-lighter mt-[4%] ml-[8%]">
        Sign In
       </h2>
       <p className="text-[18px] text-[#757576] font-apple font-medium mt-[1%] ml-[8%]">
        Welcome back 😜 to Veegram
        </p>
        <div className="ml-[8%] mt-[4%]">
            <label htmlFor="Email" className="block text-[14px] text-[#67656E] font-apple font-medium mt-[2%]">Email</label>
            <div className="block mt-[1%]">
            <input type="email" className="w-[85%] h-[50px] bg-[#E8E8E8] rounded-[4px] focus:outline-[#621E72] hover:border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold" placeholder="Enter your email address"/>
            </div>
            <label htmlFor="Password" className="block text-[14px] text-[#67656E] font-apple font-medium mt-[2%]">Password</label>
            <div className="block mt-[1%]">
            <input type="password" className="w-[85%] h-[50px] bg-[#E8E8E8] rounded-[4px] focus:outline-[#621E72] hover:border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold" placeholder="Password should be at least 6 characters"/>
            </div>
            <div className="block">
                <button className="mt-[4%] w-[85%] h-[50px] rounded-[4px] text-[#FFFFFF] text-[18px] font-semibold font-apple bg-[#621E72]">Sign In</button>
            </div>
        </div>
        <div className="ml-[8%] mt-[4%] flex">
            <hr className="w-[30%] border-[1px] mt-[13px]"/>
            <p className="text-[18px] text-[#757576] font-apple font-medium mr-4 ml-4">or continue with</p>
            <hr className="w-[30%] border-[1px] mt-[13px]"/>
        </div>
        <div className="flex justify-center mt-[4%]">
          <div className="w-[23%] h-[50px] border-2 mr-[35px] rounded-lg cursor-pointer flex justify-center items-center"><Image src={google} alt="" width={30}/></div>
          <div className="w-[23%] h-[50px] border-2 mr-[35px] rounded-lg cursor-pointer flex justify-center items-center"><Image src={facebook} alt="" width={30}/></div>
          <div className="w-[23%] h-[50px] border-2 mr-[35px] rounded-lg cursor-pointer flex justify-center items-center"><Image src={apple} alt="" width={60}/></div>
        </div>
        <div className="ml-[8%] mt-[2%]"> 
          <span className="text-[14px] text-[#757576] font-apple font-medium">Do not have an account?<Link href="/auth/signup" className="font-semibold text-[#621E72]">Signup</Link></span>
        </div>
      </div>
     </div>
    </>
  )
}