import React from "react";
import { Box } from "@mui/system";
import { Link, Typography } from "@mui/material";
import ListTitle from "../../../parts/ListTitle";

export default function RightLink() {
  return (
    <Box
      sx={{
        zIndex: 1,
        position: "relative",
        display: "flex",
        paddingRight: "23px",
        flexDirection: "column",
        alignItems: "flex-end",
        marginTop: "3rem",
      }}
    >
      <Link herf="#" variant="caption" underline="hover" color="inherit">
        <ListTitle title={"LOG IN"} />
      </Link>
      <Link herf="#" variant="caption" underline="hover" color="inherit">
        <ListTitle title={"WISHLIST [0]"} />
      </Link>
      <Link herf="#" variant="caption" underline="hover" color="inherit">
        <ListTitle title={"SHOPPING BAG [0]"} />
      </Link>
      <Link herf="#" variant="caption" underline="hover" color="inherit">
        <ListTitle title={"CUSTOMER SERVICE"} />
      </Link>
      <Link herf="#" variant="caption" underline="hover" color="inherit">
        <ListTitle title={"NEWSLETTER"} />
      </Link>
      <Box>
        <Link component="button" color="inherit" underline="hover">
          <ListTitle title={"JP ¥"} />
        </Link>
        <Typography component="span" variant="caption">
          /
        </Typography>
        <Link component="button" color="inherit" underline="hover">
          <ListTitle title={"ENGLISH"} />
        </Link>
      </Box>
    </Box>
  );
}
