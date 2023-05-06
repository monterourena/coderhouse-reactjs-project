import React from "react";
import "./ProductDetails.css";
import ProductActionButtons from "../ProductActionButtons/ProductActionButtons";

function ProductDetails({ product }) {
  const selectedPrice = "1999";
  const currencySymbol = product.currency.symbol;

  return (
    <div className="ProductDetail">
      <img
        className="ProductDetail--Picture"
        src={product.productPictures.featured}
        alt="Product Details"
      />
      <div className="ProductDetail--SidePanelContainer">
        <div className="SidePanel--Header">Model. Which is best for you?</div>
        <div className="SidePanel--Variations">
          {product.variation.map((variation, index) => (
            <div key={index} className="ProductVariationContainer">
              <div className="ProductVariation--Details">
                <div className="ProductVariation--Title">{variation.title}</div>
                <div className="ProductVariation--Description">
                  {variation.description}
                </div>
              </div>
              <div className="ProductVariation--Price">{`${currencySymbol}${variation.optionPrice}`}</div>
            </div>
          ))}
        </div>
        <div className="SidePanel--TotalDetails">
          <p className="TotalDetails--SubtotalTitle">Subtotal</p>
          <p className="TotalDetails--SubtotalValue">{`${product.currency.symbol}${selectedPrice}`}</p>
        </div>
        {/* ESTO SE TIENE QUE REEMPLAZAR POR UN COMPONENTE */}
        <ProductActionButtons/>
      </div>
    </div>
  );
}

export default ProductDetails;
