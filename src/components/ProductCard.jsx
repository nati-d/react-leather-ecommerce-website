import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='w-[400px] h-[600px] bg-white border'>
      <img src={item.img} alt='' className='w-full h-[85%]'/>
      <p className='text-black font-light mx-2 mt-3'>{item.title}</p>
      <h3 className='text-black font-bold mx-2'>{item.price} Br</h3>
    </div>
  )
}

export default ProductCard
