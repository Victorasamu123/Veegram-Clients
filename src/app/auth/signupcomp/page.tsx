"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "../../../../public/svgexport-24.svg"
import google from "../../../../public/google.png"
import apple from "../../../../public/apple.png"
import facebook from "../../../../public/facebook.png"
import { useRouter } from "next/navigation"

export default function SignupComp() {
  return (
    <>
    <div className="w-[100vw] h-[100vh] bg-[#E8E8E8] flex justify-center items-center">
      <div className="bg-[#FFF7F2] h-[94%] w-[40%] rounded-3xl shadow-lg">
      <div className="mt-[9%] ml-[8%]">
        <Image src={logo} alt="" width={150}/>
      </div>
      <h2 className="text-[32px] font-apple font-lighter mt-[4%] ml-[8%]">
         Complete Registration
       </h2>
       <p className="text-[18px] text-[#757576] font-apple font-medium mt-[1%] ml-[8%]">
        Hi there👋, Please complete signup process
        </p>
        <div className="ml-[8%] mt-[4%]">
            <label htmlFor="Phonenumber" className="block text-[14px] text-[#67656E] font-apple font-medium">Phonenumber</label>
            <div className="block mt-[1%]">
            <input type="tel" className="w-[85%] h-[50px] bg-[#E8E8E8] rounded-[4px] focus:outline-[#621E72] hover:border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold" placeholder="Enter your phonenumber"/>
            </div>
            <label htmlFor="DOB" className="block text-[14px] text-[#67656E] font-apple font-medium mt-[2%]">DOB</label>
            <div className="block mt-[1%]">
            <input type="date" className="w-[85%] h-[50px] bg-[#E8E8E8] rounded-[4px] focus:outline-[#621E72] hover:border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold" placeholder="Please select your DOB"/>
            </div>
            <label htmlFor="Password" className="block text-[14px] text-[#67656E] font-apple font-medium mt-[2%]">Password</label>
            <div className="block mt-[1%]">
            <input type="password" className="w-[85%] h-[50px] bg-[#E8E8E8] rounded-[4px] focus:outline-[#621E72] hover:border-[2px] pl-2 text-[#67656E] text-[14px] font-semibold" placeholder="Password should be at least 6 characters"/>
            </div>
            <div className="block">
                <button className="mt-[4%] w-[85%] h-[50px] rounded-[4px] text-[#FFFFFF] text-[18px] font-semibold font-apple bg-[#621E72]">SignUp</button>
            </div>
        </div>
        <div className="ml-[8%] mt-[2%]"> 
          <span className="text-[14px] text-[#757576] font-apple font-medium">Already have an account?<Link href="/auth/signin" className="font-semibold text-[#621E72]">Signin</Link></span>
        </div>
      </div>
    </div>
    </>
  )
}
