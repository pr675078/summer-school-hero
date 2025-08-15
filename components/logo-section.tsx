import Image from "next/image"

export default function LogoSection() {
  return (
    <div className="relative w-[clamp(180px,25vw,240px)] h-[clamp(180px,25vw,240px)] mx-auto mt-[5.4vh] md:w-[clamp(140px,35vw,200px)] md:h-[clamp(140px,35vw,200px)] max-[480px]:w-[clamp(140px,40vw,200px)] max-[480px]:h-[clamp(140px,40vw,200px)]">
      {/* Rotating background */}
      <div className="absolute top-1/2 left-1/2 w-[110%] h-[110%] transform -translate-x-1/2 -translate-y-1/2 z-[1] blur-[70px]">
        <Image src="/color.png" alt="" fill className="rotate-center" />
      </div>

      {/* Main logo */}
      <div className="relative w-full h-full z-[2]">
        <Image src="/main-logo_page-0001.jpg" alt="JLUG Logo" fill className="object-cover rounded-full block" />
      </div>
    </div>
  )
}
