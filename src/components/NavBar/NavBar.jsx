import React, { useState } from "react";
import NavbarTemplate from "./NavbarTemplate.jsx";
import CartWidget from "../CartWidget/CartWidget.jsx";
import { useGlobalContext } from "../../contexts/GlobalContextProvider.jsx";

function Navbar() {

  const {globalCartCount: itemCount,globalTheme:theme} = useGlobalContext();


  const categories = [
    { name: "iPhone", path: "electronics" },
    { name: "iPad", path: "jewelery" },
    { name: "Mac", path: "men's clothing" },
    { name: "AirPods", path: "women's clothing" },
    { name: "Watch", path: "women's clothing" },
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
