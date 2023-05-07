import React from "react";
import "./FeaturedProduct.css";

function FeaturedProductTemplate(content) {
  return (
    <div className={`Hero Hero--${content.theme}`}>
      {content.children}
      <div className="HeroPictureContainer">
        <img className="HeroPicture"src={content.picture} alt="featured content image" />
      </div>
    </div>
  );
}

export default FeaturedProductTemplate;
