"use client"
import { useState,useEffect } from "react";
import Image from "next/image";
import logo from "../../public/svgexport-24.svg"
import loadingLogo from "../../public/images/veegram logos/svgexport-21.svg"
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
       <section className="">
       <Image src={logo} alt="Veegram" width={200} height={100}/>
       </section>
      </header>
      <div>
        lorem10000
      </div>
    </main>
      }
    </>
  );
}
