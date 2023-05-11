import React, { useEffect, useState } from "react";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import TileCard from "../../components/TileCard/TileCard";
import TilesGallery from "../../components/TilesGallery/TilesGallery";
import { useGlobalContext } from "../../contexts/GlobalContextProvider";

function HomeScreen() {
  const { setGlobalTheme, globalProducts } = useGlobalContext();
  const [products, setProducts] = useState(null)

  useEffect(() => {
    setGlobalTheme("dark");
  }, []);

  useEffect(()=>{
    const products = globalProducts;
    setProducts(products)
  },[globalProducts])

  const featuredProductA = {
    theme: "dark",
    title: "iPhone 14 Pro",
    phrase: "Pro.Beyond.",
    primaryCtaViewPath: "/category/iphone/",
    secondaryCtaViewPath: "/item/iphone-14-pro/",
    picture: "../../../demo/iphone-featured.png",
  };
  const featuredProductB = {
    theme: "light",
    title: "Apple Watch Ultra",
    phrase: "Adventure awaits.",
    primaryCtaViewPath: "/category/watch/",
    secondaryCtaViewPath: "/item/watch-ultra/",
    picture: "../../../demo/watch-featured.png",
  };

  const carouselContent = {
    sectionTitle: "The latest. Take a look at what's new, right now.",
    theme: "light",
  };

  const tilesContent = {
    "ipadAir": {
      theme: "light",
      title: "iPad Air",
      phrase: "Light. Bright. Full of might.",
      primaryCtaViewPath: "/category/ipad/",
      secondaryCtaViewPath: "/item/ipad-air/",
      picture: "../../../demo/tiles/ipad-air.png",
    },
    "macStudio":{
      theme: "light",
      title: "Mac Studio",
      phrase: "Empower station.",
      primaryCtaViewPath: "/category/mac/",
      secondaryCtaViewPath: "/item/mac-studio/",
      picture: "../../../demo/tiles/mac-studio.png",
    },
    "macbookPro":{
      theme: "dark",
      title: "Macbook Pro",
      phrase: "Mover. Maker. Boundary breaker.",
      primaryCtaViewPath: "/category/mac/",
      secondaryCtaViewPath: "/item/macbook-pro/",
      picture: "../../../demo/tiles/macbook-pro.png",
    },
    "iphoneSE":{
      theme: "dark",
      title: "iPhone SE",
      phrase: "Serious power. Serious value.",
      primaryCtaViewPath: "/category/iphone/",
      secondaryCtaViewPath: "/item/iphone-se/",
      picture: "../../../demo/tiles/airpods-pro.png",
    }
  };


  if(!products){
    return ""
  }

  return (
    <>
      <FeaturedProduct content={featuredProductA} />
      <FeaturedProduct content={featuredProductB} />
      <ProductCarousel content={carouselContent} products={products}/>
      <TilesGallery>
        <TileCard content={tilesContent.ipadAir} />
        <TileCard content={tilesContent.macStudio} />
        <TileCard content={tilesContent.macbookPro} />
        <TileCard content={tilesContent.iphoneSE} />
      </TilesGallery>
    </>
  );
}

export default HomeScreen;
