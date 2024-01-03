import React from 'react'

const Services = () => {
  return (
    <div className='w-full rounded-2xl py-7 flex justify-around items-center' style={{background:'#3a3a3a'}}>
      <div className='flex flex-col items-center gap-3'>
        <img src='./car.png' className='w-16 h-16'/>
        <span>Free Shipping & Returns</span>
      </div>
      <div className='flex flex-col items-center gap-3'>
        <img src='./dollar.png' className='w-16 h-16'/>
        <span>100% Money Back Guarantee</span>
      </div>
      <div className='flex flex-col items-center gap-3'>
        <img src='./replay.png' className='w-16 h-16'/>
        <span>High Quality Material</span>
      </div>
      <div className='flex flex-col items-center gap-3'>
        <img src='./dollarr.png' className='w-16 h-16'/>
        <span>Safe and Secure Checkout</span>
      </div>
    </div>
  )
}

export default Services
