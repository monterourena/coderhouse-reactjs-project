import React from "react";
import "./OrderProductCard.css";
function OrderProductCard({ product }) {
  return (
    <div className="OrderProductCard">
      <div className="ProductColumn">
        <div className="ProductPictureContainer">
          <img
            className="ProductPicture"
            src={product.pictures.featured}
            alt=""
          />
        </div>
        <div className="ProductInformation">
          <div className="ProductInformation--Title">{product.title}</div>
          <div className="ProductInformation--Description">{product.description}</div>
        </div>
      </div>
      <div className="ProductQuantity">{product.quantitySelected}</div>
      <div className="ProductPrice">$ {product.price}</div>
    </div>
  );
}

export default OrderProductCard;
