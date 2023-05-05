import React from "react";
import "./FeaturedProduct.css";
import { Link } from "react-router-dom";
function FeaturedProductTemplate(content) {
  return (
    <div className={`Hero Hero--${content.theme}`}>
      <div className="HeroContent">
        <div className="HeaderContainer">
            <p className={`Title Title--${content.theme}`}>{content.title}</p>
            <p className={`Phrase Phrase--${content.theme}`}>{content.phrase}</p>
        </div>
        <div className="CtaContainer">
          <Link className="CtaLink" key={"primaryLink"} to={content.primaryCtaViewPath}>
            <div className="CtaLink--Text">{content.primaryCtaText}</div>
            <img
              className="CtaLink--Icon"
              src="../../../icons/chevron-right.svg"
              alt="featured content image"
            />
          </Link>
          <Link className="CtaLink" key={"secondaryLink"} to={content.secondaryCtaViewPath}>
            <div className="CtaLink--Text">{content.secondaryCtaText}</div>
            <img
              className="CtaLink--Icon"
              src="../../../icons/chevron-right.svg"
              alt="featured content image"
            />
          </Link>
        </div>
      </div>
      <div className="HeroPicture">
        <div className="HeroPictureContainer">
          <img src={content.picture} alt="featured content image" />
        </div>
      </div>
    </div>
  );
}

export default FeaturedProductTemplate;

// theme={theme}
// title={title}
// phrase={phrase}
// primaryCtaText={primaryCtaText}
// primaryCtaViewPath={primaryCtaViewPath}
// secondaryCtaText={secondaryCtaText}
// secondaryCtaViewPath={secondaryCtaViewPath}
// picture={picture}
