import React from 'react'

const DownloadApp = () => {
  return (
    <>
        <div className="mx-24 py-20">
            <img src="images/Section.png" alt="" />
        </div>
        <div className='flex justify-center items-center pt-5'>
        <div className='flex justify-start items-center gap-2 px-2 w-[140px] border border-black rounded-xl mb-5' >
            <img className='h-[8px] w-[8px]' src="/images/Background.png" alt="img" />
            <h1 className='text-[16px] font-medium' >Blog Articles</h1>
        </div>
        </div>
        <div className='flex justify-center items-center'>
        <div>
            <h1 className='text-4xl font-semibold mb-5 text-center'>Your Guide to Smarter Money Management</h1>
            <p className='mx-36 w-[400px] text-gray-400 text-xl mb-10 '>Unlock expert advice on budgeting, saving, and achieving financial goals effortlessly.</p>
        </div>
        </div>
        <div className="flex justify-center items-center gap-4 pb-10">
            <div>
                <img className="mb-2" src="images/card.png" alt="" />
                <h1 className="w-[388px] text-base font-normal mb-3">Stay in Control: How AI Insights Can Prevent Overspending</h1>
                <p className="text-[#666666]">Oct 11, 2024</p>
            </div>
            <div>
                <img className="mb-2" src="images/card.png" alt="" />
                <h1 className="w-[388px] text-base font-normal mb-3">How to Manage Irregular Income with AI-Powered Financial Tools</h1>
                <p className="text-[#666666]">Oct 11, 2024</p>
            </div>
            <div>
                <img className="mb-2" src="images/card.png" alt="" />
                <h1 className="w-[388px] text-base font-normal mb-3">How AI Can Help You Create Custom Budgets Tailored to Your Needs</h1>
                <p className="text-[#666666]">Oct 11, 2024</p>
            </div>
        </div>
        <div className="flex justify-center pb-20">
            <button className="bg-black text-white font-medium px-4 py-[6px] rounded-md ">View All Articles</button>
        </div>
    </>
  )
}

export default DownloadApp