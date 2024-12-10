import { div } from 'framer-motion/client'
import React from 'react'

const FirstCard = () => {
    let arr=[{text1:"30%",text2:"increase in Demand forecasting accuracy.",text4:"Inventiory Optimization ",text3:"Our AI-powered feature leads to a reduction in waste by 12% due to better alignment of inventory with actual market demand."},{text1:"50%",text2:"reduction in idle time",text4:"Production Efficiency",text3:"AI-driven algorithm leads to a 10% increase in throughput and a 7% reduction in labor costs."},{text1:"99%",text2:"on-time delivery",text4:"Supply chain and procurement",text3:"Predictive analytics identifies supply chain disruptions in advance, reducing delays by 70%,"},{text1:"25%",text2:" improvement in stock availability during peak periods.",text4:"Customer demand Adjustments",text3:"By utilizing AI-driven real-time demand sensing, the company can adjust production schedules and inventory in response to shifting demand, improving stock availability"},]
  return (
    <div className='py-5 bg-[#f3f3f3] '>
        <div className='flex justify-center items-center '>
        <div className='flex justify-center items-center gap-2 px-[1rem] py-[.3rem]  border rounded-full mb-5' >
            {/* <img className='h-[8px] w-[8px]' src="/images/Background.png" alt="img" /> */}
            <div className=' border-4 border-[#00008B] rounded-full '></div>
            <h1 className='text-[16px] font-medium' >Sample Use Case</h1>
        </div>
        </div>
        <div className='flex justify-center items-center'>
        <div className='px-[3vw]'>
            <h1 className='text-4xl font-semibold mb-5 text-center'>A Tea Manufacturing Enterprise</h1>
            <p className=' text-[#666666] text-center px-[7vw] lg:px-[14vw]'>Fyntl AI provides the Business OS that integrates AI-powered tools to optimize various areas of the business, improving  supply chain management,  demand forecasting, and production efficiency.</p>
        </div>
        </div>
        {/* <div className='flex flex-wrap justify-center gap-5 px-[7vw]'>
            <div className='bg-[#f9f8f8d7] shadow px-4 py-6 rounded-md flex-1 flex flex-col justify-between'>
                <h1 className='text-4xl text-[#0083fd] font-medium'>30%</h1>
                <h6 className='text-2xl font-light text-[#666666] mb-12'>(Inventory Optimization) increase in Demand forecasting accuracy.</h6>
                <p className='text-[#666666] text-base font-normal leading-tight w-[500px]'>Our AI-powered feature leads to a reduction in waste by 12% due to better alignment of inventory with actual market demand.</p>
            </div> */}
            {/* <div className='bg-[#f9f8f8d7] shadow px-4 py-6 rounded-md flex-1 flex flex-col justify-between'>
                <h1 className='text-4xl text-[#42ab3b] font-medium'>50% </h1>
                <h6 className='text-2xl font-light text-[#666666] mb-12'>(Production Efficiency) reduction in idle time</h6>
                <p className='text-[#666666] text-base font-normal leading-tight w-[500px]'>AI-driven algorithm leads to a 10% increase in throughput and a 7% reduction in labor costs.</p>
            </div> */}
            {/* <div className='bg-[#f9f8f8d7] shadow px-4 py-6 rounded-md flex-1 flex flex-col justify-between'>
                <h1 className='text-4xl text-[#ff9900] font-medium'>99%</h1>
                <h6 className='text-2xl font-light text-[#666666] mb-12'>(Supply chain and procurement) on-time delivery
</h6>
                <p className='text-[#666666] text-base font-normal leading-tight w-[500px]'>Predictive analytics identifies supply chain disruptions in advance, reducing delays by 70%</p>
            </div> */}
            {/* <div className='bg-[#f9f8f8d7] shadow px-4 py-6 rounded-md flex-1 flex flex-col justify-between'>
                <h1 className='text-4xl text-[#b742bd] font-medium'>25%</h1>
                <h6 className='text-2xl font-light text-[#666666] mb-12'>(Customer demand Adjustments)  improvement in stock availability during peak periods.</h6>
                <p className='text-[#666666] text-base font-normal leading-tight w-[500px]'>By utilizing AI-driven real-time demand sensing, the company can adjust production schedules and inventory in response to shifting demand, improving stock availability</p>
            </div> */}
        {/* </div> */}
        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-[1rem] px-[5vw] py-[5rem]'>
            {
                arr.map((item,index)=>{
                    let textColor=()=>{
                        if(index==0)
                        return "text-[#0083FD]"
                        else if(index==1) 
                        return "text-[#42AB3B]";
                        else if(index==2) 
                            return "text-[#FF9900]";
                        else
                            return "text-[#B742BD]";
                    }
                    return (
                        <div className=' rounded-xl flex flex-col gap-[1rem] bg-[#FFFFFF] px-[.8rem] pb-[.4rem]'>
                        <div className='min-h-[7rem] '>                            
                        <p className={`text-[2rem] font-bold ${textColor()}`}>{item.text1}</p>
                            <p className='text-[1.2rem] font-serif text-[#666666]'>{item.text2}</p>
                            </div>

                            <h1 className='text-2xl font-semibold'>{item.text4}</h1>
                            <p className='font-medium font-serif text-[#666666]'>{item.text3}</p>


                        </div>
                    )
                })

            }
        </div>
    </div>
  )
}

export default FirstCard