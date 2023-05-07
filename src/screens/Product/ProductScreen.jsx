import React from "react";
import ViewWithHeader from "../../components/ViewWithHeader/ViewWithHeader";
import ProductDetails from "../../components/ProductDetails/ProductDetails";

function ProductScreen() {
  // !El estado productsInCartDetailed del CartContext se actualiza cuando se agrega el producto al carrito.
  // !El fetch de la información del producto se hace aqui

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
    }
  // !Esto tiene que venir de un fetch a partir del pid. tipo getVariations(pid)
  const variations= [
    {
      pid: product.pid,
      vid: 0,
      title: "iPhone 14 Pro",
      description: "128 Gb",
      price: 999,
      stock: 10,
      picture: "../../../demo/product/iphone-14/iphone-14-detail.jpg"
    },
    {
      pid: product.pid,
      vid: 1,
      title: "iPhone 14 Pro",
      description: "256 Gb",
      price: 1099,
      stock: 10,
      picture: "../../../demo/product/iphone-14/iphone-14-detail.jpg"
    },
    {
      pid: product.pid,
      vid: 2,
      title: "iPhone 14 Pro Max",
      description: "128 Gb",
      price: 1999,
      stock: 10,
      picture: "../../../demo/product/iphone-14/iphone-14-detail.jpg"
    },
    {
      pid: product.pid,
      vid: 3,
      title: "iPhone 14 Pro Max",
      description: "259 Gb",
      price: 2499,
      stock: 10,
      picture: "../../../demo/product/iphone-14/iphone-14-detail.jpg"
    },
    {
      pid: product.pid,
      vid: 3,
      title: "iPhone 14 Pro Max",
      description: "1 Tb",
      price: 3899,
      stock: 10,
      picture: "../../../demo/product/iphone-14/iphone-14-detail.jpg"
    }
  ]

  return (
    <ViewWithHeader title={`Buy ${product.title}`} description={product.description} rightPanel={false}>
      <ProductDetails product={product} variations={variations}/>
    </ViewWithHeader>
  );
}

export default ProductScreen;
