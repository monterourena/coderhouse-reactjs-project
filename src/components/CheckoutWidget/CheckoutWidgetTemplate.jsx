import React from "react";

function CheckoutWidgetTemplate(props) {
  const {
    subtotal,
    shipping,
    estimatedTax,
    currency,
    total,
    onClick,
    isCheckout,
  } = props;

  return (
    <div className="CheckoutWidget">
      <div className="WidgetContainer">
        <div className={`GradientCard ${!isCheckout && "GradientCard--sm"}`}>
          <img
            className="GradientCard--Icon"
            src="../../../logo/apple.svg"
            alt=""
          />
          {isCheckout &&
            ((<div className="GradientCard--Subtitle">Privacy and security</div>),
            (<div className="GradientCard--Title">Reserve now.<br /> Pay later</div>)
            )}
        </div>
        <div className="ContentContainer">
          { isCheckout &&
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
          }
          {!isCheckout &&
            <div className="ConfirmationFormContainer">
              <p className="Confirmation--Title">Please confirm your personal information to proceed.</p>
              <form className="ConfirmationForm" action="">
                <div className="InputFieldContainer">
                  <label className="InputTitle" htmlFor="NameInput">Name</label>
                  <input className="InputField" type="text" name="" id="NameInput" placeholder="John"/>
                </div>
                <div className="InputFieldContainer">
                  <label className="InputTitle" htmlFor="LastNameInput">Last name</label>
                  <input className="InputField" type="text" name="" id="LastNameInput" placeholder="John"/>
                </div>
                <div className="InputFieldContainer">
                  <label className="InputTitle" htmlFor="EmailInput">Email</label>
                  <input className="InputField" type="text" name="" id="EmailInput" placeholder="John"/>
                </div>
                <div className="InputFieldContainer">
                  <label className="InputTitle" htmlFor="EmailConfirmationInput">Email confirmation</label>
                  <input className="InputField" type="text" name="" id="EmailConfirmationInput" placeholder="John"/>
                </div>
                <div className="InputFieldContainer">
                  <label className="InputTitle" htmlFor="PhoneInput">Phone number</label>
                  <input className="InputField" type="text" name="" id="PhoneInput" placeholder="John"/>
                </div>
              </form>
            </div>
          }

          <div className="ContentAmount">
            <div>Total</div>
            <div>{`${currency.symbol}${total}`}</div>
          </div>
          <button className="CheckoutButton">
            {isCheckout ? "Checkout" : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutWidgetTemplate;
