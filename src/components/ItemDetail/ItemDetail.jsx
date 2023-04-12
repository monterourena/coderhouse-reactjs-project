import React from 'react'

function ItemDetail( { product } ) {
  return (
    <div>Product id: {product.id} price: {product.price}</div>
  )
}

export default ItemDetail