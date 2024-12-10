import React from 'react'

const FourthCard = () => {
  return (
    <div className="py-10">
        <div className='flex justify-center items-center pt-5'>
        <div className='flex justify-start items-center gap-2 px-2 w-[140px] border border-black rounded-xl mb-5' >
            <img className='h-[8px] w-[8px]' src="/images/Background.png" alt="img" />
            <h1 className='text-[16px] font-medium' >Smart Savings</h1>
        </div>
        </div>
        <div className='flex justify-center items-center'>
        <div>
            <h1 className='text-4xl font-semibold mb-5 text-center'>Optimize Your Savings Journey</h1>
            <p className='w-[605px] text-gray-400 text-xl mb-10 text-center'>Whether it's a vacation or an emergency fund, we'll help you get there faster.</p>
        </div>
        </div>
        <div className="flex justify-center items-center gap-5 py-4">
            <img src="images/Link1.png" alt="" />
            <img src="images/Link2.png" alt="" />
            <img src="images/Link3.png" alt="" />
        </div>
        <div className="flex justify-center items-center gap-5 pb-2">
        <img src="images/Link4.png" alt="" />
        <img src="images/Link5.png" alt="" /> 
        </div>
    </div>
  )
}

export default FourthCard