import React from "react";
import { Box } from "@mui/system";
import FristList from "./FristList";
import SecondList from "./SecondList";

export default function HeaderLift() {
  return (
    <Box sx={{ gridColumn: "1/11" }}>
      <FristList />
      <SecondList />
    </Box>
  );
}
