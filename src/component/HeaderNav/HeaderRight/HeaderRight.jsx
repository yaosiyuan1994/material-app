import React from "react";
import { Box } from "@mui/system";
import Search from "./RightInner/Search";
import RightLink from "./RightInner/RightLink";
import RightList from "./RightInner/RightList";

export default function HeaderRight() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gridColumn: "11/17",
      }}
    >
      <Search />
      <RightLink />
      <RightList />
    </Box>
  );
}
