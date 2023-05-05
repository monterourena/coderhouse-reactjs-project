import React from "react";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";

function HomeScreen() {
  return (
    <>
      <FeaturedProduct
        title="iPhone 14 Pro"
        phrase="Pro.Beyond."
        primaryCtaViewPath="/category/electronics/"
        secondaryCtaViewPath="/item/1/"
        picture="../../../demo/iphone-featured.png"
      />
      <FeaturedProduct
        theme="light"
        title="Apple Watch Ultra"
        phrase="Adventure awaits."
        primaryCtaViewPath="/category/jewelery/"
        secondaryCtaViewPath="/item/6/"
        picture="../../../demo/watch-featured.png"
      />
      <ProductCarousel/>
      <ItemListContainer />
    </>
  );
}

export default HomeScreen;

// const theme = "dark";
// const title = "iPhone 14 Pro";
// const phrase = "Pro.Beyond.";
// const primaryCtaText = "Learn more";
// const primaryCtaViewPath = "/category/electronics/";
// const secondaryCtaText = "Buy";
// const secondaryCtaViewPath = "/category/electronics/";
// const picture ="../../../demo/iphone-featured.png";
