import React, { useEffect, useState } from 'react'
import { memo } from 'react';
import { Link } from 'react-router-dom';


const Navbaar = ({navItems}) => {
    let icon=<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.85 11.532a6.319 6.319 0 0 1 8.937 0L15.255 16l-4.468 4.468a6.319 6.319 0 1 1-8.936-8.936Z" fill="url(#a)"/><path d="M11.532 1.85a6.319 6.319 0 0 0 0 8.937L16 15.255l4.468-4.468a6.319 6.319 0 1 0-8.936-8.936Z" fill="url(#b)"/><path d="M21.213 20.468a6.319 6.319 0 1 0 0-8.936L16.745 16l4.468 4.468Z" fill="url(#c)"/><path d="M20.468 30.15a6.319 6.319 0 0 0 0-8.937L16 16.745l-4.468 4.468a6.319 6.319 0 1 0 8.936 8.936Z" fill="url(#d)"/><defs><linearGradient id="a" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse"><stop stop-color="#42AB3B"/><stop offset="1" stop-color="#2C7227"/></linearGradient><linearGradient id="b" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse"><stop stop-color="#42AB3B"/><stop offset="1" stop-color="#2C7227"/></linearGradient><linearGradient id="c" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse"><stop stop-color="#42AB3B"/><stop offset="1" stop-color="#2C7227"/></linearGradient><linearGradient id="d" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse"><stop stop-color="#42AB3B"/><stop offset="1" stop-color="#2C7227"/></linearGradient></defs></svg>;
    let hamIcon=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-[#4e4e4e]">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />;
  </svg>
 
  let [display,setDisplay]=useState(false);

 
  
  return (
   <div className='sm:px-[7vw] px-[1vw] pt-[1rem] sticky top-0 bg-white  z-50'>
    <nav className=' flex  justify-between rounded-2xl py-[.8rem] px-[1vw] shadow-lg'>
        <div className='flex gap-[.6rem] items-start sm:items-center'>
            {/* <span>{icon}</span> */}
            <img src="/images/fyntl3.png" alt="img not available" className='h-[2.2rem]'
            />
            <p className='font-bold capitalize text-[1.4rem]'>Fyntl AI</p>
        </div>
        <div className={`${(display===false)?"hidden":"flex"} sm:flex sm:w-[80%] w-auto justify-between flex-col sm:flex-row gap-[1rem] sm:gap-0`}>
        <ul className='flex flex-col sm:flex-row  items-center gap-[4vw] mt-[3rem] sm:mt-0 pr-[6rem] sm:pr-0'>
            {
                navItems.map((items,index)=>{
                    return (
                        <Link to={`/${items}`} key={index} >
                            <li className='text-[#525151] font- capitalize' key={index}>{items}</li>
                        </Link>
                    )
                })
            }
            </ul>
            <button className=' capitalize flex-shrink-0 text-white font-bold bg-black px-[1rem] py-[.2rem] mr-[6rem] sm:mr-0 rounded-md'>free remix</button>
        </div>
        <div className='sm:hidden border-2'>
        <span onClick={()=>setDisplay(!display)}>{hamIcon}</span>

        </div>
    </nav>
   </div>
  
  )
}

export default memo(Navbaar)
