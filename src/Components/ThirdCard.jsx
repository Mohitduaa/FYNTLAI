import React from 'react';

const ThirdCard = ({ data }) => {
  let arr=[{text1:"AI Agents",head:"One Interface to create Thousands of AI agents",subHead:"Imagine waking up in the morning and AI has already followed up with all vendors, proposing you with a simple Yes/No decision that you can resolve with a click. AI agents can:", btns: [
    { img: "/images/Component 1.png", text: "Do Follow-ups" },
    { img: "/images/Component 1.png", text: "Negotiate for deals" },
    { img: "/images/Component 1.png", text: "Draw conclusions" },
    { img: "/images/Component 1.png", text: "Monitor suspicious activities" }],
btn2text:"read me more about this",mainImg:"/images/img111.png"},
{text1:"AI Engine",head:"Data is Money",subHead:"Your business data is sitting on ERP, mails, spreadsheets, and sometimes on WhatsApp, that is unused. Fyntl AI engine can fetch you live reports, insights, feedback. This will not only help you make data-driven decisions but give you an extra edge over competitors. Live data can be used to generate:", btns: [
    { img: "/images/Component 1.png", text: "Personalized Insights" },
    { img: "/images/Component 1.png", text: "Live Reports" },
    { img: "/images/Component 1.png", text: "Bottleneck Analysis" },
    { img: "/images/Component 1.png", text: "Create Business Documents" }],
btn2text:"read me more about this",mainImg:"/images/img234.png"},
{text1:"AI Global Inventory",head:"Globalise your inventory with AI",subHead:"Our AI marketplace brings massive growth opportunities to the table. It automatically tracks inventory and finds the best deal for you or shares where you can sell your product globally. AI helps in managing cross-border formalities, payments, language barriers, etc., saving you thousands of hours with massive business opportunities globally.", btns: [
    { img: "/images/Component 1.png", text: "Globalize Inventory" },
    { img: "/images/Component 1.png", text: "Tracks marketplace opportunities" },
    { img: "/images/Component 1.png", text: "Fully autopilot mode" },
    { img: "/images/Component 1.png", text: " Cross borders formalities" }],
btn2text:"read me more about this",mainImg:"/images/img233.png"},]
  return (
    <>
    <div className='px-[4vw] mt-[5rem]'>
    {
        
        arr.map((item,index)=>{
            return <div className={`mb-[6rem] flex flex-col gap-[4rem] lg:gap-0 ${(index===1)?"lg:flex-row-reverse":"lg:flex-row"} lg:items-center`}>
            <div className={` flex flex-col lg:w-[50%] gap-[1.8rem] items-center lg:items-start  ${(index==1)? "lg:pl-[6vw]":"pl-0"} `}> 
    <div className='flex items-center justify-center gap-[5px] border rounded-full px-[1rem] py-[.3rem]'>
        <div className=' border-[4px] border-[#00008B] rounded-full '></div>
        <span className='text-[#666666] font-medium'>{item.text1}</span>
    </div>
    <p className='text-4xl font-bold text-center lg:text-start'>{item.head}</p>
    <p className='text-[#666666] font-medium text-[1.1rem] lg:text-start  text-center px-[5vw] lg:px-0 lg:pr-[8vw]'>{item.subHead}</p>
    <div className=' sm:grid sm:grid-cols-2 sm:grid-template-columns: repeat(3, 1fr);  flex flex-col gap-[2rem] sm:gap-[1rem] '>
        {
            item.btns.map((item1,index)=>{
                return (
                                <button className={`flex items-center text-[#666666] font-sans border rounded-md min-w-[13rem] px-2 py-[.4rem] gap-[5px] text-[14px]`}><img src={item1.img} alt="img not available" className='pl-1 overflow-hidden' />{item1.text}</button>
                
                )
            })
        }
    </div>
    {/* <button className='capitalize rounded-md font-bold bg-black text-[#FFFFFF] py-[.4rem] px-[3rem]'>{item.btn2text}</button> */}

            </div>
            <div className='lg:w-[50%]  w-[100%] flex justify-center pr-[2px] pb-[2px]'>
              <img src={item.mainImg} alt="" className='w-[100%] h-[100%] rounded-lg' />
            </div>

                
            </div>
        })
    
    }
      
    </div>


    </>
  );
};

export default ThirdCard;




