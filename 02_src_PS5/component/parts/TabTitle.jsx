import React from "react";
import { Box, Typography, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme();

theme.typography.h5 = {
  fontSize: "1.75rem",
};
export default ({ title }) => (
  <Box>
    <ThemeProvider theme={theme}>
      <Typography variant="h5">{title}</Typography>
    </ThemeProvider>
  </Box>
);
