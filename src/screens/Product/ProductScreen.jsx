import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ViewWithHeader from "../../components/ViewWithHeader/ViewWithHeader";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import ProductActionButtons from "../../components/ProductActionButtons/ProductActionButtons";
import { useGlobalContext } from "../../contexts/GlobalContextProvider";
import { useCartContext } from "../../contexts/CartContextProvider";
import { addProductToCart } from "../../utils/addProductToCart";
import updateCartContext from "../../utils/updateCartContext";
import NotFoundScreen from "../Messages/NotFoundScreen";

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

function ProductScreen() {
  //Params and contexts
  const { key } = useParams();
  const {
    setGlobalTheme,
    setGlobalFooterTheme,
    setGlobalCartCount,
    globalProducts,
    globalModels,
    globalCurrency,
    loadingGlobalProducts
  } = useGlobalContext();
  const { productsInCart, setProductsInCart } = useCartContext();

  // States
  const [currentProduct, setCurrentProduct] = useState({});
  const [currentModels, setCurrentModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState({});
  const [selectedModelIndex, setSelectedModelIndex] = useState(0);
  const [subtotalItem, setSubtotalItem] = useState(0);
  const [productCounter, setProductCounter] = useState(1);
  const [addToCartClicked, setAddToCartClicked] = useState(false);
  const [modelPicture, setModelPicture] = useState("");

  // Set the current product based on endpoint params
  useEffect(() => {
    setGlobalTheme("light");
    setGlobalFooterTheme("light");
    const product = globalProducts.find((product) => product.key === key);
    setCurrentProduct(product);
  }, [globalProducts]);

  // Set the available models for the current product based on product's modelsId
  useEffect(() => {
    const currentModelsId = currentProduct?.modelsId;
    const models = globalModels.find(
      (models) => models.modelsId == currentModelsId
    );
    setCurrentModels(models);

    // Default selected model
    const defaultModel = models?.payload[0] || {};
    setSelectedModel(defaultModel);
    setModelPicture(defaultModel?.pictures?.featured);
  }, [currentProduct]);

  const onAddToCard = () => {
    const productToBeAdded = {
      ...selectedModel,
      quantitySelected: productCounter,
      pid: currentProduct.pid,
      modelIndex: selectedModelIndex,
    };
    const cartUpdated = addProductToCart({ productToBeAdded, productsInCart });
    setProductsInCart(cartUpdated);
    setAddToCartClicked(true);

    // const {itemsInCart} = updateCartContext(cartUpdated)
    // setGlobalCartCount(itemsInCart);
  };

  const onSelection = (model, index) => {
    setSelectedModelIndex(index);
    setSelectedModel(model);
    setModelPicture(model?.pictures?.featured);
  };

  useEffect(() => {
    setSubtotalItem(selectedModel?.price * productCounter);
  }, [productCounter, selectedModel]);


  if (!loadingGlobalProducts && !currentProduct) {
    return (
      <NotFoundScreen
        theme="light"
        title="The product you're looking for can't be found."
      />
    );
  }

  if (!currentModels?.payload) {
    return "";
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
