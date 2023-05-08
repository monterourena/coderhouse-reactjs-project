import React from "react";
import "./ProductActionButtons.css";

function ProductActionButtons({onAddToCard, productCounter, setProductCounter, addToCartClicked}) {
  

  const add =()=>setProductCounter(productCounter+1)
  const sub =()=>setProductCounter(productCounter-1)

  return (
    <div className="ProductActionButtons">
      {!addToCartClicked && (
        <div className="DefaultState">
          <div className="ItemCounter">
            <div onClick={sub} className="ItemCounterButton ItemCounterButton--Secondary">-</div>
            <div>{productCounter}</div>
            <div onClick={add} className="ItemCounterButton ItemCounterButton--Primary">+</div>
          </div>
          <div onClick={onAddToCard} className="ActionButton ActionButton--Primary">Add to cart</div>
        </div>
      )}
      {!!addToCartClicked && (
        <div className="ActivatedState">
          <div className="ActionButton ActionButton--Secondary">
            All products
          </div>
          <div className="ActionButton ActionButton--Primary">Review bag</div>
        </div>
      )}
    </div>
  );
}

export default ProductActionButtons;
