
import ProductInCartTemplate from "./ProductInCartTemplate";

function ProductInCart({ details, currency, quantitySelected }) {
  const optionsList = Array.from(Array(details.stock).keys());
  const selectorChange = (event) => {
    console.log({
      pid: details.pid,
      vid: details.vid,
      newValue: event.target.value,
    });
  };
  return (
    <ProductInCartTemplate
      details={details}
      currency={currency}
      quantitySelected={quantitySelected}
      onChange={selectorChange}
      optionsList={optionsList}
    />
  );
}

export default ProductInCart;

// {
//   pid: 4,
//   vid: 2,
//   price: 2999,
//   stock: 10,
//   title: "iPad Air",
//   description: "128 GB",
//   picture: "../../../demo/product/iphone-14/iphone-14-detail.jpg",
// },
