import React, { Component } from "react";
import Header from "./component/Header";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import ClickImg from "./component/parts/ClickImg";
import "../src/App.css";

export default class App extends Component {
  render() {
    return (
      <div className="box">
        <Header />
        <Nav />
        <Footer />
        <ClickImg />
      </div>
    );
  }
}
