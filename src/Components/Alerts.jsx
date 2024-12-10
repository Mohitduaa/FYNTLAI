import React from 'react'

const Alerts = () => {
  return (
    <div className="bg-[#dfdada82] py-5">
        <div className='flex justify-center items-center pt-5'>
        <div className='flex justify-start items-center gap-2 px-2 w-[170px] border border-black rounded-xl mb-5' >
            <img className='h-[8px] w-[8px]' src="/images/Background.png" alt="img" />
            <h1 className='text-[16px] font-medium' >Alerts & Insights</h1>
        </div>
        </div>
        <div className="flex justify-center items-center gap-24 py-10 ">
            <div>
                <img className="mx-16 mb-2" src="images/SVG17.svg" alt="" />
                <h1 className="text-base font-normal ">Real-Time Budget Alerts</h1>
            </div>
            <div>
                <img className="mx-16 mb-2" src="images/SVG18.svg" alt="" />
                <h1 className="text-base font-normal ">Spending Habit Analysis</h1>
            </div>
            <div>
                <img className="mx-8 mb-2" src="images/SVG19.svg" alt="" />
                <h1 className="text-base font-normal ">Bill Reminders</h1>
            </div>
            <div>
                <img className="mx-16 mb-2" src="images/SVG20.svg" alt="" />
                <h1 className="text-base font-normal ">Financial Forecasting</h1>
            </div>
        </div>
    </div>
  )
}

export default Alerts