import React, { useRef } from "react";
import { Box } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import { Button } from "@mui/material";
import "./SearchTitle.css";

const theme = createTheme({
  typography: {
    fontFamily: "cursive",
    fontSize: 20,
    lineHeight: "1.2",
  },
});

// const fnc = () => {
//   console.log("out fnc");
//   return 1 + 1;
// };

export default class SearchButton extends React.Component {
  constructor(props) {
    super(props);
    this.buttonDom = React.createRef();
    this.state = {
      className: "searchText",
      content: "Hello,how can I help you today?",
    };
    // this.onMouseEnter = this.onMouseEnter.bind(this);
  }

  // onMouseEnter() {
  //   console.log(`onMouseEnter-this:${this.constructor.name}`);
  //   this.setState({
  //     content: "Search Off-White",
  //   });
  // }

  onMouseEnter = () => {
    console.log(`onMouseEnter-this:${this}`);
    this.setState({
      className: "searchText",
      content: "Search Off-White",
    });
  };

  onMouseLeave = () => {
    this.setState({
      className: "searchText",
      content: "Hello,how can I help you today?",
    });
  };

  handleScroll() {
    console.log(document.documentElement.scrollTop);
    // if (document.documentElement.scrollTop > 160) {
    //   this.setState({
    //     className: "searchShow",
    //     content: "2022 man`s",
    //   });
    // }
    document.documentElement.scrollTop > 160
      ? this.setState({
          className: "searchShow",
          content: "2020 man`s",
        })
      : this.setState({
          className: "searchText",
          content: "Hello,how can I help you today?",
        });
  }

  componentDidMount() {
    console.log("this.buttonDom", this.buttonDom);
    this.buttonDom.current.addEventListener("mouseenter", this.onMouseEnter);
    this.buttonDom.current.addEventListener("mouseleave", this.onMouseLeave);
    window.onscroll = () => this.handleScroll();
  }

  render() {
    const { content, className } = this.state;
    return (
      <div>
        <Box
          sx={{
            zIndex: 1,
            textAlign: "right",
            display: "flex",
            marginTop: "16px",
          }}
        >
          <ThemeProvider theme={theme}>
            <Typography component="span">{content}</Typography>
            <Button
              ref={this.buttonDom}
              className={className}
              sx={{ color: "black" }}
            >
              <Search sx={{ fontSize: "25px" }} />
            </Button>
          </ThemeProvider>
        </Box>

        {/* <ThemeProvider theme={theme}>
        <Typography component="span">
          Hello,how can I help you today?
        </Typography>
        <Button className="searchText" sx={{ color: "black" }}>
          <Search sx={{ fontSize: "25px" }} />
        </Button>
      </ThemeProvider> */}
      </div>
    );
  }
}
