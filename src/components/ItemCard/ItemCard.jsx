import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemCard( {product} ) {
  return (

    <Link to={`/item/${product.id}`}>
        <div className='w-80 h-32 bg-primary'>
            {product.title}
        </div>
    </Link>
  )
}
