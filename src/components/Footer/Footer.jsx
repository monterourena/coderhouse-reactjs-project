import React from "react";
import "./Footer.css";
import { useGlobalContext } from "../../contexts/GlobalContextProvider";

function Footer() {
  const {globalFooterTheme} = useGlobalContext()
  return (
    <div className={`Footer Footer--${globalFooterTheme}`}>
      <div className={`FooterDivider FooterDivider--${globalFooterTheme}`}>
        <div className="FooterContainer">
          <div className="Footer--Copy">
            Copyright © 2023 David Montero. All rights reserved.
          </div>
          <div className="Footer--Links">
            Privacy | Policy | Terms of Use | Sales and Refunds | Legal | Site
            Map
          </div>
          <div className="Footer--Country">Costa Rica</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
