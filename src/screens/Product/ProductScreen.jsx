import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  
  //Params and contexts
  const { key } = useParams();
  const {
    setGlobalTheme,
    globalCartCount,
    setGlobalCartCount,
    globalProducts,
    globalModels,
    globalCurrency,
  } = useGlobalContext();
  const { productsInCart, setProductsInCart } = useCartContext();

  // States
  const [currentProduct, setCurrentProduct] = useState({});
  const [currentModels, setCurrentModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState({});
  const [selectedModelIndex, setSelectedModelIndex] = useState(0)
  const [subtotalItem, setSubtotalItem] = useState(0);
  const [productCounter, setProductCounter] = useState(1);
  const [addToCartClicked, setAddToCartClicked] = useState(false);
  const [modelPicture, setModelPicture] = useState("")


  // Set the current product based on endpoint params
  useEffect(() => {
    setGlobalTheme("light");
    const product = globalProducts.find((product) => product.key === key)
    setCurrentProduct(product);
  }, [globalProducts]);


  // Set the available models for the current product based on product's modelsId
  useEffect(() => {
    const currentModelsId = currentProduct?.modelsId;
    const models = (globalModels.find((models) => models.modelsId == currentModelsId))
    setCurrentModels(models);

    // Default selected model
    const defaultModel = models?.payload[0] || {}
    setSelectedModel(defaultModel)
    setModelPicture(defaultModel?.pictures?.featured)
  }, [currentProduct]);
  

  const onAddToCard = () => {
    setProductsInCart([
      ...productsInCart,
      { ...selectedModel, quantitySelected: productCounter, pid:currentProduct.pid, modelIndex:selectedModelIndex },
    ]);
    setAddToCartClicked(true);
    setGlobalCartCount(globalCartCount + productCounter);
  };

  const onSelection = (model,index) => {
    setSelectedModelIndex(index)
    setSelectedModel(model);
    setModelPicture(model?.pictures?.featured)
  };

  useEffect(() => {
    setSubtotalItem(selectedModel?.price * productCounter);
  }, [productCounter, selectedModel]);

  if(!currentModels?.payload){
    return ""
  }
  
  return (
    <ViewWithHeader
      title={`Buy ${currentProduct.title}`}
      description={currentProduct.description}
      rightPanel={false}
    >
      <ProductDetails
        subtotalItem={subtotalItem}
        product={product}
        models={currentModels.payload}
        setSelectedModel={setSelectedModel}
        onSelection={onSelection}
        selectedModelIndex={selectedModelIndex}
        globalCurrency={globalCurrency}
        picture={modelPicture}
      >
        <ProductActionButtons
          onAddToCard={onAddToCard}
          productCounter={productCounter}
          setProductCounter={setProductCounter}
          addToCartClicked={addToCartClicked}
          stock={selectedModel.stock}
        />
      </ProductDetails>
    </ViewWithHeader>
  );
}

export default ProductScreen;
