import React, { useState } from "react";
import NavbarTemplate from "./NavbarTemplate.jsx";
import CartWidget from "../CartWidget/CartWidget.jsx";
import { useGlobalContext } from "../../contexts/GlobalContextProvider.jsx";

function Navbar() {

  const {globalCartCount: itemCount,globalTheme:theme, globalCategories} = useGlobalContext();


  // const categories = [
  //   { name: "iPhone", path: "iphone" },
  //   { name: "iPad", path: "ipad" },
  //   { name: "Mac", path: "mac" },
  //   { name: "AirPods", path: "air-pods" },
  //   { name: "Watch", path: "watch" },
  // ];

  const logoIconPath = "../../../logo/apple.svg";

  const cartEmptyIconPath = "../../../../icons/cart-empty.svg"
  const cartFullIconPath = "../../../../icons/cart-full.svg"
  const cartIconPath = !!itemCount ? cartFullIconPath : cartEmptyIconPath ;

  return (
    <NavbarTemplate logoIconPath={logoIconPath} theme={theme} categories={globalCategories}>
      <CartWidget theme={theme} itemCount={itemCount} iconPath={cartIconPath}/>
    </NavbarTemplate>
  )
}

export default Navbar;
