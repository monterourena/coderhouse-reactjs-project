import React from "react";
import "./ProductDetails.css";
import ProductActionButtons from "../ProductActionButtons/ProductActionButtons";

function ProductDetails({ product, variations }) {
  const subTotalPrice = "1999";

  // !Esto tiene que venir del Global Context
  const currencySymbol = "$";

  // TODO: Mover el render a un <ProductDetailsTemplate/>
  // TODO: Pasar al componente <ProductDetailsTemplate/> un children que será un componente <ProductVariationCard/>
  // TODO: el componente <ProductVariationCard/> recibirá por props 
  // todos los valores necesarios para actualizar el estado "variationsInCartInfo" del CartContext

  return (
    <div className="ProductDetail">
      <img
        className="ProductDetail--Picture"
        src={product.productPictures.featured}
        alt="Product Details"
      />
      <div className="ProductDetail--SidePanelContainer">
        <div className="SidePanel--Header">Model. Which is best for you?</div>
        <div className="SidePanel--Variations">
          {variations.map((variation, index) => (
            <div key={index} className="ProductVariationContainer">
              <div className="ProductVariation--Details">
                <div className="ProductVariation--Title">{variation.title}</div>
                <div className="ProductVariation--Description">
                  {variation.description}
                </div>
              </div>
              <div className="ProductVariation--Price">{`${currencySymbol}${variation.price}`}</div>
            </div>
          ))}
        </div>
        <div className="SidePanel--TotalDetails">
          <p className="TotalDetails--SubtotalTitle">Subtotal</p>
          <p className="TotalDetails--SubtotalValue">{`${currencySymbol}${subTotalPrice}`}</p>
        </div>
        {/* ESTO SE TIENE QUE REEMPLAZAR POR UN COMPONENTE */}
        <ProductActionButtons />
      </div>
    </div>
  );
}

export default ProductDetails;
