import React, { useState } from "react";
import NavbarTemplate from "./NavbarTemplate.jsx";
import CartWidget from "../CartWidget/CartWidget.jsx";
import { useGlobalContext } from "../../contexts/GlobalContextProvider.jsx";

function Navbar() {

  const {globalCartCount: itemCount,globalTheme:theme} = useGlobalContext();


  const categories = [
    { name: "Electronics", path: "electronics" },
    { name: "Jewelry", path: "jewelery" },
    { name: "Men", path: "men's clothing" },
    { name: "Women", path: "women's clothing" },
  ];

  const logoIconPath = "../../../logo/apple.svg";

  const cartEmptyIconPath = "../../../../icons/cart-empty.svg"
  const cartFullIconPath = "../../../../icons/cart-full.svg"
  const cartIconPath = !!itemCount ? cartFullIconPath : cartEmptyIconPath ;

  return (
    <NavbarTemplate logoIconPath={logoIconPath} theme={theme} categories={categories}>
      <CartWidget theme={theme} itemCount={itemCount} iconPath={cartIconPath}/>
    </NavbarTemplate>
  )
}

export default Navbar;
