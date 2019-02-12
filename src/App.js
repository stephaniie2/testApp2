import React from "react";
import "./styles/_main.scss";

import Main from "./Router";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Popups from "./shared/Popups";

export default class App extends React.Component {

loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
    script.onload = () => resolve();
  });
}

async componentDidMount() {
  await this.loadScript("/scripts/views/menu.js");
  await this.loadScript("/scripts/main/search.js");
  await this.loadScript("/scripts/main/usermarket.js");
await this.loadScript("/scripts/main/loadConfig.js");
await this.loadScript("/scripts/main/login.js");
}





render() {
  return (
    <div className="app">
    <div id="header">
        <p>Media Library</p>
    </div>
      <Header />
      <Main />
      <Footer />
      <Popups />
    </div>
  );
}
}
