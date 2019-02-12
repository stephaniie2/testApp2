import React from "react";
import BoxCard from "../components/BoxCard";
import BrowseCard from "../components/BrowseCard";
import "./turnjsStyle.css"
import "./dragulaStyle.css"
import "./sliderStyle.css"

export default class Browse extends React.Component {

  loadScript(url) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = url;
      document.head.appendChild(script);
      script.onload = () => resolve();
    });
  }

  async componentDidMount() {
    await this.loadScript("/scripts/IML/engine.js");
    await this.loadScript("/scripts/IML/IML.js");
    await this.loadScript("/scripts/main/main_outside_home.js");
    await this.loadScript("/scripts/turnjs/turn.js");
    await this.loadScript("/scripts/turnjs/server-call.js");
    await this.loadScript("/scripts/dragula/dragula.js");
    await this.loadScript("/scripts/dragula/load.js");
    await this.loadScript("/scripts/dragula/server-call.js");
    await this.loadScript("/scripts/views/browse.js");
  }

render() {
  return (
  <div id="view_browse">
    <BrowseCard className="leftMain" header="News for your market">
    <div className="book" id="book"></div>
    </BrowseCard>
    <div className="rightMain">
      <BoxCard header="Spread Images"renderFooter={() => (
        <div className="boxCard-footer">
              <div className="boxButton img_add_all">
              <p>Add all</p>
            </div>
          </div>
            )}>
            <div id='dragula_left' className='dragula_container'>
              </div>


      </BoxCard>


      <BoxCard header="Shopping Cart" renderFooter={() => (
        <div className="boxCard-footer">
              <div className="boxButton img_remove_all">
              <p>Remove all</p>
            </div>
            <div className="boxButton img_checkout">
              <a href="index_checkout.html">
                <p>Check out</p>
              </a>
            </div>
            </div>
            )}>
            <div id='dragula_right' className='dragula_container'>
            <div><img alt="" src="assets/img/GridItems/05.png"></img>
                  <p>PH155189</p>
                </div>
                <div><img alt="" src="assets/img/GridItems/06.png"></img>
                  <p>PH155189</p>
                </div>

            </div>
            <div id='sortable' className='dragula_container'></div>
      </BoxCard>
    </div>
  </div>
)};
}
