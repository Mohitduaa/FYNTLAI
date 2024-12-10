import React from 'react'

const Nav2 = () => {
    let login=<a href="#_" class="relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-[#00008B] border-2 border-[#00008B] rounded-full hover:text-white group hover:bg-gray-50">
    <span class="absolute left-0 block w-full h-0 transition-all bg-[#00008B] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
    <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
    <span class="relative">Login</span>
</a>
  return (
    <div className='py-[0.5rem] flex justify-between px-[3vw] items-center'>
    <div className='flex items-center'>
    <img src="/fyntl3.png" alt="Fyntl AI" className='h-[3rem]'/>
    <p className='font-bold capitalize text-3xl'>Fyntl AI</p>
    </div>
    
      
    </div>
  )
}

export default Nav2
