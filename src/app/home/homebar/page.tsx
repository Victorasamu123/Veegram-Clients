"use client"
import Image from 'next/image'
import storyOne from "../../../../public/test p.jpg"
import storyTwo from "../../../../public/20344409.jpg"
import storyThree from "../../../../public/Cool-Fortnite-Wallpapers-2.jpg"
import storyFour from "../../../../public/Fortnite2Fblog2Ffortnite-at-e32FFN_Social-1200x628-a7db829507071ff050829da640cd37ca5eb8d352-1200x628.jpg"
import storyFive from "../../../../public/apple.png"
import storySix from "../../../../public/desktop-wallpaper-fortnite-battle-royale-cool-fortnite-battle-royale.jpg"
import storySeven from "../../../../public/facebook.png"
import storyEight from "../../../../public/fortnite-battle-royale-theme-mu3.jpg"
import storyNine from "../../../../public/google.png"
export default function HomeBar() {
  return (
    <>
      <div className='bg-[#E8E8E8] w-[55%] h-full mt-4'>
        {/* storeis */}
      <div className='pl-8 pt-[35px] pr-8 flex pb-2'>
       <div className='w-fit h-fit rounded-xl border-[2px] p-[2px] border-[#621E72]'>
        <Image src={storyOne} alt='' width={70}  className='rounded-xl'/>
       </div>
       <div className='ml-4 bw-fit h-fit rounded-xl border-[2px] p-[2px] border-[#621E72]'>
        <Image src={storyTwo} alt='' width={70} className='rounded-xl'/>
       </div>
       <div className='ml-4 bw-fit h-fit rounded-xl border-[2px] p-[2px] border-[#621E72]'>
        <Image src={storyThree} alt='' width={70} className='rounded-xl'/>
       </div>
       <div className='ml-4 bw-fit h-fit rounded-xl border-[2px] p-[2px] border-[#621E72]'>
        <Image src={storyFour} alt='' width={70} className='rounded-xl'/>
       </div>
       <div className='ml-4 bw-fit h-fit rounded-xl border-[2px] p-[2px] border-[#621E72]'>
        <Image src={storyFive} alt='' width={70} className='rounded-xl'/>
       </div>
       <div className='ml-4 bw-fit h-fit rounded-xl border-[2px] p-[2px] border-[#621E72]'>
        <Image src={storySix} alt='' width={70} className='rounded-xl'/>
       </div>
       <div className='ml-4 bw-fit h-fit rounded-xl border-[2px] p-[2px] border-[#621E72]'>
        <Image src={storySeven} alt='' width={70} className='rounded-xl'/>
       </div>
       <div className='ml-4 bw-fit h-fit rounded-xl border-[2px] p-[2px] border-[#621E72]'>
        <Image src={storyEight} alt='' width={70} className='rounded-xl'/>
       </div>
       <div className='ml-4 bw-fit h-fit rounded-xl border-[2px] p-[2px] border-[#621E72]'>
        <Image src={storyNine} alt='' width={70} className='rounded-xl'/>
       </div>
      </div>
      </div>
    </>
  )
} 
