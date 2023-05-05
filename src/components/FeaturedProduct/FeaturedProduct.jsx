import React from "react";
import FeaturedProductTemplate from "./FeaturedProductTemplate.jsx";

function FeaturedProduct(props) {
  const {
    theme,
    title,
    phrase,
    primaryCtaText,
    primaryCtaViewPath,
    secondaryCtaText,
    secondaryCtaViewPath,
    picture,
  } = props;

  return (
    <FeaturedProductTemplate
      theme={theme}
      title={title}
      phrase={phrase}
      primaryCtaText={primaryCtaText}
      primaryCtaViewPath={primaryCtaViewPath}
      secondaryCtaText={secondaryCtaText}
      secondaryCtaViewPath={secondaryCtaViewPath}
      picture={picture}
    />
  );
}

FeaturedProduct.defaultProps = {
  theme: "dark",
  primaryCtaText: "Learn more",
  secondaryCtaText: "Buy",
};

export default FeaturedProduct;
