import React from "react";
import { Typography, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme();

theme.typography.body1 = {
  fontWeight: "400",
  fontSize: "xx-small",
};
export default ({ title }) => (
  <ThemeProvider theme={theme}>
    <Typography variant="body1">{title}</Typography>
  </ThemeProvider>
);
