import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import ViewWithHeader from "../../components/ViewWithHeader/ViewWithHeader";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import ProductActionButtons from "../../components/ProductActionButtons/ProductActionButtons";
import { useGlobalContext } from "../../contexts/GlobalContextProvider";
import { useCartContext } from "../../contexts/CartContextProvider";


const product = {
  pid: 0,
  title: "iPhone 14 Pro",
  phrase: "Pro. Beyond",
  description: "The ultimate iPhone, starting from 256 Gb storage, with M2 Max",
  basePrice: 999,
  productPictures: {
    featured: "../../../demo/product/iphone-14/iphone-14-detail.jpg",
    gallery: [
      "../../../demo/product/iphone-14/iphone-14-detail.jpg",
      "../../../demo/product/iphone-14/iphone-14-detail.jpg",
      "../../../demo/product/iphone-14/iphone-14-detail.jpg",
    ],
  },
};
const variationsForThisProduct = [
  {
    pid: 0,
    vid: 0,
    title: "iPhone 14 Pro",
    description: "128 Gb",
    price: 999,
    stock: 10,
    picture: "../../../demo/product/iphone-14/iphone-14-detail.jpg",
  },
  {
    pid: 0,
    vid: 1,
    title: "iPhone 14 Pro",
    description: "256 Gb",
    price: 1099,
    stock: 10,
    picture: "../../../demo/product/iphone-14/iphone-14-detail.jpg",
  },
  {
    pid: 0,
    vid: 2,
    title: "iPhone 14 Pro Max",
    description: "128 Gb",
    price: 1999,
    stock: 10,
    picture: "../../../demo/product/iphone-14/iphone-14-detail.jpg",
  },
  {
    pid: 0,
    vid: 3,
    title: "iPhone 14 Pro Max",
    description: "259 Gb",
    price: 2499,
    stock: 10,
    picture: "../../../demo/product/iphone-14/iphone-14-detail.jpg",
  },
  {
    pid: 0,
    vid: 4,
    title: "iPhone 14 Pro Max",
    description: "1 Tb",
    price: 3899,
    stock: 10,
    picture: "../../../demo/product/iphone-14/iphone-14-detail.jpg",
  },
];

function ProductScreen() {

  const { key } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});
  const [currentModels, setCurrentModels] = useState([]);
  const {
    setGlobalTheme,
    globalCartCount,
    setGlobalCartCount,
    globalProducts,
    globalModels,
  } = useGlobalContext();


  const findProduct = (key)=> globalProducts.find((product)=> product.key === key)
  const findModels = (mid)=> globalModels.find((model)=> model.mid == mid)

  useEffect(() => {
    setGlobalTheme("light");
    setCurrentProduct(findProduct(key))
  }, []);

  useEffect(()=>{
    setCurrentProduct(findProduct(key))
  },[globalProducts])
  
  useEffect(()=>{
    console.log("CURRENT PRODUCT: ", currentProduct)
    setCurrentModels(findModels(currentProduct?.modelsId))
  },[currentProduct])

  useEffect(()=>{
    console.log("CURRENT MODELS: ", currentModels)
    console.log("DEFAULT MODEL: ", currentModels)
  },[currentModels])


  // The default selection is the first option we get for this product
  const defaultSelection = variationsForThisProduct[0];
  const defaultSubtotal = defaultSelection.price;

  

  const { productsInCart, setProductsInCart } = useCartContext();
  const [productVariant, setProductVariant] = useState(defaultSelection);
  const [productCounter, setProductCounter] = useState(1);
  const [subtotalItem, setSubtotalItem] = useState(defaultSubtotal);
  const [addToCartClicked, setAddToCartClicked] = useState(false);

  

  const onAddToCard = () => {
    setProductsInCart([
      ...productsInCart,
      { ...productVariant, quantitySelected: productCounter },
    ]);
    setAddToCartClicked(true);
    setGlobalCartCount(globalCartCount + productCounter);
  };

  const onSelection = (variation) => {
    setProductVariant(variation);
  };

  useEffect(() => {
    setSubtotalItem(productVariant.price * productCounter);
  }, [productCounter, productVariant]);

  return (
    <ViewWithHeader
      title={`Buy ${product.title}`}
      description={product.description}
      rightPanel={false}
    >
      <ProductDetails
        subtotalItem={subtotalItem}
        product={product}
        variations={variationsForThisProduct}
        setProductVariant={setProductVariant}
        onSelection={onSelection}
      >
        <ProductActionButtons
          onAddToCard={onAddToCard}
          productCounter={productCounter}
          setProductCounter={setProductCounter}
          addToCartClicked={addToCartClicked}
          stock={productVariant.stock}
        />
      </ProductDetails>
    </ViewWithHeader>
  );
}

export default ProductScreen;
