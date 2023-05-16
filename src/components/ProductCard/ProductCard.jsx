import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

function ProductCard({ product, theme }) {
  const navigate = useNavigate();

  const handleRedirection = () => {
    navigate(`/item/${product.key}`);
  };

  return (
    <div onClick={handleRedirection} className={`Card Card--${theme}`}>
      <div className="ContentContainer--Text">
        <div className={`ContentTitle ContentTitle--${theme}`}>
          {product.title}
        </div>
        <div className={`ContentDescription ContentDescription--${theme}`}>
          {product.catchline}
        </div>
      </div>
      <div className="PictureContainer">
        <img className="Picture" src={product.productPictures.main} alt="" />
      </div>
      <div className="Price">{`From ${product.currency.symbol}${product.basePrice}`}</div>
    </div>
  );
}

export default ProductCard;
