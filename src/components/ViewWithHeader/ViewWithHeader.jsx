import React from "react";
import "./ViewWithHeader.css";
function ViewWithHeader({ children, title, description, rightPanel }) {
  return (
    <div className={`ViewWithHeader ${rightPanel && "Layout--Two"}`}>
      <div className="FirstColumn">
        <div className="ViewWithHeader--Header">
          <p className="Header--Title">{title}</p>
          <p className="Header--Description">{description}</p>
        </div>
        <div className="ViewWithHeader--View">
          <div className="View--Content">
            {rightPanel ? children[0] : children}
          </div>
        </div>
      </div>
      {rightPanel && (
        <div className="SecondColumn">
          {children[1] ? children[1] : console.error("Please add second child")}
        </div>
      )}
    </div>
  );
}

ViewWithHeader.defaultProps = {
  title: "title",
  description: "description",
  rightPanel: false,
};

export default ViewWithHeader;
