import React, { useEffect } from "react";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import TileCard from "../../components/TileCard/TileCard";
import TilesGallery from "../../components/TilesGallery/TilesGallery";
import { useGlobalContext } from "../../contexts/GlobalContextProvider";

import products from "../../data/products.demo";


function HomeScreen() {
  const { setGlobalTheme } = useGlobalContext();
  useEffect(() => {
    setGlobalTheme("dark");
  }, []);

  const sectionTitle = "The latest. Take a look at what's new, right now.";


  return (
    <>
      <FeaturedProduct
        title="iPhone 14 Pro"
        phrase="Pro.Beyond."
        primaryCtaViewPath="/category/iphone/"
        secondaryCtaViewPath="/item/1/"
        picture="../../../demo/iphone-featured.png"
      />
      <FeaturedProduct
        theme="light"
        title="Apple Watch Ultra"
        phrase="Adventure awaits."
        primaryCtaViewPath="/category/watch/"
        secondaryCtaViewPath="/item/6/"
        picture="../../../demo/watch-featured.png"
      />
      <ProductCarousel
        sectionTitle={sectionTitle}
        theme={"light"}
        products={products}
      />

      <TilesGallery>
        <TileCard
          theme="light"
          title="iPad Air"
          phrase="Light. Bright. Full of might."
          primaryCtaViewPath="/category/ipad/"
          secondaryCtaViewPath="/item/ipad-air/"
          picture="../../../demo/tiles/ipad-air.png"
        />

        <TileCard
          theme="light"
          title="Mac Studio"
          phrase="Empower station."
          primaryCtaViewPath="/category/mac/"
          secondaryCtaViewPath="/item/mac-studio/"
          picture="../../../demo/tiles/mac-studio.png"
        />
        <TileCard
          theme="dark"
          title="Macbook Pro"
          phrase="Mover. Maker. Boundary breaker."
          primaryCtaViewPath="/category/mac/"
          secondaryCtaViewPath="/item/macbook-pro/"
          picture="../../../demo/tiles/macbook-pro.png"
        />

        <TileCard
          theme="dark"
          title="iPhone SE"
          phrase="Serious power. Serious value."
          primaryCtaViewPath="/category/iphone/"
          secondaryCtaViewPath="/item/iphone-se/"
          picture="../../../demo/tiles/airpods-pro.png"
        />
      </TilesGallery>
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
