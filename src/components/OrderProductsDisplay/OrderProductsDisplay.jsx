import React from 'react'
import OrderProductCard from '../OrderProductCard/OrderProductCard'
import "./OrderProductsDisplay.css"

function OrderProductsDisplay({products}) {
  return (
    <>
    <header className='OrderProductsDisplay--Header'>
      <h3 className='OrderProductsDisplay--HeaderTitle'>Products</h3>
      <p className='OrderProductsDisplay--HeaderSubtitle'>Quantity</p>
      <p className='OrderProductsDisplay--HeaderSubtitle'>Price</p>
    </header>
    <div className='OrderProductsDisplay--ProductsContainer'>
      {products.map((product, index)=> <OrderProductCard product={product} key={index}/>)}
    </div>
    </>
  )
}

export default OrderProductsDisplay