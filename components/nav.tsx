import Image from "next/image"
import logo from "../public/svgexport-24.svg"
import { AiOutlineSearch } from "react-icons/ai"

export default function NavBar() {
  return (
    <>
    <nav>
      <header className="w-full sticky top-0 bg-[#FFF7F2]">
        <div className="flex justify-between items-center mt-4">
          <div className="ml-[100px]">
            <Image src={logo} alt="" width={120}/>
          </div>
        </div>
      </header>
      </nav>
    </>
  )
}
