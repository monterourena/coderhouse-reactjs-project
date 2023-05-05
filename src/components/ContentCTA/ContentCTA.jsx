import React from "react";
import { Link } from "react-router-dom";

import "./ContentCTA.css";

function ContentCTA(content) {
  return (
    <div className="ContentCTA">
      <div className="HeaderContainer">
        <p className={`Title--${content.type} Title--${content.theme}`}>
          {content.title}
        </p>
        <p className={`Phrase--${content.type} Phrase--${content.theme}`}>
          {content.phrase}
        </p>
      </div>
      { !!content.LinksEnabled &&
        <div className="CtaContainer">
          <Link
            className="CtaLink"
            key={"primaryLink"}
            to={content.primaryCtaViewPath}
          >
            <div className={`CtaLink--Text--${content.type}`}>
              {content.primaryCtaText}
            </div>
            <img
              className={`CtaLink--Icon--${content.type}`}
              src="../../../icons/chevron-right.svg"
              alt="featured content image"
            />
          </Link>
          <Link
            className="CtaLink"
            key={"secondaryLink"}
            to={content.secondaryCtaViewPath}
          >
            <div className={`CtaLink--Text--${content.type}`}>
              {content.secondaryCtaText}
            </div>
            <img
              className={`CtaLink--Icon--${content.type}`}
              src="../../../icons/chevron-right.svg"
              alt="featured content image"
            />
          </Link>
        </div>
      }
    </div>
  );
}

ContentCTA.defaultProps = {
  theme: "dark",
  primaryCtaText: "Learn more",
  secondaryCtaText: "Buy",
  LinksEnabled: true
};

export default ContentCTA;
