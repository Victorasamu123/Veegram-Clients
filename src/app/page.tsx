"use client"
import { useState,useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/svgexport-24.svg"
import loadingLogo from "../../public/images/veegram logos/svgexport-21.svg"
import slidesOfData from "../../components/slides";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [])
  return (
    <>
      {
        loading ?
        <>
        <div className="w-full h-full bg-[#FFF7F2] flex justify-center items-center pt-[309px] pb-[309px] md:pt-[309px] md:pb-[309px] lg:pt-[309px] lg:pb-[309px] px-10 md:px-0 lg:px-0">
         <Image src={loadingLogo} alt="Loading......" width={400} height={100}/>
        </div>
       </>:
    <main>
      <header className="bg-[#FFF7F2] w-[100%] sticky top-0">
       <section className="flex justify-between items-center mt-12">
        <div className="ml-[70px]">
       <Image src={logo} alt="Veegram" width={175} height={100}/>
        </div>
        <div>
          <ul className="flex gap-[45px]">
            <li className="font-semi-bold text-xl"><Link href="/">Home</Link></li>
            <li className="font-semi-bold text-xl"><Link href="/">About</Link></li>
            <li className="font-semi-bold text-xl"><Link href="/">Contact-Us</Link></li>
            <li className="font-semi-bold text-xl"><Link href="/">FAQs</Link></li>
            <li className="font-semi-bold text-xl"><Link href="/">Others</Link></li>
          </ul>
        </div>
        <div className="mr-32 flex">
        <Link href=""><button className="border border-[#621E72] font-[700] text-[#621E72] rounded-md h-[45px] w-[120px] mr-4 hover:bg-[#621E72] hover:text-[#fff] hover:border-0">Sign In</button></Link>
        <Link href=""><button className="bg-[#621E72] font-[700] text-[#fff] rounded-md h-[45px] w-[120px] hover:border hover:border-[#621E72] hover:text-[#621E72] hover:bg-[#FFF7F2]">Sign Up</button></Link>
        </div>
       </section>
      </header>
      <section className="flex justify-between items-center mt-10 w-[100%">
        <div className="w-[55%]">
          <p className="font-apple text-[30px] font-medium text-[#525254] mt-20 ml-[89px]">Life's better with the people you love ✨</p>
          <div className="ml-[89px] text-[56px] font-bold mt-3 font-apple text-[#621E72]">
              Share moments, memories, and laughs with our app!
          </div>
          <p className="ml-[89px] font-apple font-normal text-[16px]">
          Ready to connect with your loved ones in a whole new way? Download our app and join the community! #DownloadNow #ConnectWithUs, Feeling social? Level up your social game! Our app offers unique features to make connecting with friends and family even more fun! Squad goals achieved! Our app makes staying connected with your loved ones easier than ever.
          </p>
        </div>
        <div className="w-[45%]">
          <Image src={slidesOfData[0].imageUrl} alt={slidesOfData[0].altText} width={200} height={200}/>
        </div>
      </section>
    </main>
      }
    </>
  );
}
