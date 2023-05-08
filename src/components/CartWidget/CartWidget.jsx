import React from "react";
import "./CartWidget.css"

const CartWidget = ({iconPath, itemCount, theme}) => {

  

  return (
      <div className="CartWidgetContainer relative">
        <img
          className={`CartWidgetIcon CartWidgetIcon--${theme}`}
          src={iconPath}
          alt="ViteLogo"
        />
        <div className={`CartWidgetNumber CartWidgetNumber--${theme}`}>
          {!!itemCount && itemCount}
        </div>
      </div>
  );
};

export default CartWidget;
