import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="FooterDivider">
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
