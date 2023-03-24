import React from "react";

const Cartwidget = () => {
  return (
    <div>
      {" "}
      <div className="CartWidget__Container relative">
        <img
          className="CartWidget__ h-[30px]"
          src="../../../public/cart-icon.svg"
          alt="ViteLogo"
        />
        <div className="CartWidget__Number text-[12px] absolute top-0 right-[7px] font-bold text-primary">
          2
        </div>
      </div>
    </div>
  );
};

export default Cartwidget;
