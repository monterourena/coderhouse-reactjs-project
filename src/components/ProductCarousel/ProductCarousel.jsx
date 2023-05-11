import React from "react";
import ProductCarouselTemplate from "./ProductCarouselTemplate";
import ProductCard from "../ProductCard/ProductCard";

function ProductCarousel({content, products}) {
  const {theme, sectionTitle} = content
  return (
    <ProductCarouselTemplate sectionTitle={sectionTitle} theme={theme}>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} theme={theme}/>
      ))}
    </ProductCarouselTemplate>
  );
}

export default ProductCarousel;
