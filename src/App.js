import React, { Component } from "react";
import Inner from "./component/Inner";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "../src/App.css";

export default class App extends Component {
  render() {
    return (
      <div className="box">
        <Header />
        <Inner />
        <Footer />
      </div>
    );
  }
}
