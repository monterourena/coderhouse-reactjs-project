import React from 'react'

function ItemDetail( { product } ) {
  const { category, description, image, price, title} = product
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='text-5xl font-bold mb-8'>{title}</div>
      <img className='w-[380px] mb-8' src={`${image}`} alt="" />
      <div className='text-2lg font-bold mb-8'>Price ${price}</div>
      <div className='text-lg'>{description}</div>
    </div>
  )
}

export default ItemDetail