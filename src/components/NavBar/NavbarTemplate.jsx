import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavbarTemplate({ logoIconPath, theme, categories, children }) {
  return (
    <div className={`NavbarContainer NavbarContainer--${theme}`}>
      <div className="NavbarItems">
        <Link to="/">
          <div className="NavbarIcon_Container">
            <img
              className={`LogoVector LogoVector--${theme}`}
              src={logoIconPath}
            />
          </div>
        </Link>
        {categories.map((category) => (
          <Link
            key={category.path}
            className={`NavbarCategoryItem NavbarCategoryItem--${theme}`}
            to={`/category/${category.path}`}
          >
            {category.name}
          </Link>
        ))}
        <Link to="/cart">
          <div className="NavbarIcon_Container">{children}</div>
        </Link>
      </div>
    </div>
  );
}

export default NavbarTemplate;
