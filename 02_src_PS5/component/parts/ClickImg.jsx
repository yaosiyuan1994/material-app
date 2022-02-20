import React from "react";
import Link from "@mui/material/Link";
import ClickImg from "../Nav-inner/imgas/click.jpg";
import CloseIcon from "@mui/icons-material/Close";

export default () => {
  return (
    <Link href="#" sx={{ position: "fixed", right: 30, bottom: 80 }}>
      <CloseIcon
        sx={{
          bgcolor: "black",
          borderRadius: 5,
          color: "white",
          position: "fixed",
          right: 20,
          bottom: 120,
        }}
      />
      <img src={ClickImg} alt="" />
    </Link>
  );
};
