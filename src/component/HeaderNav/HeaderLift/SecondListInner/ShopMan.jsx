import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { List, Collapse, Link, ListItem } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListTitle from "../../../parts/ListTitle";

export default function ShopMan() {
  //   const [open, setOpen] = useState(true);
  //   const handleClick = () => {
  //     setOpen(!open);
  //   };
  return (
    <Box sx={{ zIndex: 1, position: "relative", ml: "5px" }}>
      <List sx={{ mt: "-15px" }}>
        <Button
          //   onClick={handleClick}
          sx={{
            bgcolor: "#c6b99380",
            color: "black",
            fontSize: "1px",
            minWidth: "103px",
            paddingRight: "2px",
          }}
        >
          <ListTitle title="SHOP MAN" />
          <ExpandMore sx={{ fontSize: "12px" }} />
          {/* {open ? (
            <ExpandLess sx={{ fontSize: "12px" }} />
          ) : (
            <ExpandMore sx={{ fontSize: "12px" }} />
          )} */}
        </Button>
        {/* <ListItem
        //   in={open}
        //   timeout="auto"
        //   unmountOnExit
        //   sx={{ display: "flex", flexFlow: "row nowrap" }}
        >
          <List>
            <Link href="#" underline="hover" color="black">
              <ListTitle title="MEN FW2021" />
            </Link>
            <Link href="#" underline="hover" color="black">
              <ListTitle title="WOMEN FW2021" />
            </Link>
            <Link href="#" underline="hover" color="black">
              <ListTitle title="SPECIAL ITEMS" />
            </Link>
          </List>
        </ListItem> */}
      </List>
    </Box>
  );
}
