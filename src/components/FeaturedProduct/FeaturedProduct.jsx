import React from "react";
import FeaturedProductTemplate from "./FeaturedProductTemplate.jsx";
import ContentCTA from "../ContentCTA/ContentCTA.jsx";

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
    linksEnabled
  } = props;

  return (
    <FeaturedProductTemplate theme={theme} picture={picture}>
      <ContentCTA
        theme={theme}
        title={title}
        phrase={phrase}
        primaryCtaText={primaryCtaText}
        primaryCtaViewPath={primaryCtaViewPath}
        secondaryCtaText={secondaryCtaText}
        secondaryCtaViewPath={secondaryCtaViewPath}
        type={"featured"}
        linksEnabled = {linksEnabled}
      />
    </FeaturedProductTemplate>
  );
}

FeaturedProduct.defaultProps = {
  theme: "dark",
};

export default FeaturedProduct;
