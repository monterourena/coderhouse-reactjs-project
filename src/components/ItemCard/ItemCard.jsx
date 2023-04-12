import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemCard( {product} ) {

  const {title, price, image} = product

  return (

    <Link to={`/item/${product.id}`}>
        <div className='w-[380px] h-[420px] flex flex-col justify-center items-center bg-white p-5 rounded-3xl'>
          <img className='h-[120px] mb-5' src={`${image}`} alt="" />
          <div className='text-center mb-2 font-bold'>{title}</div>
          <div className='text-center'>Price: ${price}</div>
        </div>
    </Link>
  )
}
