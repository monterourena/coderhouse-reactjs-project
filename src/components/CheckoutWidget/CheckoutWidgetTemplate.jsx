import React from 'react'

function CheckoutWidgetTemplate({ subtotal, shipping, estimatedTax, currency, total}) {
  return (
    <div className="CheckoutWidget">
      <div className="WidgetContainer">
        <div className="GradientCard">
          <img className="GradientCard--Icon" src="../../../logo/apple.svg" alt="" />
          <div className="GradientCard--Subtitle">Privacy and security</div>
          <div className="GradientCard--Title">Reserve now.<br/> Pay later</div>
        </div>
        <div className="ContentContainer">
          <div className="ContentTable">
            <div className="ContentTable--Row">
              <div className="ContentTable--Column">Subtotal</div>
              <div className="ContentTable--Column">{`${currency.symbol}${subtotal}`}</div>
            </div>
            <div className="ContentTable--Row">
              <div className="ContentTable--Column">Shipping</div>
              <div className="ContentTable--Column">{shipping}</div>
            </div>
            <div className="ContentTable--Row">
              <div className="ContentTable--Column">Estimated tax</div>
              <div className="ContentTable--Column">{`${currency.symbol}${estimatedTax}`}</div>
            </div>
          </div>
          <div className="ContentAmount">
            <div>Total</div>
            <div>{`${currency.symbol}${total}`}</div>
          </div>
          <button className="CheckoutButton">Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutWidgetTemplate