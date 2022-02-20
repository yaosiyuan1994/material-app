import React, { Component } from "react";
import { Box, Link } from "@mui/material";
import logo from "../imgas/logo.png";

export default class Logo extends Component {
  render() {
    return (
      <Box>
        <Link href="#">
          <img src={logo} alt="www.sony.jp" />
        </Link>
      </Box>
    );
  }
}
