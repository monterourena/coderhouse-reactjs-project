import React from "react";
import ViewWithHeader from "../../components/ViewWithHeader/ViewWithHeader";
import ProductDetails from "../../components/ProductDetails/ProductDetails";

function ProductScreen() {
  const product = {
      pid: 0,
      title: "iPhone 14 Pro",
      phrase: "Pro. Beyond",
      description: "The ultimate iPhone, starting from 256 Gb storage, with M2 Max",
      basePrice: 999,
      currency: { code: "USD", symbol: "$" },
      variation: [
        {
          vid: 0,
          title: "iPhone 14 Pro",
          description: "128 Gb",
          optionPrice: 999,
          optionStock: 10,
        },
        {
          vid: 1,
          title: "iPhone 14 Pro",
          description: "256 Gb",
          optionPrice: 1099,
          optionStock: 10,
        },
        {
          vid: 2,
          title: "iPhone 14 Pro Max",
          description: "128 Gb",
          optionPrice: 1999,
          optionStock: 10,
        },
        {
          vid: 3,
          title: "iPhone 14 Pro Max",
          description: "259 Gb",
          optionPrice: 2499,
          optionStock: 10,
        },
        ,
        {
          vid: 3,
          title: "iPhone 14 Pro Max",
          description: "1 Tb",
          optionPrice: 3899,
          optionStock: 10,
        },
      ],
      productPictures: {
        featured: "../../../demo/product/iphone-14/iphone-14-detail.jpg",
        gallery: [
          "../../../demo/product/iphone-14/iphone-14-detail.jpg",
          "../../../demo/product/iphone-14/iphone-14-detail.jpg",
          "../../../demo/product/iphone-14/iphone-14-detail.jpg",
        ],
      },
    }

  return (
    <ViewWithHeader title={`Buy ${product.title}`} description={product.description}>
      <ProductDetails product={product}/>
    </ViewWithHeader>
  );
}

export default ProductScreen;
