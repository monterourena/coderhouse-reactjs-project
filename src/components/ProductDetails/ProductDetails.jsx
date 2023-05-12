import React from "react";
import "./ProductDetails.css";

function ProductDetails({
  subtotalItem,
  onSelection,
  globalCurrency,
  models,
  children,
  selectedModelIndex,
  picture
  }) {
    
  return (
    <div className="ProductDetail">
      <div className="ProductDetail--PictureContainer">
        <img
          className="ProductDetail--Picture"
          src={picture}
          alt="Product Details"
        />
      </div>
      <div className="ProductDetail--SidePanelContainer">
        <div className="SidePanel--Header">Model. Which is best for you?</div>
        <div className="SidePanel--Models">
          {models.map((model, index) => (
            <div
              onClick={() => onSelection(model, index)}
              key={index}
              className={`ModelContainer ${
                selectedModelIndex === index ? "selected" : ""
              }`}
            >
              <div className="Model--Details">
                <div className="Model--Title">{model.title}</div>
                <div className="Model--Description">{model.description}</div>
              </div>
              <div className="Model--Price">{`${globalCurrency.symbol}${model.price}`}</div>
            </div>
          ))}
        </div>
        <div className="SidePanel--TotalDetails">
          <p className="TotalDetails--SubtotalTitle">Subtotal</p>
          <p className="TotalDetails--SubtotalValue">{`${globalCurrency.symbol}${subtotalItem}`}</p>
        </div>
        {children}
      </div>
    </div>
  );
}

export default ProductDetails;
