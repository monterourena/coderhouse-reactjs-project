import React from "react";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import TileCard from "../../components/TileCard/TileCard";
import TilesGallery from "../../components/TilesGallery/TilesGallery";

function HomeScreen() {
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

  const sectionTitle = "The latest. Take a look at what's new, right now."

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
      <ProductCarousel sectionTitle={sectionTitle} theme={theme} products={products}/>

      <TilesGallery>
        <TileCard
          theme="light"
          title="iPad Air"
          phrase="Lovable. Drawable. Magical."
          primaryCtaViewPath="/category/women's clothing/"
          secondaryCtaViewPath="/item/19/"
          picture="../../../demo/tiles/ipad-air.png"
        />

        <TileCard
          theme="light"
          title="Mac Studio"
          phrase="More muscle. More hustle."
          primaryCtaViewPath="/category/men's clothing/"
          secondaryCtaViewPath="/item/3/"
          picture="../../../demo/tiles/mac-studio.png"
        />
        <TileCard
          theme="dark"
          title="Macbook Pro"
          phrase="Supercharged by M2."
          primaryCtaViewPath="/category/electronics/"
          secondaryCtaViewPath="/item/14/"
          picture="../../../demo/tiles/macbook-pro.png"
        />

        <TileCard
          theme="dark"
          title="Airpods Pro"
          phrase="Rebuilt from the sound up."
          primaryCtaViewPath="/category/jewelery/"
          secondaryCtaViewPath="/item/6/"
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
