import React, { Component } from "react";
import { AppBar, Box, Typography, Toolbar, Link, Paper } from "@mui/material";
import Logo from "./Logo";

export default class Header extends Component {
  render() {
    return (
      // <Box sx={{ display: 'flex',
      //           '& > :not(style)': {
      //               width:1000,
      //               height: 70,
      //               backgroundColor:'black'
      //             },
      //         }}>
      // <Paper elevation={6}>
      //     <Logo/>
      // </Paper>
      // </Box>
      <>
        <AppBar
          position="static"
          style={{ background: "black", height: "70px" }}
        >
          <Toolbar>
            {/* <Typography variant="h4" component="div"> */}
            <Logo />
            {/* </Typography> */}
          </Toolbar>
        </AppBar>
      </>
    );
  }
}
