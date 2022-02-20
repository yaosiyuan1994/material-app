import React, { Component } from "react";
import { Box } from "@mui/system";

export default class TopTitle extends Component {
  componentDidMount() {}
  render() {
    return (
      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          flex: "1 1 0%",
          color: "white",
          fontWeight: "300",
          fontSize: "0.8rem",
          alignItems: "center",
          wordSpacing: "0.4rem",
        }}
      >
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="1"
          style={{ minWidth: "100%" }}
        >
          22% OFF SELECTED ITEMS. USE CODE OW_SINGLE AT THE CHECKOUT.
        </marquee>
        {/* <marquee
          behavior="scroll"
          direction="left"
          //   style={{ minWidth: "100%" }}
        >
          22% OFF SELECTED ITEMS. USE CODE OW_SINGLE AT THE CHECKOUT.
        </marquee> */}
      </Box>
    );
  }
}
