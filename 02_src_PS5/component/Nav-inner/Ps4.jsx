import React, { Component } from "react";
import { Box, ThemeProvider, Typography, Paper, Button } from "@mui/material";
import ArrowRight from "@mui/icons-material/ArrowRight";
import PS4 from "./imgas/ps4.png";
import Img from "../parts/Img";
import TabTitle from "../parts/TabTitle";

export default class Ps4 extends Component {
  render() {
    return (
      <Box sx={{ m: 3, ml: 1, mt: 5 }}>
        <TabTitle title="PlayStation®4" />

        <Box>
          <Paper elevation={3} sx={{}}>
            <Img src={PS4} />
          </Paper>
        </Box>
        <Box
          sx={{
            mx: 40,
            mt: 5,
            // "& > :not(style)": { minWidth: "260px", padding: "0.4em" },
          }}
        >
          <Button variant="contained" size="large">
            <Typography sx={{ display: "flex" }}>
              <ArrowRight />
              PlayStation®5でプレイできるPlayStation®4ゲーム{" "}
            </Typography>
          </Button>
        </Box>
      </Box>
    );
  }
}
