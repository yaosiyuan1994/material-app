import React, { Component } from "react";
import {
  Box,
  Typography,
  Link,
  ThemeProvider,
  createTheme,
  Tabs,
  Tab,
} from "@mui/material";
import Ps5 from "./Nav-inner/Ps5";
import Top from "./Nav-inner/Top";
import Ps4 from "./Nav-inner/Ps4";
import PsVR from "./Nav-inner/PsVR";
import Service from "./Nav-inner/Service";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const styles = {
  Style: {
    textTransform: "capitalize",
    minWidth: "98px",
  },
};

const theme = createTheme();

theme.typography.body1 = {
  fontSize: "1.13rem",
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Nav() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ m: 3, ml: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2.5,
          position: "relative",
        }}
      >
        <Link href="#" color="inherit" underline="none">
          <ThemeProvider theme={theme}>
            <Typography variant="body1" gutterBottom>
              PlayStation®
            </Typography>
          </ThemeProvider>
        </Link>
        <Link href="#" color="inherit" underline="none">
          <Typography variant="caption" gutterBottom>
            <ArrowRightIcon sx={{ position: "absolute", right: 85 }} />
            PlayStation.com
          </Typography>
        </Link>
      </Box>
      <Box sx={{ borderBottom: "1", borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="scrollable"
        >
          <Tab label="Top" {...a11yProps(0)} style={styles.Style} />
          <Tab label="PlayStation®5" {...a11yProps(1)} style={styles.Style} />
          <Tab label="PlayStation®4" {...a11yProps(2)} style={styles.Style} />
          <Tab label="PlayStation®VR" {...a11yProps(3)} style={styles.Style} />
          <Tab label="Service" {...a11yProps(4)} style={styles.Style} />
          <Tab label="GameSoftware" {...a11yProps(5)} style={styles.Style} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Top />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Ps5 />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Ps4 />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <PsVR />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Service />
      </TabPanel>
    </Box>
  );
}
