import React, { Component } from "react";
import PropTypes from "prop-types";
import { useScrollTrigger } from "@mui/material";
import { Slide } from "@mui/material";

export default function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};
