import React from "react";

const Header = () => {
  // let playIcon = (
  //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[black]">
  //     <path
  //       fillRule="evenodd"
  //       d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
  //       clipRule="evenodd"
  //     />
  //   </svg>
  // );
  let btn1=<a href="#_" className="relative inline-flex items-center justify-start px-10 py-3  overflow-hidden font-medium transition-all bg-[#00008B] rounded-xl group w-[100%] lg:w-auto">
  <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#00008B] rounded group-hover:-mr-4 group-hover:-mt-4">
      <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
  </span>
  <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#00008B] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
  <span class="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white capitalize">join Waitlist</span>
</a>

  return (
    <div className="pt-[1rem]">
      <div className="flex justify-center">
        <div className="flex justify-center items-center gap-[5px] border rounded-full px-[1rem] py-[.3rem]">
          <div className="border-[4px] border-[#00008B] rounded-full"></div>
          <span className="text-[#666666] font-medium">Unlock Future of Business with Fyntl AI</span>
        </div>
      </div>

      <p className="text-center text-[2rem] sm:text-[3rem] font-medium leading-[64.80px] mt-[.8rem]">
      AI powered <br /> Business OS for SME's
      </p>
      <p className="text-center px-[7vw] lg:px-[14vw] text-[1.1rem] sm:text-[1.3rem] font-medium text-[#666666] mt-[.5rem]"> A cutting-edge Generative AI-powered Operating System for MSMEs,integrating an extensive AI Marketplace with plug-and-play solutions, automated workflows, predictive   analytics, and personalized business insights to propel growth, efficiency, and innovation.
          
      </p>

      {/* <div className="flex items-center pt-[2rem] flex-col gap-[1rem] sm:flex-row sm:justify-center">
        <button className="text-[#FFFFFF] capitalize bg-[black] text-[1.3rem] font-medium px-[2rem] py-[.5rem] rounded-md">
          start saving now
        </button>
        <button className="capitalize text-[1.2rem] font-medium px-[2rem] py-[.5rem] rounded-md flex items-center gap-[1rem]">
          {playIcon} <span className="capitalize">presentation</span>
        </button>
      </div> */}

      <div className="flex justify-center mt-[3rem]">
        <div className="border rounded-xl w-[60%] lg:w-[40%] flex flex-col gap-[1rem] lg:gap-[.5rem] lg:flex-row lg:items-center lg:justify-center p-[.5rem] lg:p-0 shadow-lg lg:px-[.5rem]">
          <input type="email" placeholder="Email" className="border w-[100%] lg:w-[60%] h-[3rem] lg:h-[4rem] lg:border-none outline-none "   />
          <button className=" lg:flex-shrink-0">{btn1}</button>
        </div>
      </div>


      <div className="flex justify-center items-center my-[4rem]">
      <iframe className="w-[70%] h-[30rem]  rounded-lg"
        src="https://www.youtube.com/embed/P0IpabtSe6g?autoplay=1&rel=0&mute=1&vq=hd1080p"
      ></iframe>
    </div>

    </div>
  );
};

export default Header;
