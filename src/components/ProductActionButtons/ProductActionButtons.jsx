import React from "react";
import "./ProductActionButtons.css";

function ProductActionButtons() {
  const actionButtonDefaultState = true;
  const itemCount = 10;

  return (
    <div className="ProductActionButtons">
      {!!actionButtonDefaultState && (
        <div className="DefaultState">
          <div className="ItemCounter">
            <div className="ItemCounterButton ItemCounterButton--Secondary">-</div>
            <div>{itemCount}</div>
            <div className="ItemCounterButton ItemCounterButton--Primary">+</div>
          </div>
          <div className="ActionButton ActionButton--Primary">Add to cart</div>
        </div>
      )}
      {!actionButtonDefaultState && (
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
