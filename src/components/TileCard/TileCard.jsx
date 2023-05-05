import React from "react";
import "./TileCard.css";
import TileCardTemplate from "./TileCardTemplate";
import ContentCTA from "../ContentCTA/ContentCTA";

function TileCard(props) {
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
    <TileCardTemplate theme={theme} picture={picture}>
      <ContentCTA
        theme={theme}
        title={title}
        phrase={phrase}
        primaryCtaText={primaryCtaText}
        primaryCtaViewPath={primaryCtaViewPath}
        secondaryCtaText={secondaryCtaText}
        secondaryCtaViewPath={secondaryCtaViewPath}
        type={"tile"}
        LinksEnabled={true}
      />
    </TileCardTemplate>
  );
}

export default TileCard;
