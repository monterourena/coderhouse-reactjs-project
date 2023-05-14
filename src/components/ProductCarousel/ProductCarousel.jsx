import React from "react";
import ProductCarouselTemplate from "./ProductCarouselTemplate";
import ProductCard from "../ProductCard/ProductCard";

function ProductCarousel({content, products}) {
  const {theme, sectionTitle} = content
  const sortedProducts = products.sort((a, b) => a.categoryId.localeCompare(b.categoryId))
  return (
    <ProductCarouselTemplate sectionTitle={sectionTitle} theme={theme}>
      {sortedProducts.map((product, index) => (
        <ProductCard key={index} product={product} theme={theme}/>
      ))}
    </ProductCarouselTemplate>
  );
}

export default ProductCarousel;
