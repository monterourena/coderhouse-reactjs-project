import React, { useEffect, useState } from "react";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import { useGlobalContext } from "../../contexts/GlobalContextProvider";
import { useParams } from "react-router-dom";

function CategoryScreen() {

  const { cid } = useParams();
  const {setGlobalTheme, globalProducts, globalCategories} = useGlobalContext();

  const [products, setProducts] = useState(null)
  const [category, setCategory] = useState("dark")
  const [categoryTheme, setCategoryTheme] = useState("dark")
  const [featuredProduct, setFeaturedProduct] = useState(null)

  useEffect(()=>{
    setGlobalTheme(categoryTheme);
  },[categoryTheme])

  useEffect(()=>{
    const productsByCategory = globalProducts.filter((product)=> product.categoryId === cid)
    setProducts(productsByCategory)
  },[globalProducts, cid])

  useEffect(()=>{
    const currentCategory = globalCategories.find((category)=> category.key === cid)
    const featuredProduct = globalProducts.find((product)=> product.pid === currentCategory.featuredProductId)
    setCategory(currentCategory)
    setFeaturedProduct(featuredProduct)
  },[globalCategories, cid])

  useEffect(()=>{
    const theme = category?.theme || "dark"
    setCategoryTheme(theme)
  },[category])


  const productDetails = {
    theme:categoryTheme,
    title:featuredProduct?.title,
    phrase:featuredProduct?.catchline,
    picture:"../../../demo/tiles/ipad-air.png",
    linksEnabled : false
  }
  const carouselContent = {
    sectionTitle: category?.sectionSubtitle,
    theme: "light",
  };

  if(!products || !category){
    return ""
  }

  return (
    <>
      <FeaturedProduct content={productDetails}/>
      <ProductCarousel content={carouselContent} products={products}/>
    </>
  );
}

export default CategoryScreen;
