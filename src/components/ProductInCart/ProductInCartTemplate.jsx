import React from 'react'
import "./ProductInCart.css";

function ProductInCartTemplate({ details, currency, quantitySelected, onChange, optionsList }) {
    console.info("Re-render")
  return (
    <div className="ProductInCart">
      <img className="ProductInCart--Picture" src={details.picture} alt="" />
      <div className="DetailsContainer">
        <div className="Detail--Title">{details.title}</div>
        <div className="Detail--Description">{details.description}</div>
      </div>
      <select className="SelectorContainer" onChange={onChange} value={quantitySelected} name="quantity" id="quantity">
        {optionsList.map((number) => (<option key={number}>{number + 1}</option>))}
      </select>
      <div className="PriceAndRemoveContainer">
        <div className="Detail--Price">{`${currency.symbol}${details.price}`}</div>
        <button className="Detail--RemoveButton">Remove</button>
      </div>
    </div>
  )
}

export default ProductInCartTemplate