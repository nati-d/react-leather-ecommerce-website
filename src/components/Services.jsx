import React from 'react';

const Services = () => {
  return (
    <div className='w-full rounded-2xl py-7 flex flex-col md:flex-row justify-around items-center' style={{ background: '#3a3a3a' }}>
      <div className='flex flex-col items-center gap-3 mb-4 md:mb-0'>
        <img src='./car.png' className='w-16 h-16' alt='Free Shipping & Returns' />
        <span>Free Shipping & Returns</span>
      </div>
      <div className='flex flex-col items-center gap-3 mb-4 md:mb-0'>
        <img src='./dollar.png' className='w-16 h-16' alt='100% Money Back Guarantee' />
        <span>100% Money Back Guarantee</span>
      </div>
      <div className='flex flex-col items-center gap-3 mb-4 md:mb-0'>
        <img src='./replay.png' className='w-16 h-16' alt='High Quality Material' />
        <span>High Quality Material</span>
      </div>
      <div className='flex flex-col items-center gap-3'>
        <img src='./dollarr.png' className='w-16 h-16' alt='Safe and Secure Checkout' />
        <span>Safe and Secure Checkout</span>
      </div>
    </div>
  );
};

export default Services;
