import React, { Component } from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import PS5 from "./imgas/ps5.png";
import Img from "../parts/Img";
import TabTitle from "../parts/TabTitle";

export default class Ps5 extends Component {
  render() {
    return (
      <Box sx={{ m: 3, ml: 1, mt: 5 }}>
        <TabTitle title="PlayStation®5" />
        {/* <ThemeProvider theme={theme}>
            <Typography variant="h5"> PlayStation®5</Typography>
          </ThemeProvider>
        </Box> */}

        <Box
        //   sx={{
        //     display: "flex",
        //     flexWrap: "wrap",
        //     "& > *": {
        //       m: 0,
        //       width: 1200,
        //       height: 540,
        //     },
        //   }}
        >
          <Paper elevation={3}>
            <Img src={PS5} />
          </Paper>
        </Box>
        <Box
          sx={{
            mx: 55,
            mt: 5,
            "& > :not(style)": { minWidth: "260px", padding: "0.4em" },
          }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{ bgcolor: "error.main" }}
          >
            <Typography>New</Typography>
          </Button>
        </Box>
        <Box
          //   style={{ marginBottom: "40px", padding: "10px", marginLeft: "350px" }}
          sx={{ mx: 38 }}
        >
          <Typography variant="h5">
            PlayStation®5　抽選販売　応募開始のご案内
          </Typography>
        </Box>
      </Box>
    );
  }
}
