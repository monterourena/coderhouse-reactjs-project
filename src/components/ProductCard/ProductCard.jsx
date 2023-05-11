import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

function ProductCard({ product, theme }) {
  const navigate = useNavigate();

  const handleRedirection = () => {
      navigate(`/item/${product.key}`);
  }

  return (

  <div onClick={handleRedirection} className={`Card Card--${theme}`}>
    <div className="ContentContainer--Text">
      <div className={`ContentTitle ContentTitle--${theme}`}>{product.title}</div>
      <div className={`ContentDescription ContentDescription--${theme}`}>{product.catchline}</div>
    </div>
    <div className="PictureContainer">
        {/* <img className="Picture" src={product.productPictures.featured} alt="" /> */}
        <img className="Picture" src={"../../../demo/carousel/ipad-pro.png"} alt="" />

      </div>
    <div className="Price">{`From ${product.currency.symbol}${product.basePrice}`}</div>
  </div>

  );
}

export default ProductCard;

// title: "iPad Air",
//       description: "The ultimate iPad, 256 Gb storage, with M2 Max",
//       picture: "./path/picture.png",
//       price: 999,



// {
//   categoryKey: "mac",
//   key: "macbook-pro",
//   title: "MacBook Pro",
//   catchline: "Mover. Maker. Boundary breaker.",
//   description: "Supercharged by M2 chip, Up to 20 hrs battery life",
//   basePrice: 1299,
//   currency: { code: "USD", symbol: "$" },
//   modelsId: "3WqIwqP1CeIi6fff6JVY",
//   productPictures: {
//     featured: "",
//     gallery: [""],
//   },