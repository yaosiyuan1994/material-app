import React, { Component } from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import "../src/App.css";

export default class App extends Component {
  render() {
    return (
      <div className="box">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
