import React from "react";

const BoxCard = props => (
  <div className="boxCard">
    <div className="boxCard-header">{props.header}</div>
    <div className="boxCard-body">{props.children}</div>
    {props.renderFooter()}
  </div>
);

export default BoxCard;
