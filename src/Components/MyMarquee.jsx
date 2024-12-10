import React from 'react';
import MarqueeSlider from 'react-marquee-slider';

const MyMarquee = () => {
  return (
    <div className='py-10' style={{ width: '100%', margin: '20px 0' }}>
      <MarqueeSlider velocity={55}>
      <img className='px-[25px] h-[30px]' src="/images/svg1.svg" alt="svg" />
      <img className='px-[25px] h-[30px]' src="/images/svg7.svg" alt="svg" />
      <img  className='px-[25px] h-[30px]' src="/images/svg1.svg" alt="svg" />
      <img className='px-[25px] h-[30px]' src="/images/svg7.svg" alt="svg" />
      <img className='px-[25px] h-[30px]' src="/images/svg1.svg" alt="svg" />
      <img className='px-[25px] h-[30px]' src="/images/svg7.svg" alt="svg" />
      <img className='px-[25px] h-[30px]' src="/images/svg1.svg" alt="svg" />
      <img className='px-[25px] h-[30px]' src="/images/svg7.svg" alt="svg" />
      <img className='px-[25px] h-[30px]' src="/images/svg7.svg" alt="svg" />
      <img className='px-[25px] h-[30px]' src="/images/svg7.svg" alt="svg" />
      <img className='px-[25px] h-[30px]' src="/images/svg7.svg" alt="svg" />
      <img className='px-[25px] h-[30px]' src="/images/svg7.svg" alt="svg" />

      
      </MarqueeSlider>
    </div>
  );
};

export default MyMarquee;
