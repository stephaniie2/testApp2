import React from "react";

const BrowseCard = props => (
  <div className="boxCard leftMain">
    <div className="boxCard-header">{props.header}</div>
    <div className="boxCard-body">{props.children}</div>
    <div className="boxCard-footer">
          <button id="prevBtn" title="Previous Page" className="menuButton controls_previousButton"></button>
          <div className="menuButton controls_zoomLeftPage" title="Zoom Left Page"></div>
          <input type="number" step="2" id="pageFld" min="1" />
          <div id="slider-bar" className="turnjs-slider">
            <div id="slider"></div>
          </div>
          <div className="menuButton controls_zoomRightPage" title="Zoom Right Page"></div>
          <button id="nextBtn" title="Next Page" className="menuButton controls_nextButton"></button>
        </div>
  </div>
);

export default BrowseCard;
