import React from "react";
import { Box } from "@mui/system";
import { List, Button } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ListTitle from "../../../parts/ListTitle";

export default function ShopKid() {
  return (
    <Box sx={{ zIndex: 1, position: "relative", ml: "5px" }}>
      <List sx={{ mt: "-15px" }}>
        <Button
          sx={{
            bgcolor: "#c6b99380",
            color: "black",
            fontSize: "1px",
            minWidth: "103px",
            paddingRight: "2px",
          }}
        >
          <ListTitle title="SHOP KID" />
          <ExpandMore sx={{ fontSize: "12px" }} />
        </Button>
      </List>
    </Box>
  );
}
