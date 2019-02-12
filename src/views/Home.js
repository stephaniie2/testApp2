import React from "react";
import BoxCard from "../components/BoxCard";
import "./coverflowStyle.css";
import $ from "jquery";

var userMarketArray = [];
var allMarketArray = [];

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bottom: "",
      isLoading: true,
      contacts: []
    };
    this.startCoverflow = this.startCoverflow.bind(this);
  }

  infoCoverflow() {
    var m3url = "http://imagehousepictures.inter-ikea.com";
    var m3 = window.IML;
    m3._path = m3url + "/dwr";
    //var log = console.log;

    //log("fetch coverFlow Information");
    m3.findMostRelevantPublications(10, relevantPub);
    function relevantPub(relPub) {
        //log(relPub);
        userMarketArray = relPub.newestPubsForThisUsersMarkets;
        allMarketArray = relPub.newestPubsForAllMarkets;
        //log(userMarketArray);
        // Set Default Text for userMarket also in Popup
        $("#userMarketText, #userMarketPopupHeading").text(userMarketArray[0].name);

        // Sets Default Values in userMarket Popup expect Image
        $("#userMarketPopupMarket").text(userMarketArray[0].market);
        $("#userMarketPopupLanguage").text(userMarketArray[0].language);
        $("#userMarketPopupYear").text(userMarketArray[0].year);
        $("#userMarketPopupType").text(userMarketArray[0].type);

        // Set Default Text for allMarket and userMarket also in Popup
        $("#allMarketText, #allMarketPopupHeading").text(allMarketArray[0].name);

        // Sets Default Values in allMarket Popup expect Image
        $("#allMarketPopupMarket").text(allMarketArray[0].market);
        $("#allMarketPopupLanguage").text(allMarketArray[0].language);
        $("#allMarketPopupYear").text(allMarketArray[0].year);
        $("#allMarketPopupType").text(allMarketArray[0].type);

        // userMarketArray.forEach(function(element) {
        //     coverflowName.push(element.name);
        // });
    }
}

  startCoverflow(imlSource, coverflowObject, domObject) {
    var m3url = "http://imagehousepictures.inter-ikea.com";
    var m3 = window.IML;
    m3._path = m3url + "/dwr";

    this.infoCoverflow();

    return new Promise(function(resolve) {
      function relevantPub(relPub) {
        return resolve({
          IMLarray: relPub[imlSource]
        });
      }
      return m3.findMostRelevantPublications(10, relevantPub);
    })
      .then(({ IMLarray }) => IMLarray.map(element => element.assetId))
      .then(MarketFrontPage =>
        Promise.all(
          MarketFrontPage.map(element => {
            return new Promise(resolve => {
              m3.getPagesWithPageNumbers(element, [1], getPages);
              function getPages(PublicationPages) {
                return resolve(
                  PublicationPages[0].largeImageURL
                    .split("../")
                    .join(m3url + "/")
                );
              }
            });
          })
        )
      )
      .then(IMLImages => {
        // Array to JSON
        var playlist = IMLImages.map(image => ({ image }));

        // Set Default Image in userMarket Popup
        $("#userMarketPopupImage").attr("src",playlist[0].image);

        //Use created JSON in HTML
        window[coverflowObject](domObject)
          .setup({
            //mode: "flash",
            flash: "coverflow.swf",
            width: "100%",
            playlist: playlist,
            height: 250,
            y: -20,
            backgroundcolor: "666666",
            coverwidth: 120,
            coverheight: 150,
            fixedsize: true,
            textoffset: 50,
            textstyle:
              ".coverflow-text{color:#000000;text-align:center;font-family:Arial Rounded MT Bold,Arial;} .coverflow-text h1{font-size:14px;font-family:inherit;font-weight:normal;line-height:21px;} .coverflow-text h2{font-size:12px;font-family:inherit;font-weight:normal;} .coverflow-text a{color:#0000EE;}"
          })
          .on("ready", () => {})
          .on("focus", this.onFocus1)
          .on("click", this.onClick1)
      });
  }

  onFocus1 = (index, link) => {
    document.getElementById('cf-focus').value = index;
    // Sets Text in userMarket Container.
    $("#userMarketText, #userMarketPopupHeading").text(userMarketArray[index].name);
    // Sets Text in userMarket Popup
    $("#userMarketPopupMarket").text(userMarketArray[index].market);
    $("#userMarketPopupLanguage").text(userMarketArray[index].language);
    $("#userMarketPopupYear").text(userMarketArray[index].year);
    $("#userMarketPopupType").text(userMarketArray[index].type);
    //$("#userMarketPopupImage").css('background-image', 'url(' + playlist[index].image + ')');
    //$("#userMarketPopupImage").attr("src",playlist[index].image);
  };

  onClick1 = (index, link) => {
    document.getElementById("cf-click").value = index;
  };

  loadScript(url) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = url;
      document.head.appendChild(script);
      script.onload = () => resolve();
    });
  }

  async componentDidMount() {
    await this.loadScript("/scripts/coverflow/server-call.js");
    await this.loadScript("/scripts/IML/engine.js");
    await this.loadScript("/scripts/IML/IML.js");
      await this.loadScript("/scripts/main/_main.js");
  await this.loadScript("/scripts/coverflow/main.js");
  await this.loadScript("/scripts/coverflow/main2.js");
    await this.loadScript("/scripts/views/index.js");
  }

  render() {
    return (
      <div id="view_home">
        <BoxCard header="" id='welcome' renderFooter={() => (
          <div></div>
            )}>
            Welcome Stephanie Hallberg
        </BoxCard>
        <BoxCard header="News for your market" renderFooter={() => (
              <div id="userMarketText" className="bottom">
              </div>
            )}>

              <div id="userMarketPopup" className="player_controls clearfix ">
                          <p id="userMarketPopupHeading" className="heading"></p>
                          <img alt="" id="userMarketPopupImage" className="float_left image" src=""></img>
                          <div className="info">
                              <p>Market: <span id="userMarketPopupMarket"></span></p>
                              <p>Language: <span id="userMarketPopupLanguage"></span></p>
                              <p>Year: <span id="userMarketPopupYear"></span></p>
                              <p> Type: <span id="userMarketPopupType"></span></p>
                          </div>
                      </div>

                <div id="player"></div>
                <div className="apibar">
                  <a href="/some/valid/uri" className="apibar-button">
                    Previous
                  </a>
                  <a href="/some/valid/uri" className="apibar-button">
                    Next
                  </a>
                  <a href="/some/valid/uri" className="apibar-button">
                    To <input id="cf-val" type="text" size="1" maxLength="3" />
                  </a>
                  <a href="/some/valid/uri" className="apibar-button">
                    Focused{" "}
                    <input
                      id="cf-focus"
                      type="text"
                      size="1"
                      maxLength="3"
                      disabled
                    />
                  </a>
                  <a href="/some/valid/uri" className="apibar-button">
                    Clicked{" "}
                    <input
                      id="cf-click"
                      type="text"
                      size="1"
                      maxLength="3"
                      disabled
                    />
                  </a>
                </div>
        </BoxCard>
        <BoxCard header="News for all market" renderFooter={() => (
          <div id="allMarketText" className="bottom">
          </div>
        )}>

<div id="allMarketPopup" className="player_controls clearfix">
                    <p id="allMarketPopupHeading" className="heading"></p>
                    <img id="allMarketPopupImage" className="float_left image" src=""></img>
                    <div className="info">
                        <p>Market: <span id="allMarketPopupMarket"></span></p>
                        <p>Language: <span id="allMarketPopupLanguage"></span></p>
                        <p>Year: <span id="allMarketPopupYear"></span></p>
                        <p> Type: <span id="allMarketPopupType"></span></p>
                    </div>
                </div>

          <div id="player2"></div>
          <div className="apibar">
                  <a href="/some/valid/uri" className="apibar-button">
                    Previous
                  </a>
                  <a href="/some/valid/uri" className="apibar-button">
                    Next
                  </a>
                  <a href="/some/valid/uri" className="apibar-button">
                    To <input id="cf-val2" type="text" size="1" maxLength="3" />
                  </a>
                  <a href="/some/valid/uri" className="apibar-button">
                    Focused{" "}
                    <input
                      id="cf-focus2"
                      type="text"
                      size="1"
                      maxLength="3"
                      disabled
                    />
                  </a>
                  <a href="/some/valid/uri" className="apibar-button">
                    Clicked{" "}
                    <input
                      id="cf-click2"
                      type="text"
                      size="1"
                      maxLength="3"
                      disabled
                    />
                  </a>
                </div>
          </BoxCard>
      </div>
    );
  }
}
