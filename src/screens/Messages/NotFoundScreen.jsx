import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../contexts/GlobalContextProvider";
import "./NotFoundScreen.css";

function NotFoundScreen() {
  const { setGlobalTheme, setGlobalFooterTheme } = useGlobalContext();

  useEffect(() => {
    setGlobalTheme("dark");
    setGlobalFooterTheme("dark");
  }, []);

  const navigate = useNavigate();
  const handleRedirection = () => navigate("/");

  return (
    <section className="NotFoundScreen">
      <img
        className="NotFoundScreen--Logo"
        src="../../../logo/apple.svg"
        alt=""
      />
      <h1 className="NotFoundScreen--Title">
        Sorry! The page you're looking for can't be found.
      </h1>

      <button
        className="NotFoundScreen--LinkContainer"
        onClick={handleRedirection}
      >
        <a className="NotFoundScreen--Link">See all our products</a>
        <img
          className="NotFoundScreen--Chevron"
          src="../../../icons/chevron-right.svg"
          alt="featured content image"
        />
      </button>
    </section>
  );
}

export default NotFoundScreen;
