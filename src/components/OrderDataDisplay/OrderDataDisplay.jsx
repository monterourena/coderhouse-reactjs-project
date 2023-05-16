import React from "react";
import "./OrderDataDisplay.css";

function OrderDataDisplay(props) {
  const {name, lastName, orderId, email, phone} = props
  return (
    <div className="OrderDataDisplay">
      <div className="OrderDataDisplay--Cell">
        <p className="OrderData--CellTitle">Customer</p>
        <h3 className="OrderData--CellData">{name} {lastName}</h3>
      </div>
      <div className="OrderDataDisplay--Cell">
        <p className="OrderData--CellTitle">Order number</p>
        <h3 className="OrderData--CellData">{orderId}</h3>
      </div>

      <div className="OrderDataDisplay--Cell">
        <p className="OrderData--CellTitle">Email</p>
        <h3 className="OrderData--CellData">{email}</h3>
      </div>
      <div className="OrderDataDisplay--Cell">
        <p className="OrderData--CellTitle">Phone</p>
        <h3 className="OrderData--CellData">{phone}</h3>
      </div>
    </div>
  );
}

export default OrderDataDisplay;
