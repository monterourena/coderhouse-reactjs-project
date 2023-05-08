import React, { useEffect, useState } from "react";
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
  useEffect(() => {
    setGlobalTheme("light");
  }, []);

  // The default selection is the first option we get for this product
  const defaultSelection = variationsForThisProduct[0];
  const defaultProductVariant = {
    pid: defaultSelection.pid,
    vid: defaultSelection.vid,
  };
  const defaultSubtotal = defaultSelection.price

  const { setGlobalTheme } = useGlobalContext();
  const { productsInCart, setProductsInCart } = useCartContext();
  const [productVariant, setProductVariant] = useState(defaultProductVariant);
  const [productCounter, setProductCounter] = useState(1);
  const [subtotalItem, setSubtotalItem] = useState(defaultSubtotal);
  const [addToCartClicked, setAddToCartClicked] = useState(false)

  // !Product se obtiene a partir de un fetch a Firebase usando el pid del parametro de la URL
  // !una vez obtenido el pid se hace un fetch a Firebase para que pase la lista de variaciones disponibles para ese pid

  const onAddToCard = () => {
    setProductsInCart([...productsInCart, { ...productVariant, quantitySelected: productCounter}]);
    setAddToCartClicked(true)
  };

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
        setSubtotalItem={setSubtotalItem}
      >
        <ProductActionButtons
          onAddToCard={onAddToCard}
          productCounter={productCounter}
          setProductCounter={setProductCounter}
          addToCartClicked={addToCartClicked}
        />
      </ProductDetails>
    </ViewWithHeader>
  );
}

export default ProductScreen;
