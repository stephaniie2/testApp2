import React from "react";

// The Header creates links that can be used to navigate
// between routes.
export default () => 
  <div id="menu">
    <div id="div_1" className="menuBox swapButton">
      Menu
    </div>
    <div id="div_2" className="menuBox">
      <div className="menuSecondary">
        Menu
        <div className="menuButton home">
          <p>Home</p>
        </div>
        <div className="menuButton checkout">
          <p>Check out</p>
        </div>
        <div className="last_item menuButton logout">
          <p>Log out</p>
        </div>
      </div>

      <div className="menuLeft">
        Search
        <div className="menuItem">
          <p>Year</p>
          <div className="selectWrapper">
            <select
              className="selectBox selectBoxYear"
              name="year"
              id="cboYear"
            >
              <option>Static 2017</option>
              <option>2016</option>
              <option>2015</option>
              <option>2014</option>
              <option>2013</option>
            </select>
          </div>
        </div>
        <div className="menuItem">
          <p>Market</p>
          <div className="selectWrapper">
            <select
              className="selectBox selectBoxMarket"
              name="market"
              id="cboMarket"
            >
              <option>Static Sweden</option>
              <option>France</option>
            </select>
          </div>
        </div>
        <div className="menuItem">
          <p>Type</p>
          <div className="selectWrapper">
            <select className="selectBox" name="type" id="cboType">
              <option>Static All</option>
              <option>Catalogue</option>
              <option>Global Production</option>
              <option>IKEA FAMILY LIVE</option>
              <option>Local Production</option>
            </select>
          </div>
        </div>
        <a href="/browse">
          <div className="menuButton search" />
        </a>
      </div>
      <div className="menuRight">
        <div className="menuItem2">
          <p>Free text search</p>
          <input
            type="text"
            name="quickSearch"
            id="cboSearch"
            placeholder="Click here in order to search"
          />
        </div>
        <div
          id="freeTextSearchButton"
          className="menuButton search disabledButton"
        />
        <div id="logout" className="menuButton logout">
          <p>Log out</p>
        </div>
      </div>
    </div>
  </div>