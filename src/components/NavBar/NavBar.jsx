import React from "react";
import Cartwidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";


export const NavBar = () => {
  return (
    <div
      className="NavBar_Container 
      flex flex-row items-center justify-between
      h-[48px] px-8 rounded-[16px] bg-background">

      <Link to="/">
        <div className="NavBar_Brand w-24 flex flex-row items-center justify-start gap-2">
          <img className="Brand_Icon " src="../../../logo.svg" alt="ViteLogo" />
        </div>
      </Link>

      <div className="NavBar_Categories w-72 flex justify-around">
        
        <Link className="NavBar_Categories--Link hover:text-primary" to="/category/electronics">Electronics</Link>
        <Link className="NavBar_Categories--Link hover:text-primary" to="/category/jewelery">Jewelry</Link>
        <Link className="NavBar_Categories--Link hover:text-primary" to="/category/men's clothing">Men</Link>
        <Link className="NavBar_Categories--Link hover:text-primary" to="/category/women's clothing">Women</Link>
        
      </div>
      <div className="NavBar_CartWidget w-24 flex flex-row items-center justify-end">
        <Cartwidget></Cartwidget>
      </div>

    </div>
  );
};
