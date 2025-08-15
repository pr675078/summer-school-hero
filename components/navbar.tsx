"use client"

import { useState } from "react"
import Image from "next/image"

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <div className="fixed top-0 left-0 w-full h-[55px] bg-white flex justify-between items-center px-[15px] z-[1000] shadow-[0_2px_10px_rgba(0,0,0,0.76)] md:h-[40px]">
      {/* Logo */}
      <div className="h-full flex items-center z-[2]">
        <Image
          src="upscalemedia-j-removebg-preview.png"
          alt="jlug-logo"
          width={60}
          height={50}
          className="w-[60px] h-[50px] object-contain m-[10px] border-none md:w-[50px] md:h-[40px] md:m-[5px] max-[480px]:m-[-10px] max-[480px]:h-[40px]"
        />
      </div>

      {/* Title */}
      <div className="flex-1 absolute text-center w-full left-1/2 transform -translate-x-1/2 text-[clamp(12px,3vw,20px)] font-karla tracking-[clamp(5px,2vw,10px)] whitespace-nowrap leading-none md:text-[clamp(10px,4vw,16px)] md:tracking-[clamp(3px,1vw,5px)] max-[480px]:w-4/5 max-[480px]:tracking-[clamp(3px,1vw,5px)]">
        <p className="font-[1000] m-0">JEC LINUX USER GROUP</p>
      </div>

      {/* Sign Up Button */}
      <button className="border-[0.5px] border-black font-roboto flex justify-center items-center cursor-pointer w-[80px] h-[25px] text-[clamp(12px,2vw,16px)] rounded-[25px] tracking-wide bg-transparent mr-[45px] relative z-10 hover:bg-[#0b99ff] hover:border-white hover:text-white transition-colors hidden md:block max-[480px]:ml-[20px]">
        SIGN UP
      </button>

      {/* Hamburger Menu */}
      <button
        className="block text-2xl bg-none border-none cursor-pointer mr-[15px] p-[10px] md:hidden"
        onClick={toggleDropdown}
      >
        &#9776;
      </button>

      {/* Dropdown */}
      {dropdownOpen && (
        <div className="absolute top-[60px] right-[15px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] p-[10px] rounded-[5px] z-[100] md:top-[50px]">
          <button className="border-[0.5px] border-black font-sansation flex justify-center items-center cursor-pointer w-[90px] h-[30px] rounded-[25px] tracking-[3%] bg-transparent m-0 hover:bg-[#0b99ff] hover:border-white hover:text-white transition-colors">
            SIGN UP
          </button>
        </div>
      )}
    </div>
  )
}
