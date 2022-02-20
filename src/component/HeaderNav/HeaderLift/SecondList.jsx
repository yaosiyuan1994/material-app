import React from "react";
import { List, ListItem } from "@mui/material";
import NewArrivals from "./SecondListInner/NewArrivals";
import ShopMan from "./SecondListInner/ShopMan";
import ShopWoman from "./SecondListInner/ShopWoman";
import ShopKid from "./SecondListInner/ShopKid";
import SpecialItem from "./SecondListInner/SpecialItem";
import HomeWare from "./SecondListInner/HomeWare";

export default function SecondList() {
  return (
    <List sx={{ display: "flex", pt: "0" }}>
      <NewArrivals />
      <ShopMan />
      <ShopWoman />
      <ShopKid />
      <SpecialItem />
      <HomeWare />
    </List>
  );
}
