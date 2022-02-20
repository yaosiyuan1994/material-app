import React, { Component } from "react";
import { Box } from "@mui/system";
import Bgimg from "./Imgs/off-white.jpg";

export default class Img extends Component {
  render() {
    return (
      <Box>
        <img
          src={Bgimg}
          alt="I Support All Forms Of Love"
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "auto",
          }}
        />
      </Box>
    );
  }
}
