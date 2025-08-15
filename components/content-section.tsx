export default function ContentSection() {
  return (
    <div className="text-white flex flex-col justify-center items-center text-center mx-auto my-[15px] w-[90%] pt-[10px] md:my-[15px] md:pt-[10px] max-[480px]:my-[-5px] max-[480px]:pt-[8px]">
      {/* JLUG Summer */}
      <div>
        <p className="font-league-gothic text-[clamp(24px,6vw,40px)] font-medium tracking-[clamp(2px,1.5vw,5px)] mb-0.5rem uppercase md:mb-[0.3rem] md:tracking-[5px] max-[480px]:tracking-[5px]">
          JLUG SUMMER
        </p>
      </div>

      {/* School Program */}
      <div>
        <p className="font-rosario text-[clamp(18px,4vw,30px)] font-light tracking-[clamp(1px,1vw,2px)] gradient-text uppercase mt-0 max-[480px]:tracking-[0.5px]">
          SCHOOL PROGRAM
        </p>
      </div>

      {/* Message */}
      <div className="font-alumni-sans text-[clamp(16px,2.5vw,20px)] tracking-[clamp(1px,0.5vw,2px)] leading-[1.4] mt-[1px] max-w-[80%] text-center font-light md:text-[clamp(15px,3vw,18px)] md:leading-[1.3] md:mt-[2px] max-[480px]:text-[clamp(14px,3.5vw,16px)] max-[480px]:tracking-[0.8px] max-[480px]:max-w-[90%] max-[480px]:mt-[2px] lg:text-[clamp(18px,2vw,22px)] lg:tracking-[1.5px] lg:max-w-[70%] lg:my-[10px]">
        <p className="transform">
          Transform your skill with expert-led workshop, hands-on projects , and a vibrant learning community
        </p>
      </div>

      {/* Start Learning Button */}
      <button className="start-learning-btn font-inter tracking-[1px] w-[clamp(120px,30vw,166px)] h-[clamp(35px,7vw,41px)] font-light rounded-[25px] text-white text-[clamp(14px,3vw,20px)] bg-black cursor-pointer mt-[2vh] transition-all duration-300 ease-in-out border-white relative z-[2] border-none md:mt-[1.8vh] max-[480px]:w-[150px] max-[480px]:h-[36px] max-[480px]:text-base max-[480px]:mt-[1.5vh] hover:bg-[#333] hover:scale-105 hover:transition-transform hover:duration-[0.08s] hover:ease-in-out">
        Start Learning
      </button>
    </div>
  )
}
