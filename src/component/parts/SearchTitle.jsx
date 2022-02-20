import React, { Component } from "react";

export default class SearchTitle extends Component {
  state = {
    className: "searchText",
    content: "yao",
  };
  onMouseLeave() {
    this.setState({
      content: "Hello,how can I help you today?",
    });
  }
  onMouseEnter() {
    this.setState({
      content: "Search Off-White",
    });
    // this.setState({
    //   content: "Search Off-White",
    // });
    // if (className === "searchText") {
    //   return this.setState({
    //     content: "Search Off-White",
    //   });
    // }
  }

  componentDidMount() {
    // window.addEventListener("mouseenter", this.onMouseEnter);
    // window.addEventListener("mouseleave", this.onMouseLeave);
  }

  render() {
    return this.props.render(this.state);
  }
}
