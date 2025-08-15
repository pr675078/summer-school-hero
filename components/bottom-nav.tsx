import Image from "next/image"

export default function BottomNav() {
  return (
    <div className="fixed bottom-[20px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-[500px] h-[50px] bg-[rgba(255,253,253,0.1)] backdrop-blur-[10px] flex justify-around items-center border border-[#333] rounded-[28px] font-sansation shadow-[0_4px_12px_rgba(0,0,0,0.3)] z-[9999] max-[500px]:h-[50px] max-[500px]:rounded-[25px]">
      {/* Home */}
      <div className="flex flex-col items-center justify-center flex-1 gap-[2px]">
        <div>
          <Image
            src="/home_page-0001-removebg-preview.png"
            alt=""
            width={24}
            height={24}
            className="w-6 h-6 mt-1 mb-(-3) object-contain hover:scale-150 hover:transition-transform hover:duration-200 hover:ease-in-out max-[500px]:w-5 max-[500px]:h-5 "
          />
        </div>
        <div>
          <p className="text-white tracking-[clamp(0.5px,1vw,1px)] font-inter font-extralight mb-1 text-[0.7rem] m-0 max-[500px]:text-[0.6rem]">Home</p>
        </div>
      </div>

      {/* Register */}
      <div className="flex flex-col items-center justify-center flex-1 gap-[2px]">
        <div>
          <Image
            src="/register_page-0001-removebg-preview.png"
            alt=""
            width={24}
            height={24}
            className="w-6 h-6 mt-1 mb-(-3) object-contain hover:scale-150 hover:transition-transform hover:duration-200 hover:ease-in-out max-[500px]:w-5 max-[500px]:h-5"
          />
        </div>
        <div>
          <p className="text-white tracking-[clamp(0.5px,1vw,1px)] font-inter font-extralight text-[0.7rem] mb-1 max-[500px]:text-[0.6rem]">Register</p>
        </div>
      </div>

      {/* Dashboard */}
      <div className="flex flex-col items-center justify-center flex-1 gap-[2px]">
        <div>
          <Image
            src="/dashboard.png"
            alt=""
            width={24}
            height={24}
            className="w-6 h-6 mt-1 mb-(-3)object-contain hover:scale-150 hover:transition-transform hover:duration-200 hover:ease-in-out max-[500px]:w-5 max-[500px]:h-5"
          />
        </div>
        <div>
          <p className="text-white tracking-[clamp(0.5px,1vw,1px)] font-inter font-extralight mb-1 text-[0.7rem] m-0 max-[500px]:text-[0.6rem]">Dashboard</p>
        </div>
      </div>

      {/* Events */}
      <div className="flex flex-col items-center justify-center flex-1 gap-[2px]">
        <div>
          <Image
            src="/events_page-0001-removebg-preview.png"
            alt=""
            width={24}
            height={24}
            className="w-6 h-6 mt-1 mb-(-3) object-contain hover:scale-150 hover:transition-transform hover:duration-200 hover:ease-in-out max-[500px]:w-5 max-[500px]:h-5"
          />
        </div>
        <div>
          <p className=" text-white tracking-[clamp(0.5px,1vw,1px)] font-inter font-extralight mb-1 text-[0.7rem] m-0 max-[500px]:text-[0.6rem]">Events</p>
        </div>
      </div>
    </div>
  )
}
