import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../contexts/GlobalContextProvider";
import "./NotFoundScreen.css";

function NotFoundScreen({theme, title, ctaMessage}) {
  const { setGlobalTheme, setGlobalFooterTheme } = useGlobalContext();

  useEffect(() => {
    setGlobalTheme(theme);
    setGlobalFooterTheme(theme);
  }, []);

  const navigate = useNavigate();
  const handleRedirection = () => navigate("/");

  return (
    <section className={`NotFoundScreen bg--${theme}`}>
      <img
        className={`NotFoundScreen--Logo color--${theme}`}
        src="../../../logo/apple.svg"
        alt=""
      />
      <h1 className={`NotFoundScreen--Title title--${theme}`}>
        {title}
      </h1>

      <button
        className="NotFoundScreen--LinkContainer"
        onClick={handleRedirection}
      >
        <a className="NotFoundScreen--Link">{ctaMessage}</a>
        <img
          className="NotFoundScreen--Chevron"
          src="../../../icons/chevron-right.svg"
          alt="featured content image"
        />
      </button>
    </section>
  );
}

NotFoundScreen.defaultProps={
  theme:"light",
  title: "The page you're looking for can't be found.",
  ctaMessage:"See all our products"
}

export default NotFoundScreen;
