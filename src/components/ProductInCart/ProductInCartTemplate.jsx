import React from 'react'
import "./ProductInCart.css";

function ProductInCartTemplate({ productInCart, currency, quantitySelected, optionsList, onChange, onRemove }) {
  return (
    <div className="ProductInCart">
      <img className="ProductInCart--Picture" src={productInCart.pictures.featured} alt="" />
      <div className="ProductInCartContainer">
        <div className="Detail--Title">{productInCart.title}</div>
        <div className="Detail--Description">{productInCart.description}</div>
      </div>
      <select className="SelectorContainer" onChange={onChange} value={quantitySelected} name="quantity" id="quantity">
        {optionsList.map((number) => (<option key={number}>{number + 1}</option>))}
      </select>
      <div className="PriceAndRemoveContainer">
        <div className="Detail--Price">{`${currency.symbol}${productInCart.price*quantitySelected}`}</div>
        <button onClick={()=>onRemove(productInCart)} className="Detail--RemoveButton">Remove</button>
      </div>
    </div>
  )
}

export default ProductInCartTemplate