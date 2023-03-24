import React from "react";
import Cartwidget from "../CartWidget/CartWidget"


export const NavBar = () => {
  return (
    <div
      className="NavBar_Container 
      flex flex-row items-center justify-between
      h-[48px] px-8 rounded-[16px] bg-background">

      <div className="NavBar_Brand w-24 flex flex-row items-center justify-start gap-2">
        <img className="Brand_Icon " src="../../../public/logo.svg" alt="ViteLogo" />
      </div>
      <div className="NavBar_Categories w-72 flex justify-around">
        <a className="NavBar_Categories--Link hover:text-primary" href="">Blog</a>
        <a className="NavBar_Categories--Link hover:text-primary" href="">Themes</a>
        <a className="NavBar_Categories--Link hover:text-primary" href="">Components</a>
        
      </div>
      <div className="NavBar_CartWidget w-24 flex flex-row items-center justify-end">
        <Cartwidget></Cartwidget>
      </div>

    </div>
  );
};
