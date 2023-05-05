import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="Card">
      <div className="ContentContainer">
        <div className="Content--Title">{product.title}</div>
        <div className="Content--Description">{product.description}</div>
      </div>
      <div className="ContentContainer">
        <div className="PictureContainer">
          <img src={product.picture} alt="" />
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
