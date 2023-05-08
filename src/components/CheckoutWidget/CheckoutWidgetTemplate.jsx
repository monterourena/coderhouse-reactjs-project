import React from "react";
import { useForm } from "react-hook-form";

function CheckoutWidgetTemplate(props) {
  const {
    subtotal,
    shipping,
    estimatedTax,
    currency,
    total,
    onClickCheckout,
    onClickConfirm,
    isCheckout,
    globalCartCount
  } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const onSubmit = (data) => {
    onClickConfirm(data);
  };
  const emailRegexPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const phoneRegexPattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;

  return (
    <div className="CheckoutWidget">
      <div className="WidgetContainer">
        {/* ----------- GRADIENT CARD -----------*/}
        <div className={`GradientCard ${!isCheckout && "GradientCard--sm"}`}>
          <img
            className="GradientCard--Icon"
            src="../../../logo/apple.svg"
            alt=""
          />
          {isCheckout &&
            ((
              <div className="GradientCard--Subtitle">Privacy and security</div>
            ),
            (
              <div className="GradientCard--Title">
                Reserve now.
                <br /> Pay later
              </div>
            ))}
        </div>
        <div className="ContentContainer">
          {/* ----------- SUMMARY TABLE -----------*/}
          {isCheckout && (
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
          )}

          {/* ----------- FORM -----------*/}
          {!isCheckout && (
            <div className="ConfirmationFormContainer">
              <p className="Confirmation--Title">
                Please confirm your personal information to proceed.
              </p>

              <form
                id="ConfirmationForm"
                className="ConfirmationForm"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="InputFieldContainer">
                  <label className="InputTitle" htmlFor="NameInput">
                    Name
                  </label>
                  <input
                    className="InputField"
                    type="text"
                    id="NameInput"
                    placeholder="John"
                    {...register("inputName", { required: true })}
                  />
                </div>
                <div className="InputFieldContainer">
                  <label className="InputTitle" htmlFor="LastNameInput">
                    Last name
                  </label>
                  <input
                    className="InputField"
                    type="text"
                    id="LastNameInput"
                    placeholder="Doe"
                    {...register("inputLastName", { required: true })}
                  />
                </div>
                <div className="InputFieldContainer">
                  <label className="InputTitle" htmlFor="EmailInput">
                    Email
                  </label>
                  <input
                    className="InputField"
                    type="text"
                    id="EmailInput"
                    placeholder="johndoe@email.com"
                    {...register("inputEmail", {
                      required: true,
                      pattern: emailRegexPattern,
                    })}
                  />
                  {errors.inputEmail?.type === "pattern" && (
                    <p className="ErrorMessage">Invalid email address</p>
                  )}
                </div>
                <div className="InputFieldContainer">
                  <label
                    className="InputTitle"
                    htmlFor="EmailConfirmationInput"
                  >
                    Email confirmation
                  </label>
                  <input
                    className="InputField"
                    type="text"
                    id="EmailConfirmationInput"
                    placeholder="johndoe@email.com"
                    {...register("inputEmailConfirmation", {
                      required: true,
                      pattern: emailRegexPattern,
                      validate: () =>
                        getValues("inputEmail") ===
                        getValues("inputEmailConfirmation"),
                    })}
                  />
                  {errors.inputEmailConfirmation?.type === "validate" && (
                    <p className="ErrorMessage">Email fields must match</p>
                  )}
                  {errors.inputEmailConfirmation?.type === "pattern" && (
                    <p className="ErrorMessage">Invalid email address</p>
                  )}
                </div>
                <div className="InputFieldContainer">
                  <label className="InputTitle" htmlFor="PhoneInput">
                    Phone number
                  </label>
                  <input
                    className="InputField"
                    type="text"
                    id="PhoneInput"
                    placeholder="+50685545211"
                    {...register("inputPhone", {
                      required: true,
                      pattern: phoneRegexPattern,
                      min: 7,
                    })}
                  />
                  {errors.inputPhone?.type === "pattern" && (
                    <p className="ErrorMessage">Invalid phone number</p>
                  )}
                </div>
              </form>
            </div>
          )}

          {/* ----------- AMOUNT AND BUTTON -----------*/}
          <div className="ContentAmount">
            <div>Total</div>
            <div>{`${currency.symbol}${total}`}</div>
          </div>
          {isCheckout && <button onClick={onClickCheckout} className={`CheckoutButton ${!globalCartCount?"CheckoutButton--Disabled" : ""}`}>Checkout</button>}
          {!isCheckout && (
            <button
              className="CheckoutButton"
              type="submit"
              form="ConfirmationForm"
            >
              Confirm
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CheckoutWidgetTemplate;
