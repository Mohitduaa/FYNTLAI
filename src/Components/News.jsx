import React from 'react'

const News = () => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-medium mb-4">Subscribe to Newsletter</h1>
            <p className="text-xl font-normal leading-normal text-[#666666] w-[510px]">Subscribe today to receive personalized financial tips, news, and updates delivered directly to your email.</p>
        </div>
        <div className="flex justify-center gap-2 py-4">
            <input  className="border px-4 py-2 rounded-md" placeholder="your@email.com" type="text" />
            <button className="bg-black text-white text-base font-medium px-10 py-2 rounded-md">subscribe</button>
        </div>
    </div> 
  )
}

export default News