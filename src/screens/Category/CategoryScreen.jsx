import React, { useEffect } from "react";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import { useGlobalContext } from "../../contexts/GlobalContextProvider";

function CategoryScreen() {
  const theme="dark"
  const {setGlobalTheme} = useGlobalContext();

  useEffect(()=>{
    setGlobalTheme(theme);
  },[])

  const sectionTitle = "The latest. Take a look at what's new, right now."
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
    }
    
  ];

  return (
    <>
      <FeaturedProduct
        theme={theme}
        title="iPad"
        phrase="Lovable. Drawable. Magical."
        primaryCtaViewPath="/category/electronics/"
        secondaryCtaViewPath="/item/1/"
        picture="../../../demo/tiles/ipad-air.png"
        linksEnabled = {false}
      />
      <ProductCarousel sectionTitle={sectionTitle} theme={"light"} products={products}/>
    </>
  );
}

export default CategoryScreen;
