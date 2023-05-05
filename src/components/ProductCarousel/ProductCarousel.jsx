import React from "react";
import ProductCarouselTemplate from "./ProductCarouselTemplate";
import ProductCard from "../ProductCard/ProductCard";

function ProductCarousel() {
  const theme="light"
  const products = [
    {
      title: "iPad Air",
      description: "The ultimate iPad, 256 Gb storage, with M2 Max",
      picture: "../../../demo/carousel/ipad-air.png",
      price: 999,
    },
    {
      title: "iPad Pro",
      description: "The most powerful iPad, 1Tb storage, with M2 Pro",
      picture: "../../../demo/carousel/ipad-pro.png",
      price: 1599,
    },
    {
      title: "Macbook Air",
      description: "Macbook with 256 Gb storage, 16 Ram, and M1 Processor",
      picture: "../../../demo/carousel/macbook-air.png",
      price: 1999,
    },
    {
      title: "Macbook Pro",
      description: "Professional Macbook Pro with 1 Tb SSD storage, 64 GB Memory, and M2 Max Processor",
      picture: "../../../demo/carousel/macbook-pro.png",
      price: 3999,
    },
    {
      title: "iPad Air",
      description: "The ultimate iPad, 256 Gb storage, with M2 Max",
      picture: "../../../demo/carousel/ipad-air.png",
      price: 999,
    },
    {
      title: "iPad Pro",
      description: "The most powerful iPad, 1Tb storage, with M2 Pro",
      picture: "../../../demo/carousel/ipad-pro.png",
      price: 1599,
    },
    {
      title: "Macbook Air",
      description: "Macbook with 256 Gb storage, 16 Ram, and M1 Processor",
      picture: "../../../demo/carousel/macbook-air.png",
      price: 1999,
    },
    {
      title: "Macbook Pro",
      description: "Professional Macbook Pro with 1 Tb SSD storage, 64 GB Memory, and M2 Max Processor",
      picture: "../../../demo/carousel/macbook-pro.png",
      price: 3999,
    }
    
  ];

  return (
    <ProductCarouselTemplate theme={theme}>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} theme={theme}/>
      ))}
    </ProductCarouselTemplate>
  );
}

export default ProductCarousel;
