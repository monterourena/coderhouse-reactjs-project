import React from "react";
import "./ProductActionButtons.css";
import { Link } from "react-router-dom";

function ProductActionButtons({
  onAddToCard,
  productCounter,
  setProductCounter,
  addToCartClicked,
  stock,
}) {
  const MIN_COUNTER_VALUE = 1;

  const add = () => {
    if (stock > productCounter) {
      setProductCounter(productCounter + 1);
    }
  };
  const sub = () => {
    if (MIN_COUNTER_VALUE < productCounter) {
      setProductCounter(productCounter - 1);
    }
  };

  return (
    <div className="ProductActionButtons">
      {!addToCartClicked && (
        <div className="DefaultState">
          <div className="ItemCounter">
            <div
              onClick={sub}
              className="ItemCounterButton ItemCounterButton--Secondary"
            >
              -
            </div>
            <div>{productCounter}</div>
            <div
              onClick={add}
              className="ItemCounterButton ItemCounterButton--Primary"
            >
              +
            </div>
          </div>
          <div
            onClick={onAddToCard}
            className="ActionButton ActionButton--Primary"
          >
            Add to cart
          </div>
        </div>
      )}
      {!!addToCartClicked && (
        <div className="ActivatedState">
          <Link to="/" className="ActionButton ActionButton--Secondary">
            All products
          </Link>
          <Link to="/cart" className="ActionButton ActionButton--Primary">
            Review bag
          </Link>
        </div>
      )}
    </div>
  );
}

export default ProductActionButtons;
