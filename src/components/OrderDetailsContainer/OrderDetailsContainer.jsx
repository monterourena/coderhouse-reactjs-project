import React from "react";
import "./OrderDetailsContainer.css";
function OrderDetailsContainer({children, headerTitle, headerDate}) {
  return (
    <div className="OrderDetailsContainer">
      <header className="Orderheader">
        <div className="OrderHeader--LeftColumn">
          <img
            className="OrderHeaderLogo"
            src="../../../logo/apple.svg"
            alt=""
          />
          <h1 className="OrderHeaderTitle">{headerTitle}</h1>
        </div>
        <h2 className="OrderHeader--RightColumn">{headerDate}</h2>
      </header>
      <div className="OrderDetailsBodyContainer">
        {children}
      </div>
    </div>
  );
}

export default OrderDetailsContainer;
