import React, { useState, Component } from "react";
import moment from "moment";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import ListTitle from "../../../parts/ListTitle";
import Mouse from "../../../parts/Mouse";

export default function RightList(props) {
  const now = moment().format(" HH:mm");
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  // const handleMouseMove = (e) => {
  //   setX(e.clientX);
  //   setY(e.clientY);
  // };

  return (
    <Box
      sx={{
        zIndex: 1,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        paddingRight: "23px",
        marginTop: "2.5rem",
        alignItems: "flex-end",
      }}
    >
      <ListTitle title={"SHOP FEED"} />
      <ListTitle title={now} />

      <Mouse
        render={(mouse) => {
          return (
            <Typography sx={{ fontWeight: "400", fontSize: "xx-small" }}>
              {mouse.x}/{mouse.y}
            </Typography>
          );
        }}
      />

      <ListTitle title={"/"} />
    </Box>
  );
}
