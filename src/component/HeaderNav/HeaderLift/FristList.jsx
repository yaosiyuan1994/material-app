import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import ListTitle from "../../parts/ListTitle";
import HideOnScroll from "../../parts/HideOnScroll";

export default function FristList(props) {
  return (
    <Box sx={{ zIndex: 1, position: "relative", ml: "-20px" }}>
      <HideOnScroll {...props}>
        <ul style={{ display: "flex", flexWrap: "wrap", listStyle: "none" }}>
          <li>
            <Button
              sx={{
                bgcolor: "black",
                color: "white",
                fontSize: "1px",
                minWidth: "52px",
              }}
            >
              <ListTitle title="SHOP" />
            </Button>
          </li>
          <li>
            <Button
              sx={{
                bgcolor: "lightgreen",
                ml: "8px",
                color: "black",
                fontSize: "1px",
                minWidth: "52px",
              }}
            >
              <ListTitle title="Imaginary tv" />
            </Button>
          </li>
        </ul>
      </HideOnScroll>
    </Box>
  );
}
