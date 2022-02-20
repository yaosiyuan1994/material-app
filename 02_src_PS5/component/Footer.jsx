import React, { Component } from "react";
import { Box, Button, Typography, Link, AppBar, Toolbar } from "@mui/material";

export default class Footer extends Component {
  render() {
    return (
      <Box>
        <Box sx={{ m: 3, ml: 4, mt: 5.5 }}>
          <Link underline="none" href="#" color="inherit">
            <Typography>PlayStation(R) サイトマップ</Typography>
          </Link>
        </Box>
        {/* <Box sx={{bgcolor:'black',height:120,mt:5}}>
              <Link underline='none' href='#' color='inherit'>
                <Typography style={{color:'#fff',font:'18px sans-serif'}}>
                商品カテゴリー一覧
                </Typography>
              </Link>
            </Box> */}
      </Box>
    );
  }
}
