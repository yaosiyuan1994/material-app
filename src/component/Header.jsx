import React from "react";
import HeaderLift from "./HeaderNav/HeaderLift/HeaderLift";
import HeaderRight from "./HeaderNav/HeaderRight/HeaderRight";
import { Box } from "@mui/system";
import TopTitle from "./parts/TopTitle";
// import Button from "./parts/Button";

export default function Header() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        zIndex: "1",
      }}
    >
      <Box
        sx={{
          zIndex: "1",
          display: "flex",
          justifyContent: "space-between",
          bgcolor: "#00000080",
          height: "30px",
          windth: "100%",
        }}
      >
        <TopTitle />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(16,1fr)",
          gridColumnGap: "2rem",
          pardding: "1rem 1rem 0",
        }}
      >
        <HeaderLift />
        <HeaderRight />
      </Box>
    </Box>
  );
}
