import React from "react";
import "./ProductCard.css";

function ProductCard({ product, theme }) {
  return (
    <div className={`Card Card--${theme}`}>
      <div className="ContentContainer">
        <div className={`ContentTitle ContentTitle--${theme}`}>{product.title}</div>
        <div className={`ContentDescription ContentDescription--${theme}`}>{product.description}</div>
      </div>
      <div className="ContentContainer">
        <div className="PictureContainer">
          <img className="Picture" src={product.picture} alt="" />
        </div>
        <div className="Price">{`From $${product.price}`}</div>
      </div>
    </div>
  );
}

export default ProductCard;

// title: "iPad Air",
//       description: "The ultimate iPad, 256 Gb storage, with M2 Max",
//       picture: "./path/picture.png",
//       price: 999,
